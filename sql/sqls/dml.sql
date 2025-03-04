select * from Major;
update Major set name='소프트웨어학과' where id = 3;

select * from Major limit 0, 2;
select * from Major limit 3, 2;
desc Major;
insert into Major(name) values ('철학과');

insert into Major(name)
values ('컴퓨터공학과'), ('소프트웨어공학과');

insert into Major(name) select '산업공학과' from dual;

insert into Major set name = '경제학과';
insert into Major set name = '경영학과';

select 1 + 2 from dual;

select * from Student;
desc Student;

insert into Student(name, birthdt, major, mobile, email)
values('Hong', '990102', 1, '010-2323-4545', 'hong@gmail.com');

insert into Student(name, birthdt, major, mobile, email)
values('Kim', '980302', 5, '010-2323-7878', 'kim@gmail.com');

insert into Student(name, birthdt, major, mobile, email)
values('Lee', '980302', 5, '010-2323-7878', 'lee@gmail.com');

insert into Student(name, birthdt, major, mobile, email)
values('Choi', '970302', null, '010-2323-9898', 'choi@gmail.com');

select * from Student where name = 'Kim';
select * from Student where gender = 0;
select * from Student where birthdt like '98%';
select * from Student where birthdt between '980101' and '981231';
select * from Student where birthdt >= '980101' and birthdt <= '981231';
select * from Student where major in (5, 6);
select * from Student where major in (5, 6) order by name desc;
select * from Student where major = 5 or major = 6;
select * from Student where major in (select major from Student where major >= 5);
select * from Student where major in (select distinct major from Student where major >= 5);
select * from Student where major = (select min(major) from Student);
select * from Student where major > ANY(select major from Student);
select * from Student where major > SOME(select major from Student);
select * from Student where major < ALL(select major from Student);
select * from Student order by rand();
select * from Student order by id desc limit 2;
select major, count(*) cnt from Student where id > 0 group by major having count(*) > 1;
select major, count(*) as cnt from Student where id > 0 group by major having cnt > 1;

select major from Student where major >= 5;
select * from Student;
select distinct major from Student where major >= 5;
select max(major), min(birthdt) from Student;
select max(major), min(major) from Student;

select * from Student inner join Major on Student.major = Major.id where Student.id >= 2;

select * from Student s inner join Major m on s.major = m.id where s.id >= 2;

select * from Student s left outer join Major m on s.major = m.id;

select * from Student s right outer join Major m on s.major = m.id;

select * from Major where id <= 3
UNION
select * from Major where id >= 3;

select * from Student s left outer join Major m on s.major = m.id
UNION ALL
select * from Student s right outer join Major m on s.major = m.id;

-- select * from Student s full outer join Major m on s.major = m.id;


select * from Student inner join Major on Student.major = Major.id where Student.id >= 2;


select * from Student where major is null;

-- bad
select * from Student where major = (select max(major) from Student);
-- good
select s.*, m.name from Student s left join schooldb.Major M on s.major = M.id;

-- bad
select s.*, sub.name from Student s inner join (select * from Major where id <= 3) sub
on s.major = sub.id;
-- not bad
select s.*, m.name
    from Student s inner join Major m
        on s.major = m.id and m.id <= 3;
-- goood
select s.*, m.name
    from Student s inner join Major m
        on s.major = m.id
            where m.id <= 3;



-- 평균 급여보다 높은 부서명과 그 부서의 최고 연봉자 구하기
# having avg(sal) > (select avg(sal) from ...


select *
from Subject;

select * from Prof;

insert into Prof (id, name) values (1, '김영훈');
insert into Prof (id, name) values (2, '신동군');
insert into Prof (id, name) values (3, '이상원');
insert into Prof (id, name) values (4, '고영중');

insert into Subject(name, prof) VALUES('자료구조개론', 1);
insert into Subject(name, prof) VALUES('운영체제', 2);
insert into Subject(name, prof) VALUES('데이터베이스개론', 3);
insert into Subject(name, prof) VALUES('인공지능개론', 4);
insert into Subject(name) VALUES('소프트웨어공학개론');

select s.*, p.name
from Subject s left join Prof p on s.prof = p.id;

alter table schooldb.Prof add column subjectcnt tinyint unsigned not null default 0 comment '당담 과목 수';

select group_concat(id), prof, count(*)
    from Subject group by prof;

select *
from Prof p inner join (select group_concat(id), prof, count(*)
                          from Subject group by prof) sub
                on p.id = sub.prof;

update Prof p inner join (select group_concat(id), prof, count(*) as cnt
                          from Subject group by prof) sub
    on p.id = sub.prof
set p.subjectcnt =  sub.cnt;


select (@rownum := @rownum + 1) rownum, s.*
    from Subject s, (select @rownum := 0) rn;


