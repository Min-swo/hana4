package com.hana4.demo.domain;

import org.hibernate.annotations.Comment;

import com.hana4.demo.dto.UserDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "DemoUser")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "bigint unsigned")
	private Long id;

	@Column(name = "username", nullable = false, columnDefinition = "varchar(31)")
	@Comment("사용자 이름")
	private String name;

	private short age;

	@Transient
	private int auth;

	public User() {
		this("");
	}

	public User(String name) {
		this(0L, name, (short)0);
	}

	public User(Long id, String name) {
		this(id, name, (short)0);
	}

	public User(String name, short age) {
		this(0L, name, age);
	}

	public User(Long id, String name, short age) {
		this.id = id;
		this.name = name;
		this.age = age;
	}

	public UserDTO toDTO() {
		return new UserDTO(this.id, this.name, this.age);
	}
}
