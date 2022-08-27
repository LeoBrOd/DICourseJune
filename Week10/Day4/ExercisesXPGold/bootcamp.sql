--Exercise 2: Students Table
--Update 
select * from students
--1
UPDATE students
set birth_date = '02/11/1998'
where last_name='Benichou'

--2
UPDATE students
set last_name = 'Guez'
where first_name = 'David'

--Delete
delete from students
where first_name = 'Lea' and last_name = 'Benichou'

--Count
--1
select count (*) from students

--2
select count (*) from students
where birth_date > '1/01/2000'

--Insert / Alter
--1
ALTER TABLE students
ADD COLUMN math_grade integer

--2
UPDATE students
set math_grade = 80
where id = 1

--3
UPDATE students
set math_grade = 90
where id BETWEEN 2 and 4

--4
UPDATE students
set math_grade = 40
where id = 6

--5
select count (math_grade) from students
where math_grade > 83

--6
insert into students
values (8,'Omer', 'Simpson', '1980-10-03', 70)

--7   !!  didn`t finish !!
select first_name, last_name from students

--SUM
select sum (math_grade) from students







