create table users (
    id int not null,
    name varchar(128) not null,
    email varchar(64) not null,
    mobile varchar(16) not null,
    primary key(id)
);


  alter table users add column created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, add column
  updated_at TIMESTAMP;

  SELECT * FROM users WHERE name LIKE 'a ORDER BY ${sort} ${order} LIMIT ${limit} OFFSET ${offset}'

  alter table users add column birthdate date, add column adress varchar(256), 

INSERT INTO users (id, name, email, mobile, birthdate, adress)
VALUES (1, 'Adityas', 'adityas@mail.com1', '08211', '199803-14', 'Bekasi');

UPDATE users SET name = 'Tyas', adress = 'Frankfurt' WHERE id = 1;

SELECT * FROM users WHERE name LIKE '%ad% ORDER BY name asc LIMIT 1 OFFSET 1';