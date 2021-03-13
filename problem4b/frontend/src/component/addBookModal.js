import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

let book = {
  name: "",
  writer_id: null,
  category_id: null,
  publication_year: 0,
  img: "",
};

export default function AddNewBook(props) {
  const [modalShow, setModalShow] = useState(false);
  const [newBook, setNewBook] = useState(book);
  const [category, setCategory] = useState([]);
  const [writer, setWriter] = useState([]);
  const CategoryOption = {
    options: category,
    getOptionLabel: (option) => option.name,
  };
  const WriterOption = {
    options: writer,
    getOptionLabel: (option) => option.name,
  };

  useEffect(() => {
    axios
      .get(`${props.server}getallcategory`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${props.server}getallwriter`)
      .then((res) => {
        setWriter(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${props.server}book`, newBook)
      .then((res) => {
        setNewBook("");
        props.notify("success", `Book ${res.data[0].name} added`);
        console.log(res.data);
        props.updateBooks((old) => [...old, res.data[0]]);
        book = {
          name: "",
          writer_id: null,
          category_id: null,
          publication_year: 0,
          img: "",
        };
      })
      .catch((err) => {
        props.notify("error", `${err}`);
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add New Book
      </Button>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            fullWidth
            id="standard-basic"
            label="Book Title"
            margin="normal"
            onChange={(e) => {
              book.name = e.target.value;
              setNewBook(book);
            }}
          />

          <Autocomplete
            {...CategoryOption}
            id="controlled-demo"
            onChange={(event, newValue) => {
              book.category_id = newValue.id;
              setNewBook(book);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Category" margin="normal" />
            )}
          />
          <Autocomplete
            {...WriterOption}
            id="controlled-demo"
            onChange={(event, newValue) => {
              book.writer_id = newValue.id;
              setNewBook(book);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Writer" margin="normal" />
            )}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Year"
            margin="normal"
            onChange={(e) => {
              book.publication_year = e.target.value;
              setNewBook(book);
            }}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Image Link"
            margin="normal"
            onChange={(e) => {
              book.img = e.target.value;
              setNewBook(book);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSubmit}>Submit</Button>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
