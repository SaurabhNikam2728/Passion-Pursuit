package com.passionpursuit.repostiory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.passionpursuit.entities.BusinessOwner;

import java.util.Optional;

@Repository
public interface BusinessOwnerRepository extends JpaRepository<BusinessOwner, Long> {
    Optional<BusinessOwner> findByUsername(String username);

    Optional<BusinessOwner> findByBusinessName(String businessName);
}
