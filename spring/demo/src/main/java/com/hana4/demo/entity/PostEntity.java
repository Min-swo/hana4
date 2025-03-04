package com.hana4.demo.entity;

import org.hibernate.annotations.Comment;

import com.hana4.demo.dto.PostDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Post")
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(columnDefinition = "varchar(255)")
	private String id;

	@Column(name = "title", nullable = false, columnDefinition = "varchar(255)")
	@Comment("사용자 이름")
	private String title;

	@Column(name = "writer", nullable = false, columnDefinition = "varchar(255)")
	@Comment("작가")
	private String writer;

	@Column(name = "body", nullable = false, columnDefinition = "text")
	@Comment("내용")
	private String body;

	public PostDTO toDTO() {
		return new PostDTO(this.id, this.title, this.writer, this.body);
	}
}
