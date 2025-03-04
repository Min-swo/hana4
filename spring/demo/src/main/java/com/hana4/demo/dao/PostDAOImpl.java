package com.hana4.demo.dao;

import java.util.List;
import java.util.Optional;

import com.hana4.demo.dto.UserDTO;
import com.hana4.demo.entity.User;
import com.hana4.demo.repository.ApiRepository;

public class ApiDAOImpl implements ApiDAO {
	private final ApiRepository repository;

	public ApiDAOImpl(ApiRepository repository) {
		this.repository = repository;
	}

	@Override
	public List<User> selectAll() {
		return repository.findAll();
	}

	@Override
	public Optional<User> select(Long id) {
		return repository.findById(id);
	}

	@Override
	public User insert(UserDTO user) {
		User newUser = new User(user.getId(), user.getName(), user.getAge());
		return repository.save(newUser);
	}

	@Override
	public User update(UserDTO user) {
		Optional<User> pUser = repository.findById(user.getId());
		if (pUser.isEmpty()) {
			return null;
		}
		User managedUser = pUser.get();
		managedUser.setName(user.getName());
		if (user.getAge() > 0) {
			managedUser.setAge(user.getAge());
		}
		return repository.save(managedUser);
	}

	@Override
	public User delete(Long id) {
		Optional<User> user = repository.findById(id);
		if (user.isEmpty()) {
			return null;
		}
		repository.delete(user.get());
		return user.get();
	}
}
