CREATE TABLE items (
id integer,
	item varchar (255),
	price integer
)

CREATE TABLE customers (
id integer,
	firstName varchar (255),
	lastName varchar (255)
)

INSERT into items (id, item,price)
VALUES 
(1, 'Small desk', 100),
(2, 'Large desk', 300),
(3, 'Fan', 80)

INSERT into customers (id, firstName, lastName)
VALUES
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson')

SELECT * FROM items

SELECT * FROM items
where price > 80

SELECT * FROM items
where price < 300

SELECT * FROM customers
where lastName = 'Smith'
-- it will show us just top of table cause there is no user like this 

SELECT * FROM customers
where lastName = 'Jones'

SELECT * FROM customers
where firstName != 'Scott'
