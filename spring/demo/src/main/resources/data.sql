truncate table DemoUser;
insert into DemoUser(username, age)
values ('A', 1);
insert into DemoUser(username, age)
values ('B', 2);

insert into DemoUser(username, age)
        (select username from DemoUser where not exists(username = 'C1'))
