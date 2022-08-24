CREATE TABLE students (
id SERIAL PRIMARY KEY,
	last_name varchar (255),
	first_name varchar (255),
	birth_date date
)

INSERT into students (last_name, first_name, birth_date)
VALUES 
('Marc',	'Benichou',	'02/11/1998'),
('Yoan',	'Cohen',	'03/12/2010'),
('Lea',	'Benichou',	'27/07/1987'),
('Amelia',	'Dux',	'07/04/1996'),
('David',	'Grez',	'14/06/2003'),
('Omer',	'Simpson',	'03/10/1980'),
('Leonid', 'Brodskyi', '13/08/1991')

--1
select * from students

--2
select last_name, first_name from students

--3.1
select last_name, first_name from students
WHERE id=2

--3.2
select last_name, first_name from students
WHERE last_name = 'Benichou' and first_name='Marc'

--3.3
select last_name, first_name from students
WHERE last_name = 'Benichou' or first_name='Marc'

--3.4 
select last_name, first_name from students
WHERE   first_name like '%' || 'a' || '%'

--3.5
select last_name, first_name from students
WHERE  first_name like ('A%')

--3.6
select last_name, first_name from students
WHERE  first_name like ('%a')

--3.7 ! didn`t finish !
--select last_name, first_name from students
--WHERE    substring (first_name,2)='a'
select last_name, first_name from students
where first_name like ('_a%')

--3.8
select last_name, first_name from students
WHERE  id= 1 or id= 3

--4
select * from students
where birth_date >= '01/01/2000'












