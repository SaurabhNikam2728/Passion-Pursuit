package com.passionpursuit.service;

import java.util.List;

import com.passionpursuit.entities.Category;
import com.passionpursuit.entities.enums.CategoryNameEnum;

public interface CategoryService {
    Category findByName(CategoryNameEnum category);

    List<Category> initCategories();
}
