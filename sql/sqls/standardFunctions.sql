select sum(salary) from emp;
select conv('FF', 16, 10), power(2, 3), rand();
select '2024-04-25', cast('2024-04-25' as date), convert('2024-04-25', date);
select convert(-1.567, signed INTEGER), convert(abs(-1.567), unsigned integer);
select cast(str_to_date('2018-02-03', '%d-%m-%Y') as date);
select date_format('2018-02-03', '%d-%m-%Y');
select date_format('2018-02-03', '%d-%m-%y');


select dname, HEX(AES_ENCRYPT(dname, '암호키')) from Dept;
select dname, AES_ENCRYPT(dname, '암호키') from Dept;
select dname, AES_ENCRYPT(dname, '암호키') from Dept;

select ascii('A'), char(65, 66), cast(char(65, 66) as char);
select length('AB한글'), char_length('AB한글'), bit_length('A'), sign(-2), sign(2);
select substring('abcdefg', 2, 3);
select substring_index('a,b,c,d', ',', 3);
select substring_index(substring_index('a,b,c,d', ',', 3), ',', -1);


select e.*, d.dname
    from emp e inner join Dept d on e.dept = d.id;

select * from view_emp_dept;