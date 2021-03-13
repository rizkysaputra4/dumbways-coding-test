import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function AddNewWriter(props) {
  const [modalShow, setModalShow] = useState(false);
  const [newWriter, setNewWriter] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newWriter);
    axios
      .post(`${props.server}writer`, { name: newWriter })
      .then((res) => {
        setNewWriter("");
        props.notify("success", `Writer ${res.data[0].name} added`);
      })
      .catch((err) => {
        props.notify("error", `${err}`);
      });
  };
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add New Writer
      </Button>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Writer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="newWriter">New Writer Name: </label>
          <br></br>
          <input
            placeholder="name"
            type="text"
            name="newWriter"
            value={newWriter}
            onChange={(e) => setNewWriter(e.target.value)}
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
