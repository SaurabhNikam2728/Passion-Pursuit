package com.passionpursuit.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.passionpursuit.entities.enums.UserRoleEnum;

@Entity
@Table(name = "roles")
public class UserRoleEntity extends BaseEntity {
	
    private UserRoleEnum role;

    @Enumerated(EnumType.STRING)
    public UserRoleEnum getRole() {
        return role;
    }

    public void setRole(UserRoleEnum role) {
        this.role = role;
    }
}
