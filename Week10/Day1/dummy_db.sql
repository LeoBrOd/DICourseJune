CREATE TABLE users (
id serial,
	username varchar (255)
)

insert into users (username)
VALUES('john')

insert into users (username)
VALUES('johnjohn'),
('nafik')

select * from users

select nextval ('users_id_seq')

insert into users (username)
VALUES('mikush'),
('milush')					
				   
create table test_cons(
    id serial primary key,
    username varchar(255)not null unique,
    email varchar(255)unique
)

insert into test_cons(email,username)
values('test@gmail.com','test')

alter table users add column email varchar(255) unique

