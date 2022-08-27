--Basic Select Statement
--1
select first_name as "First Name", last_name as "Last Name" from employees

--2
select DISTINCT department_id from employees

--3
select * from employees
order by first_name DESC

--4
select first_name, last_name, salary, salary*0.15 as "PF" from employees

--5
select employee_id, first_name, last_name, salary from employees
order by salary

--6
select sum (salary) from employees

--7
SELECT max (salary), min (salary) from employees

--8
select avg (salary) from employees

--9
select count (first_name) from employees

--10
select upper (first_name) from employees 

--11
select substring (first_name,1,3 ) from employees

--12
select first_name || ' ' || last_name as full_name from employees

--13
select first_name, last_name, char_length(first_name || ' ' || last_name) as full_name_length from employees

--14
SELECT * FROM employees WHERE first_name ~ '^[0-9]'

--15
select * from employees
limit 10

--Restricting And Sorting
--1
select first_name, last_name, salary from employees
where salary BETWEEN 10000 and 15000

--2
select first_name, last_name, hire_date from employees
where hire_date between '01/01/1987' and '31/12/1987'

--3
select first_name from employees
where first_name like '%c%' and first_name like '%e%'

--4
select last_name, job_title, salary from employees join jobs on employees.job_id=jobs.job_id
 where jobs.job_title not like '%Programmer%' and jobs.job_title not like '%Shipping%' and
 employees.salary != 4500 and employees.salary != 10000 and employees.salary != 15000
 
--5
select  last_name from employees
where char_length(last_name)= 6

--6
select  last_name from employees
where SUBSTRING (last_name,3,1)='e'

--7
select distinct job_title from jobs, employees 
where jobs.job_id=employees.job_id

--8
select * from employees
where last_name='Jones' or last_name='Blake' or last_name='Scott' or last_name='King' or last_name='Ford'
