--Subqueries
--1
select  first_name, last_name, salary from employees
where employees.salary > 
(select salary from employees
where last_name = 'Bell')
-- I have changed name on Bell cause there is no Bull

-- 2
SELECT first_name, last_name FROM employees
WHERE manager_id IN
(SELECT manager_id FROM employees
WHERE department_id IN
(SELECT department_id FROM departments
WHERE location_id IN
(SELECT location_id FROM locations
WHERE country_id =
(select country_id from countries 
where country_name like '%United States%'))));

-- 3
SELECT first_name, last_name
FROM employees
WHERE employees.job_id in 
(select job_id from jobs
where  lower (job_title) like '%manager%')

-- 4
SELECT first_name, last_name
FROM employees
WHERE salary > 
(SELECT AVG(salary) FROM employees)

-- 5
SELECT first_name, last_name, job_id, salary FROM employees
WHERE salary = 
(SELECT min_salary FROM jobs
WHERE employees.job_id = jobs.job_id)

-- 6
SELECT first_name, last_name
FROM employees
WHERE employees.job_id  in 
(select job_id from jobs
where  lower (job_title) not like '%supervisor%')

-- 7 didn`t understand
SELECT employee_id, first_name, last_name, salary FROM employees 
WHERE salary > 
(SELECT AVG(salary) FROM employees)

-- 8
SELECT DISTINCT salary FROM employees 
order by salary desc
offset 4
limit 1

-- 9
SELECT DISTINCT salary FROM employees
offset 3
limit 1

-- 10
SELECT department_name, department_id FROM departments
WHERE departments.department_id NOT IN
(SELECT DISTINCT department_id FROM employees)

--Joins
-- 1
SELECT departments.location_id, locations.street_address, locations.city, locations.state_province, countries.country_name
FROM departments JOIN locations 
ON departments.location_id = locations.location_id
JOIN countries 
ON locations.country_id = countries.country_id

-- 2
SELECT
	employees.first_name,
	employees.last_name,
	employees.department_id,
	departments.department_name
FROM employees JOIN departments 
ON employees.department_id = departments.department_id

-- 3
SELECT employees.first_name, employees.last_name, employees.job_id, departments.department_name, employees.employee_id
FROM employees JOIN departments 
ON employees.department_id = departments.department_id
JOIN locations 
ON departments.location_id = locations.location_id
WHERE locations.city = 'London';

-- 4
-- SELECT
-- (employee_id || ', '|| last_name) AS employee,
-- (manager_id || ', ' || (select last_name from employees
-- 					   where employee_id=manager_id )) AS manager
-- FROM employees

SELECT
(e.employee_id || ', '|| e.last_name) AS employee,
(m.employee_id || ', ' || m.last_name) AS manager
FROM employees e JOIN employees m
ON e.manager_id= m.employee_id

-- 5
SELECT
	employees.employee_id,
	employees.first_name,
	employees.last_name,
	departments.department_name,
	departments.department_id
FROM employees
JOIN departments ON employees.department_id = departments.department_id;

-- 6
SELECT
	employees.employee_id,
	jobs.job_title,
	CURRENT_DATE - employees.hire_date AS "number of days"
FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN jobs ON employees.job_id = jobs.job_id
WHERE departments.department_id = 9

-- 7
SELECT departments.department_name, (first_name || ' ' ||last_name) AS manager, locations.city FROM departments
JOIN employees ON departments.department_id = employees.department_id
JOIN locations ON departments.location_id = locations.location_id
WHERE employees.employee_id IN (SELECT distinct manager_id FROM employees);

-- 8
SELECT jobs.job_title, ((jobs.min_salary + jobs.max_salary)/2) as  "average salary "
fROM employees JOIN jobs 
ON employees.job_id = jobs.job_id

-- 9
SELECT
	departments.department_name,
	employees.first_name,
	employees.last_name,
	employees.hire_date,
	employees.salary
FROM employees
JOIN departments ON employees.department_id = departments.department_id
WHERE employees.employee_id IN (SELECT distinct manager_id FROM employees)
AND CURRENT_DATE - employees.hire_date > 365 * 15;