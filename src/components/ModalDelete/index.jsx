import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useDispatch } from "react-redux";
// import deleteProduct from "../../configs/redux/actions/deleteProductAction";

const ModalDelete = ({ children, id, name }) => {
  const dispatch =  useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    axios
      .delete(process.env.REACT_APP_API_BACKEND + "products/" + id)
      .then((res) => {
        alert("delete success");
        dispatch({type:"DELETE_PRODUCT"})
        })
      .catch((err) => {
        alert("delete failed");
        setShow(false)
      });
  };
  return (
    <Fragment>
      <button
        className="btn btn-danger text-light"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        {children}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are sure want to delete product {name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalDelete;
