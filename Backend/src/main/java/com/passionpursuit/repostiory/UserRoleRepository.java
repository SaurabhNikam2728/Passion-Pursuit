package com.passionpursuit.repostiory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.passionpursuit.entities.UserRoleEntity;
import com.passionpursuit.entities.enums.UserRoleEnum;

import java.util.Optional;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRoleEntity, Long> {
    Optional<UserRoleEntity> findByRole(UserRoleEnum roleEnum);
}
