package com.hana4.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana4.demo.dto.UserDTO;
import com.hana4.demo.service.ApiService;

@RestController
@RequestMapping("/api")
public class ApiController {
	private final ApiService service;

	public ApiController(ApiService service) {
		this.service = service;
	}

	@GetMapping("/users")
	public List<UserDTO> getUsers() {
		return service.getUsers();
	}

	@PostMapping("/users")
	public UserDTO addUser(@RequestBody UserDTO user) {
		System.out.println("user = " + user);
		return service.addUser(user);
	}

	@GetMapping("users/{id}")
	public ResponseEntity<UserDTO> getUser(@PathVariable("id") Long id) {
		System.out.println("id = " + id);
		return ResponseEntity.ok(service.getUser(id));
	}

	@PatchMapping("/users/{id}")
	public UserDTO modifyUser(@PathVariable("id") Long id, @RequestBody UserDTO user) {
		user.setId(id);
		return service.modifyUser(user);
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<UserDTO> deleteUser(@PathVariable("id") Long id) {
		return ResponseEntity.ok(service.removeUser(id));
	}

}
