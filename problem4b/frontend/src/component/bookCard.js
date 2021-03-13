import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function BookCard(props) {
  console.log(props.book);
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="mx-2 mb-3 card" style={{ width: "20rem" }}>
      <div className="card-body">
        <img
          src={props.book.img}
          alt={props.book.name}
          width="200"
          height="260"
        />
        <h6>{props.book.name}</h6>
        <p> {props.book.year}</p>
        <p> {props.book.writer}</p>
      </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Detail
      </Button>

      <BookDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={props.book}
        updateBooks={props.updateBooks}
        server={props.server}
        notify={props.notify}
      />
    </div>
  );
}

function BookDetailModal(props) {
  const onClickDelete = () => {
    axios
      .delete(`${props.server}book/${props.book.id}`)
      .then((res) => {
        props.notify(
          "success",
          `${res.data.status}, ${props.book.name} Deleted`
        );
        props.updateBooks((old) => [
          ...old.filter((el) => el.id !== props.book.id),
        ]);
      })
      .catch((err) => {
        props.notify("error", err);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={props.book.img}
          alt={props.book.name}
          width="200"
          height="260"
        />
        <div>
          <h6>{props.book.id}</h6>
          <p> {props.book.year}</p>
          <p> {props.book.writer}</p>
          <p> {props.book.category}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClickDelete}>Delete</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
