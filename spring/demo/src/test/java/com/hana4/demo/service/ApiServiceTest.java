package com.hana4.demo.service;

import static org.assertj.core.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.hana4.demo.dao.ApiDAO;
import com.hana4.demo.entity.User;

@SpringBootTest
public class ApiServiceText {
	@MockBean
	ApiDAO dao;

	@Test
	void getUserTest() {
		final Long ID = 1L;
		Optional<User> oUser = dao.select(ID);
		assertThat(oUser.isPresent()).isTrue();
		User user = oUser.get();

		assertThat(user.getId()).isEqualTo(ID);
		assertThat(user.getName()).isEqualTo("");

		// Optional.of(new (1L, 'AA11', ))

	}
}
