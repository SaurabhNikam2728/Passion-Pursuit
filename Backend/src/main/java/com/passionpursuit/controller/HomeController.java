package com.passionpursuit.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.passionpursuit.entities.Hobby;
import com.passionpursuit.entities.UserEntity;
import com.passionpursuit.entities.enums.UserRoleEnum;
import com.passionpursuit.service.HobbyService;
import com.passionpursuit.service.UserRoleService;
import com.passionpursuit.service.UserService;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {
    private final HobbyService hobbyService;

    @Autowired
    public HomeController(HobbyService hobbyService) {
        this.hobbyService = hobbyService;
    }

    @GetMapping("/home")
    @Operation(summary = "Show client/business homepage", security = @SecurityRequirement(name = "bearerAuth"))
    public Set<Hobby> hobbiesShow(@RequestParam String username, @RequestParam String role) {
        if (role.equals("user")) {
            return this.hobbyService.getAllHobbieMatchesForClient(username);
        }
        return this.hobbyService.getAllHobbiesForBusiness(username);
    }
}
