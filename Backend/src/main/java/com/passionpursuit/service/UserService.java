package com.passionpursuit.service;

import java.util.List;

import com.passionpursuit.dto.AppClientSignUpDto;
import com.passionpursuit.dto.BusinessRegisterDto;
import com.passionpursuit.entities.AppClient;
import com.passionpursuit.entities.BusinessOwner;
import com.passionpursuit.entities.Hobby;
import com.passionpursuit.entities.UserEntity;

public interface UserService {
    List<UserEntity> saveUsersAndUserRoles();

    AppClient register(AppClientSignUpDto user);

    BusinessOwner registerBusiness(BusinessRegisterDto business);

    BusinessOwner saveUpdatedUser(BusinessOwner businessOwner);

    AppClient saveUpdatedUserClient(AppClient appClient);

    UserEntity findUserById(Long userId);

    UserEntity findUserByEmail(String email);

    boolean deleteUser(Long id);

    BusinessOwner findBusinessOwnerById(Long id);

    UserEntity findUserByUsername(String username);

    boolean userExists(String username, String email);

    void saveUserWithUpdatedPassword(UserEntity userEntity);

    AppClient findAppClientById(Long clientId);

    void findAndRemoveHobbyFromClientsRecords(Hobby hobby);
    
    boolean businessExists(String businessName);

    AppClient findAppClientByUsername(String username);

    BusinessOwner findBusinessByUsername(String username);
}


