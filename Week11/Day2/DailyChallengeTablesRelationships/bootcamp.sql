CREATE TABLE  customer (
id serial primary key,
first_name VARCHAR(255),
last_name VARCHAR(255) NOT NULL
)

CREATE TABLE  customer_profile (
id serial primary key,
isLoggedIn BOOLEAN DEFAULT false not null,	
customer_id integer,
CONSTRAINT fk_customer_id 
FOREIGN KEY (customer_id) 
REFERENCES customer(id)
)

insert into customer (first_name, last_name)
values ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive')

insert into customer_profile (isLoggedIn, customer_id)
values (true,1)

select * from customer join customer_profile
on customer_profile.customer_id = customer.id
