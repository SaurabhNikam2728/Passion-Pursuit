package com.passionpursuit.entities;

import javax.persistence.*;

import com.passionpursuit.entities.enums.CategoryNameEnum;

@Entity
@Table(name = "categories")
public class Category extends BaseEntity {
    private CategoryNameEnum name;

    public Category(CategoryNameEnum categoryNameEnum) {
        this.name = categoryNameEnum;
    }

    public Category() 
    {
    }

    @Column(unique = true)
    @Enumerated(EnumType.STRING)
    public CategoryNameEnum getName() {
        return name;
    }

    public void setName(CategoryNameEnum name) {
        this.name = name;
    }
}