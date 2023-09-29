package com.passionpursuit.repostiory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.passionpursuit.entities.Hobby;
import com.passionpursuit.entities.Location;

import java.util.List;
import java.util.Set;

@Repository
public interface HobbyRepository extends JpaRepository<Hobby, Long> {
	
    Set<Hobby> findAllByCreator(String creator);

    List<Hobby> findAllByLocation(Location location);
    
}
