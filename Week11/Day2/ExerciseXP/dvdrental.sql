--1
select name from language
where language_id = ( select DISTINCT language_id from film)

--2
select title, description, name from film join language
on film.language_id=language.language_id

--2.1
select title, description from film

--2.2
select name from language

--3
create table new_film (
	id serial primary key,
	name VARCHAR(255)
)

insert into new_film (name)
VALUES ('Lord of the Rings'),('Harry Potter'),('Time'),('Lara Croft'),('Interstellar'),('Avengers End Game')

--4
create table customer_review (
review_id serial primary key,
film_id integer,
language_id integer,
title VARCHAR (255),
score integer,
review_text VARCHAR (255),
last_update date NOT NULL DEFAULT CURRENT_DATE,
CONSTRAINT fk_film_id 
FOREIGN KEY (film_id) 
REFERENCES new_film(id)
ON DELETE SET NULL ,
CONSTRAINT fk_language_id 
FOREIGN KEY (language_id) 
REFERENCES language(language_id)
ON DELETE SET NULL
)

--5
insert into customer_review (film_id, language_id, title, score, review_text)
VALUES (1,1,'review on "Lord of the Rings"', 8, 'Hello World'), 
		(2,1,'review on "Harry Potter"', 9, 'Hello World'),
		(3,1,'review on "Time"', 7, 'Hello World')

--6
delete  from new_film 
where new_film.id = 3

select * from customer_review

--Exercise 2 : DVD Rental
--1
update film 
set language_id = 3
where film.title like '%r%'

select title from film
where film.language_id = 3

--2
--There is a reference to address, it doesn`t affect

--3
drop table customer_review
--it`s easy, cause nothing connected to it 

--4
Select count (inventory_id) from rental
where return_date > '29.08.2005'
-- 29.08.2005 - "today date"

--5
select title, rental_rate from film join inventory
on film.film_id=inventory.film_id
where inventory.film_id in (Select film_id from inventory join rental
	   on inventory.inventory_id=rental.inventory_id
where return_date > '29.08.2005')
order by rental_rate desc
limit 30

--6.1 
select title from film 
where lower(film.description) like '%sumo%' and
film.film_id in
(select film_id from film_actor
where film_actor.actor_id in
(select actor_id from actor
where actor.first_name='Penelope' and actor.last_name='Monroe'))

--6.2 
select title from film 
where rating = 'R' and film.length<60

--6.3
select title from film 
where film.film_id in
(select film_id from inventory where 
inventory.inventory_id in (select inventory_id from rental
where rental.customer_id in (select customer_id from customer 
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan') 
and rental.return_date between '28.07.2005' and '01.08.2005'))
and film.rental_rate>4

--6.4
select title, replacement_cost from film 
where lower(film.description) like '%sboat%' or lower(film.title) like '%sboat%'
and film.film_id in
(select film_id from inventory where 
inventory.inventory_id in (select inventory_id from rental
where rental.customer_id in (select customer_id from customer 
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan')))
order by replacement_cost desc
limit 1 row