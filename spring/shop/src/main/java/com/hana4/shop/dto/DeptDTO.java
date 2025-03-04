package com.hana4.shop.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmpDTO {
	private Integer superDeptId;
	private String name, tel, email;

	@Override
	public String toString() {
		return "CustDTO{" +
			"id=" + id +
			", name='" + name + '\'' +
			", tel='" + tel + '\'' +
			", email='" + email + '\'' +
			'}';
	}
}
