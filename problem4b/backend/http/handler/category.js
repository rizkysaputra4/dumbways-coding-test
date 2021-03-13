const { DB } = require("../../sql/connect-db");

function postCategory(req, res) {
  var name = req.body.name;

  var query = `
        INSERT INTO category_tb (name)
        VALUES ('${name}')        
        RETURNING *;`;

  DB.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err.detail);
    }

    return res.status(200).json(result.rows);
  });
}

module.exports = { postCategory };
