package com.example.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ser.DefaultSerializerProvider;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
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
    public String getJsonProperties() throws IOException {
        Resource resource = new ClassPathResource("pokes.json");
        InputStream resourceAsStream = resource.getInputStream();
        String text = new BufferedReader(
                new InputStreamReader(resourceAsStream, StandardCharsets.UTF_8))
                .lines()
                .collect(Collectors.joining("\n"));

        ObjectMapper mapper = new ObjectMapper();

        Pokemon[] pokemons = mapper.readValue(text, Pokemon[].class);

        System.out.println("amount of pokemons: " + pokemons.length);
        for (Pokemon pokemon : pokemons) {
            System.out.println(pokemon.image);
        }

        return text;
    }
}
