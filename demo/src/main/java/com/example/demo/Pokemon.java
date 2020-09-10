package com.example.demo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Pokemon {
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }

    public String getAbility() {
        return ability;
    }
    public void setAbility(String ability) {
        this.ability = ability;
    }

    public String getWeight() {
        return weight;
    }
    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) { this.description = description; }

    public String[] getTypes() { return types; }
    public void setImage(String[] types) { this.types = types; }

    public String[] getWeaknesses() { return weaknesses; }
    public void setWeaknesses(String[] weaknesses) { this.weaknesses = weaknesses; }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getSpeed() { return speed; }
    public void setSpeed(int speed) { this.speed = speed; }


    public int getSpecialDefense() { return special_defense; }
    public void setSpecialDefense(int special_defense) { this.special_defense = special_defense; }


    public int getSpecialAttack() { return special_attack; }
    public void setSpecialAttack(int special_attack) { this.special_attack = special_attack; }

    public int getAttack() { return attack; }
    public void setAttack(int attack) { this.attack = attack; }

    public int getDefense() { return defense; }
    public void setDefense(int defense) { this.defense = defense; }

    public int getPs() { return ps; }
    public void setPs(int ps) { this.ps = ps; }

    public int[] getEvolutions() { return evolutions; }
    public void setEvolutions(int[] evolutions) { this.evolutions = evolutions; }
    
    String name;
    String category;
    String ability;
    String weight;
    String image;
    String description;
    String[] types;
    String[] weaknesses;
    int ps;
    int id;
    int speed;
    int special_defense;
    int special_attack;
    int attack;
    int defense;
    int[] evolutions;

}
