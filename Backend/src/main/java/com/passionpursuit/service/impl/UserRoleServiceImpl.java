package com.passionpursuit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.passionpursuit.entities.UserRoleEntity;
import com.passionpursuit.entities.enums.UserRoleEnum;
import com.passionpursuit.exceptionhandler.NotFoundException;
import com.passionpursuit.repostiory.UserRoleRepository;
import com.passionpursuit.service.UserRoleService;

import java.util.Optional;

@Service
public class UserRoleServiceImpl implements UserRoleService {
    private final UserRoleRepository userRoleRepository;

    @Autowired
    public UserRoleServiceImpl(UserRoleRepository userRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }

    @Override
    public UserRoleEntity getUserRoleByEnumName(UserRoleEnum userRoleEnum) {
        Optional<UserRoleEntity> byRole = this.userRoleRepository.findByRole(userRoleEnum);
        if (byRole.isPresent()) {
            return byRole.get();
        } else {
            throw new NotFoundException("User role not found. Please seed the roles.");
        }
    }

    @Override
    public UserRoleEntity saveRole(UserRoleEntity userRoleEntity) {
        return this.userRoleRepository.save(userRoleEntity);
    }
}
