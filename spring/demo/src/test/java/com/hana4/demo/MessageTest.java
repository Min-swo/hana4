package com.hana4.demo;

import static org.assertj.core.api.Assertions.*;

import java.util.Locale;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.MessageSource;
import org.springframework.context.NoSuchMessageException;

@SpringBootTest
public class MessageTest {
	@Autowired
	MessageSource msgSrc;

	@Test
	void siteMessageTest() {
		String title = msgSrc.getMessage("site.title", null, Locale.KOREAN);
		System.out.println("title = " + title);
		assertThat(title).isEqualTo("데모앱");

		String titleEn = msgSrc.getMessage("site.title", null, Locale.ENGLISH);
		System.out.println("title = " + title);
		assertThat(titleEn).isEqualTo("DemoApplication");

		String description = msgSrc.getMessage("site.description", new Object[] {"테스트"}, Locale.KOREAN);
		System.out.println("description = " + description);
		assertThat(description).isEqualTo("데모::테스트");

	}

	@Test
	void notFoundTest() {
		assertThatThrownBy(() -> msgSrc.getMessage("site.titleXXX", null, Locale.KOREA)).isInstanceOf(
			NoSuchMessageException.class);
		String msg = msgSrc.getMessage("site.titleXXX", null, "Default", Locale.KOREA);
		assertThat(msg).isEqualTo("Default");
	}
}
