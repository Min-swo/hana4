package com.hana4.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hana4.demo.entity.User;

public interface ApiRepository extends JpaRepository<User, Long> {
}
