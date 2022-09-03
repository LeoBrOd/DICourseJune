--Part I
--1
CREATE TABLE  customer (
id serial primary key,
first_name VARCHAR(255),
last_name VARCHAR(255) NOT NULL
)

CREATE TABLE  customer_profile (
id serial primary key,
isLoggedIn BOOLEAN not NULL DEFAULT false,	
customer_id integer not NULL,
CONSTRAINT fk_customer_id 
FOREIGN KEY (customer_id) 
REFERENCES customer(id)
)

--2
insert into customer (first_name, last_name)
values ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive')

--3
insert into customer_profile (isLoggedIn, customer_id)
values (true,1), (false,2)

--4.1
select first_name from customer join customer_profile
on customer_profile.customer_id = customer.id
where customer_profile.isLoggedIn = 'true'

--4.2 didn't finish
select first_name, isLoggedIn from customer join customer_profile
on customer_profile.customer_id = customer.id

--4.3 didn't finish
select count (isLoggedIn) from customer_profile
where customer_profile.isLoggedIn ='false'

--Part II
--1
create table book(
book_id SERIAL PRIMARY KEY, 
	title VARCHAR(255) NOT NULL, 
	author VARCHAR(255) NOT NULL
)

--2
insert into book (title, author)
values ('Alice In Wonderland', 'Lewis Carroll'),
		('Harry Potter', 'J.K Rowling'),
		('To kill a mockingbird', 'Harper Lee')
		
--3
create TABLE STUDENT (
	student_id SERIAL PRIMARY KEY, 
	name VARCHAR(255) NOT NULL UNIQUE, 
	age INTEGER check (age between 0 and 15)
)

--4
insert into student (name, age)
VALUES ('John', 12),
		('Lera', 11),
		('Patrick', 10),
		('Bob', 14)
		
--5
create table library (
book_fk_id integer,
student_id integer,
borrowed_date date,
CONSTRAINT fk_book_fk_id 
FOREIGN KEY (book_fk_id) 
REFERENCES book(book_id)
ON DELETE CASCADE 
ON UPDATE CASCADE,
CONSTRAINT fk_student_id 
FOREIGN KEY (student_id) 
REFERENCES student(student_id)
ON DELETE CASCADE 
ON UPDATE CASCADE,
primary key (book_fk_id, student_id)	
)

--6
insert into library (student_id, book_fk_id, borrowed_date)
VALUES (1,1,'15/02/2022'),(4,3,'03/03/2021'),(2,1,'23/05/2021'),(4,2,'12/08/2021')

--7.1
select * from library

--7.2
select name, title from student join library
on student.student_id = library.student_id
join book
on book.book_id = library.book_fk_id

--7.3
select avg (age) from student join library
on student.student_id = library.student_id
join book
on book.book_id = library.book_fk_id
where book.title = 'Alice In Wonderland'

--7.4
delete from student
where student.student_id = 1

-- It will remove line with data from this student