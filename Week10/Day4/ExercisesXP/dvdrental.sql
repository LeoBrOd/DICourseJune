--2.1
select * from customer

--2.2
select first_name || ' ' || last_name as full_name
from customer

--2.3
select DISTINCT create_date from customer

--2.4
select * from customer
order by first_name DESC

--2.5
select film_ID, title, description, release_year, rental_rate from film
order by film.rental_rate

--2.6
select address, phone from address
where address.district = 'Texas'

--2.7
select * from film
where film.film_id=15 or film.film_id=150

--2.8
select film_ID, title, description, length, rental_rate from film
where title = 'Harry Potter'

--2.9
select film_ID, title, description, length, rental_rate from film
where title Ilike 'ha%'
-- or
select film_ID, title, description, length, rental_rate from film
where SUBSTRING(title,1,2) = 'Ha'

--2.10
select title from film
order by rental_rate
limit 10

--2.11
select title from film
order by rental_rate
offset 10
limit 10

--2.12
select customer.first_name, customer.last_name, payment.amount, payment.payment_date
from customer join payment on payment.customer_id = customer.customer_id
order by customer.customer_id, payment.payment_id

--2.13
SELECT title from film
where film.film_id = inventory.film_id

--2.14
select DISTINCT country, city from city 
join country on city.country_id=country.country_id
order by country.country

--2.15
select  customer.customer_id, first_name, last_name, amount, payment_date from customer 
join payment ON  customer.customer_id=payment.customer_id
order by payment.staff_id

--Exercise 1: DVD Rental
--1
select distinct rating from film

--2
select title from film
where rating = 'G' or rating ='PG-13'

--2.1
select title from film
where film.rating = 'G' or film.rating ='PG-13' and film.rental_rate<3 and film.length<120
order by film.title

--3
update customer
set first_name = 'Leonid', last_name ='Brodskyi'
where first_name='Jared' 

--4

UPDATE address
set address = 'Emek Haula'
where address_id = (select address_id from customer where first_name = 'Leonid')