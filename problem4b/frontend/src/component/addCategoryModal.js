import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function AddNewCategory(props) {
  const [modalShow, setModalShow] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${props.server}category`, { name: newCategory })
      .then((res) => {
        setNewCategory("");
        props.notify("success", `Category ${res.data[0].name} added`);
      })
      .catch((err) => {
        props.notify("error", `${err}`);
      });
  };
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add New Category
      </Button>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="newCategory">New Category Name: </label>
          <br></br>
          <input
            placeholder="name"
            type="text"
            name="newCategory"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
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
