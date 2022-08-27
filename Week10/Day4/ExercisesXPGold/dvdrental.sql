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