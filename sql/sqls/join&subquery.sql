select * from Emp;

select avg(emp.salary) from emp;

select dept, avg(emp.salary) from emp group by dept;

select sub.*, e.*
from emp e inner join (select dept, avg(emp.salary), max(salary) maxSal from emp
                             group by dept having avg(salary) > (select avg(emp.salary) from emp)) sub
            on e.dept = sub.dept and e.salary = sub.maxSal
order by e.dept, e.ename;

select avg(emp.salary) avgSal, max(salary) maxSal from emp;

select e.*, sub.avgSal, sub.maxSal
from emp e inner join (select avg(emp.salary) avgSal, max(salary) maxSal from emp) sub
                      on e.salary = sub.maxSal;

select e.*, sub.avgSal, sub.maxSal
from emp e inner join (select avg(emp.salary) avgSal, max(salary) maxSal from emp) sub
            on e.salary = sub.maxSal
            inner join (select dept, avg(emp.salary) avgSal from emp group by dept) grp
            on sub.avgSal < grp.avgSal and e.dept = grp.dept
order by e.dept, e.id;

select dept, avg(salary), max(salary)
    from emp
    group by dept having avg(salary) > (select avg(salary) from emp);

select e1.*, e2.id, e2.ename
    from emp e1 left join emp e2 on e1.salary < e2.salary
where e2.id is null;


select * from emp;

select dept, min(ename)
from emp
group by dept;

select d.*, sub.ename
    from Dept d left join (select dept, min(ename) as ename
                                from emp
                                    group by dept) sub
                    on d.id = sub.dept;

-- ex) min(ename) -> captain
-- 1. 부서별 이름이 가장 빠른 직원
select dept, min(ename) from emp group by dept;
-- dept별 이름의 min은 구할 수 있음 하지만, 해당 직원의 id를 구하려면 sub query나 join이 필요함! 집계된 column이 아니기 때문에!
-- 1-1. subquery
select * from emp where ename in (select min(ename) from emp group by dept);
-- 1-2. self join
select e1.*
    from emp e1 left join emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
    where e2.id is null;

-- 2. 위 직원을 captin으로 update
# select d.*, e.* from Dept d
update Dept d
    inner join
        (select e1.dept, e1.id
            from emp e1
                left join emp e2
                    on e1.dept = e2.dept and e1.ename > e2.ename
            where e2.id is null) e
    on d.id = e.dept
set d.captain = e.id
where d.id > 0;

-- 결과 확인
select * from Dept;

select *, curdate(), curtime(), now() from emp where id in(3, 4, 5, 14 ,26);

update emp set outdt = '2024-04-25'
               where id in (3, 5);

update emp set outdt = curdate()
where id in (3, 26);

select * from Dept d inner join emp e on d.captain = e.id;

update Dept d inner join emp e on d.captain = e.id
    set d.captain = null
    where e.outdt is not null;

select * from dept;

select * from Dept d left join emp e on d.captain = e.id;