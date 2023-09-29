package com.passionpursuit.repostiory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.passionpursuit.entities.AppClient;

import java.util.Optional;

@Repository
public interface AppClientRepository extends JpaRepository<AppClient, Long> {
    Optional<AppClient> findByUsername(String username);
}
