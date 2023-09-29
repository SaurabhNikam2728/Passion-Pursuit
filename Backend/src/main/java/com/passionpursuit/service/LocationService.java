package com.passionpursuit.service;

import java.util.List;

import com.passionpursuit.entities.Location;
import com.passionpursuit.entities.enums.LocationEnum;

public interface LocationService {
    List<Location> initLocations();

    Location getLocationByName(LocationEnum locationEnum);
}
