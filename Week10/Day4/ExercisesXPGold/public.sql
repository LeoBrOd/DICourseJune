-- ALTER TABLE customers
--   RENAME COLUMN id TO customer_id;
  
-- ALTER TABLE items
--   RENAME COLUMN id TO item_id;

-- Exercise 3 : Items And Customers
create TABLE purchases (
id serial primary key,
	customer_id integer,
	item_id integer,
	quantity_purchased integer
)

ALTER TABLE purchases 
ADD CONSTRAINT fk_customer_id 
FOREIGN KEY (customer_id) 
REFERENCES customers (customer_id)	

ALTER TABLE purchases 
ADD CONSTRAINT fk_item_id 
FOREIGN KEY (item_id) 
REFERENCES items(item_id)	

insert into purchases (customer_id, item_id, quantity_purchased)
values (3,3,1), (5,2,10), (1,1,2)

--1.1 
select * from purchases

--1.2
select * from purchases join customers 
ON customers.customer_id = purchases.customer_id

--1.3
select item from items
where items.item_id = (select item_id from purchases
					  	where customer_id =5)
						
--1.4
select quantity_purchased from purchases
where purchases.item_id = (select item_id from items where item = 'Large desk')
or purchases.item_id = (select item_id from items where item = 'Small desk')

--2
select customers.firstname, customers.lastname, items.item from customers
natural join purchases
natural join items

--3
insert into purchases (customer_id, item_id, quantity_purchased)
values (4,4,4)
-- it will give an error, cause it won`t find this id in items 



