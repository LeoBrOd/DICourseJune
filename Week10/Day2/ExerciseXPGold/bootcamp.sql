--1
select last_name, first_name, birth_date from students
order by last_name
fetch first 4 row only

--2
select last_name, first_name, birth_date from students
order by birth_date DESC
fetch first row only

--3
select last_name, first_name, birth_date from students
OFFSET 2 ROWS 
FETCH FIRST 3 ROW ONLY











