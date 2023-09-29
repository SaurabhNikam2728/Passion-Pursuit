package com.passionpursuit.service;

import com.passionpursuit.entities.UserRoleEntity;
import com.passionpursuit.entities.enums.UserRoleEnum;

public interface UserRoleService {
    UserRoleEntity getUserRoleByEnumName(UserRoleEnum userRoleEnum);

    UserRoleEntity saveRole(UserRoleEntity userRoleEntity);
}
