DROP DATABASE "dumbways_test";
CREATE DATABASE dumbways_test; 
 \c dumbways_test

CREATE TABLE book_tb (
    id serial PRIMARY KEY,
    name VARCHAR NOT NULL,
    category_id INT,
    writer_id INT,
    publication_year INT,
    img VARCHAR
);

CREATE TABLE category_tb (
    id serial PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE writer_tb (
    id serial PRIMARY KEY,
    name VARCHAR NOT NULL
);

ALTER TABLE "book_tb" ADD FOREIGN KEY ("category_id") REFERENCES "category_tb" ("id");

ALTER TABLE "book_tb" ADD FOREIGN KEY ("writer_id") REFERENCES "writer_tb" ("id");

INSERT INTO category_tb (name)
VALUES 
    ('education'),
    ('fiction'),
    ('action'),
    ('fantasy'),
    ('horror'),
    ('novel')
RETURNING *;

INSERT INTO writer_tb (name)
VALUES 
    ('Rizky Bar'),
    ('Egi Sajak'),
    ('Aziz Union'),
    ('Haris Astina'),
    ('Harper Lee'),
    ('Jane Austen'),
    ('Anne Frank'),
    ('George Owell')
RETURNING *;

INSERT INTO book_tb (name, category_id, writer_id, publication_year, img)
VALUES 
    ('AngularJs Essentials', 1, 1, 2020, 'https://itbook.store/img/books/9781783980086.png'),
    ('Python GUI Programming with Tkinter', 1, 2, 2020, 'https://images-na.ssl-images-amazon.com/images/I/51q9b2rJpNL._SX258_BO1,204,203,200_.jpg'),
    ('Unity 2018 By Example', 1, 3, 2020, 'https://images-na.ssl-images-amazon.com/images/I/61OfYb1+n+L.jpg'),
    ('Rust High Performance', 1, 4, 2020, 'https://images-na.ssl-images-amazon.com/images/I/51VlVhYiEOL._SY445_SX342_QL70_ML2_.jpg'),
    ('To Kill a Mockingbird', 6, 5, 2006, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg'),
    ('Pride and Prejudice', 6, 6, 2000, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg' ),
    ('The Diary of a Young Girl', 6, 7, 1993, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855.jpg'),
    ('1984', 6, 8, 1949, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg')
RETURNING *;

/* Tampilkan seluruh data dari table book */
SELECT * FROM book_tb;

/* Tampilkan seluruh data book, category dan penulis */
SELECT * 
FROM book_tb
    LEFT JOIN writer_tb ON book_tb.writer_id = writer_tb.id
    LEFT JOIN category_tb ON book_tb.category_id = category_tb.id;


/* Tampilkan seluruh data penulis */
SELECT * FROM writer_tb;

/* Tampilkan spesifik book beserta, category maupun penulis. */
SELECT * 
FROM book_tb
    LEFT JOIN writer_tb ON book_tb.writer_id = writer_tb.id
    LEFT JOIN category_tb ON book_tb.category_id = category_tb.id
WHERE book_tb.id = 6;