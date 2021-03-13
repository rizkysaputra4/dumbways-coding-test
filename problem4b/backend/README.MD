## Endpoint

### Get Book By ID

    GET /book/:id

### Insert New Book

    POST /book

json body example:

    {
        "name" : "When Breath Becomes Air",
        "category_id" : 2,
        "writer_id" : 3,
        "publication_year" : 2016,
        "img" : "https://images-na.ssl-images-amazon.com/images/I/717KRq4xxxL.jpg"
    }

### Edit Book Data

    PUT /book/:id

json body example:

    {
        "name" : "When Breath Becomes Air",
        "category_id" : 3,
        "writer_id" : 3,
        "publication_year" : 2016,
        "img" : "https://images-na.ssl-images-amazon.com/images/I/717KRq4xxxL.jpg"
    }

### Delete Book

    DELETE /book/:id

### Insert Book Category

    POST /category

json body example:

    {
        "name" : "Non-Fiction",
    }

### Insert Book Writer

    POST /writer

json body example:

    {
        "name" : "Atul Gawande",
    }
