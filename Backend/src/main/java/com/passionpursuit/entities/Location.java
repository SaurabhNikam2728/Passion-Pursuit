package com.passionpursuit.entities;

import javax.persistence.*;

import com.passionpursuit.entities.enums.LocationEnum;

@Entity
@Table(name = "locations")
public class Location extends BaseEntity {

    private LocationEnum name;

    public Location(LocationEnum locationEnum) {
        this.name = locationEnum;
    }

    public Location() {
    }

    @Column(unique = true)
    @Enumerated(EnumType.STRING)
    public LocationEnum getName() {
        return name;
    }

    public void setName(LocationEnum name) {
        this.name = name;
    }
}
