select * from country

select * from customer where customer_id in (10,80,90)

select first_name, count(1)
from customer
group by first_name
having count(1)>1

--SubQuerry
select first_name, cnt from (
	select first_name, count(1) cnt
	from customer
	group by first_name
) t1
where t1.cnt>1

select * from city
where city.country_id=48

select city 
from city c
inner join country ON c.country_id= country.country_id
WHERE country.country='Israel'

--select city from city 
--where country_id in (select country_id)

SELECT address 
FROM address
JOIN customer
ON customer.address_id = address.address_id
where 
	customer.first_name = 'Mary' 
	AND customer.last_name = 'Smith'

select address, city, country
from address , city, country
where (select address_id from customer
where first_name='Mary' and last_name='Smith')
= address.address_id 
and city.city_id= address.city_id and
country.country_id=city.country_id

--select substring (first_name, 1,1) as letter, count (*) cnt
--from customer
--group by letter

select * from users

alter table users add column email varchar(255) unique











