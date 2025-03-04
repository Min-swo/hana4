package com.hana4.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hana4.demo.entity.CodeEntity;

public interface CodeRepository extends JpaRepository<CodeEntity, Integer> {

}
