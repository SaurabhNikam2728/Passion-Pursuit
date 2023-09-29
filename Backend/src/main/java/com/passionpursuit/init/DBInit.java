package com.passionpursuit.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.passionpursuit.service.CategoryService;
import com.passionpursuit.service.HobbyService;
import com.passionpursuit.service.LocationService;
import com.passionpursuit.service.UserService;

@Component
public class DBInit implements CommandLineRunner {
    private final UserService userService;
    private final CategoryService categoryService;
    private final HobbyService hobbyService;
    private final LocationService locationService;

    @Autowired
    public DBInit(UserService userService, CategoryService categoryService, HobbyService hobbyService, LocationService locationService) {
        this.userService = userService;
        this.categoryService = categoryService;
        this.hobbyService = hobbyService;
        this.locationService = locationService;
    }

    @Override
    public void run(String... args) throws Exception {
        this.userService.saveUsersAndUserRoles();
        this.categoryService.initCategories();
        this.locationService.initLocations();
    }

}

//CommandLineRunner:@FunctionalInterface 
//Callback used to run the bean.