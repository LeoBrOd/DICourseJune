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







