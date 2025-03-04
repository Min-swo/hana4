package com.hana4.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hana4.demo.dao.ApiDAO;
import com.hana4.demo.dto.UserDTO;
import com.hana4.demo.entity.User;

@Service
public class ApiServiceImpl implements ApiService {
	private final ApiDAO dao;

	public ApiServiceImpl(ApiDAO dao) {
		this.dao = dao;
	}

	@Override
	public List<UserDTO> getUsers() {
		List<User> users = dao.selectAll();
		// return users.stream().map((user) -> new UserDTO(user.getId(), user.getName(), user.getAge())).toList();
		return users.stream().map((User::toDTO)).toList();
	}

	@Override
	public UserDTO getUser(Long id) {
		Optional<User> oUser = dao.select(id);
		if (oUser.isEmpty()) {
			return null;
		}

		User user = oUser.get();
		// return new UserDTO(user.getId(), user.getName(), user.getAge());
		return user.toDTO();
	}

	@Override
	public UserDTO addUser(UserDTO user) {
		return dao.insert(user).toDTO();
	}

	@Override
	public UserDTO modifyUser(UserDTO user) {
		return dao.update(user).toDTO();
	}

	@Override
	public UserDTO removeUser(Long id) {
		return dao.delete(id).toDTO();
	}
}
