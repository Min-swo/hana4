package com.hana4.demo.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {
	@UniqueConstraint(
		name = "uniq_Code_codename_info",
		columnNames = {"codename"}
	)}
)
public class Code extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(nullable = false, length = 32)
	private String codeName;

	@OneToOne(mappedBy = "code", cascade = CascadeType.ALL)
	private CodeInfo codeInfo;

	@OneToMany(mappedBy = "code",
		fetch = FetchType.EAGER)
	@ToString.Exclude
	private List<SubCode> subcodes;
}
