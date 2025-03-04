package com.hana4.demo.service;

import java.util.List;

import com.hana4.demo.dto.UserDTO;

public interface ApiService {
	public List<UserDTO> getUsers();

	public UserDTO getUser(Long id);

	public UserDTO addUser(UserDTO user);

	public UserDTO modifyUser(UserDTO user);

	public UserDTO removeUser(Long id);
}
