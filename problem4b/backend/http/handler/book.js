const { DB } = require("../../sql/connect-db");

function getAllBook(req, res) {
  const query = `SELECT * FROM book_tb`;
  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json(result.rows);
  });
}

function getBookByID(req, res) {
  const query = `
    SELECT * FROM book_tb
    WHERE id = ${req.params.id}`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json(result.rows);
  });
}

function postBook(req, res) {
  var name = req.body.name;
  var category_id = req.body.category_id;
  var writer_id = req.body.writer_id;
  var publication_year = req.body.publication_year;
  var img = req.body.img;

  var query = `
        INSERT INTO book_tb (name, category_id, writer_id, publication_year, img)
        VALUES (
            '${name}',
            ${category_id},
            ${writer_id},
            ${publication_year},
            '${img}'
        )        
        RETURNING *;`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json(result.rows);
  });
}

function editBook(req, res) {
  var bookID = req.params.id;

  var name = req.body.name;
  var category_id = req.body.category_id;
  var writer_id = req.body.writer_id;
  var publication_year = req.body.publication_year;
  var img = req.body.img;

  var query = `
       UPDATE book_tb
       SET
            name = '${name}',
            category_id = ${category_id},
            writer_id = ${writer_id},
            publication_year = ${publication_year},
            img = '${img}'
        WHERE id = ${bookID}    
        RETURNING *;`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json(result.rows);
  });
}

function deleteBook(req, res) {
  var bookID = req.params.id;
  var query = `DELETE FROM book_tb WHERE id = '${bookID}'`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }
    return res.status(200).json({ status: "OK" });
  });
}

module.exports = {
  getAllBook,
  getBookByID,
  postBook,
  editBook,
  deleteBook,
};
