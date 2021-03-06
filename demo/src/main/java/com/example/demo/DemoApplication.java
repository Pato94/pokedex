package com.example.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.stream.Collectors;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

    @GetMapping(value = "/pokemons", produces = MediaType.APPLICATION_JSON_VALUE)
    public Pokemon[] getJsonProperties() throws IOException {
        Pokemon[] pokemons = getPokemons();
        return pokemons;
    }

    @GetMapping(value = "/pokemons/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Pokemon getJsonProperties(@PathVariable("id") Integer id) throws IOException {
        Pokemon[] pokemons = getPokemons();

        Pokemon poke = null;
        for (Pokemon pokemon : pokemons) {
            if (pokemon.id == id) {
                poke = pokemon;
            }
        }
        return poke;
    }

    private Pokemon[] getPokemons() throws IOException {
        Resource resource = new ClassPathResource("pokes.json");
        InputStream resourceAsStream = resource.getInputStream();
        String textDetail = new BufferedReader(
                new InputStreamReader(resourceAsStream, StandardCharsets.UTF_8))
                .lines()
                .collect(Collectors.joining("\n"));

        ObjectMapper mapper = new ObjectMapper();

        Pokemon[] pokemons = mapper.readValue(textDetail, Pokemon[].class);
        return pokemons;
    }
}
