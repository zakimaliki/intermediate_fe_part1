import axios from "axios";
import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
// import updateProduct from "../../configs/redux/actions/updateProductAction";

const ModalEdit = ({
  children,
  id,
  name,
  stock,
  price,
  photo,
  description,
}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage]  = useState(photo);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name,
    stock,
    price,
    photo,
    description,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", saveImage);
    formData.append("description", data.description);
    axios.put(process.env.REACT_APP_API_BACKEND + "products/" + id, formData ,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(res=>{
      alert("crate product successful");
      setShow(false);
      dispatch({ type: "EDIT_PRODUCT"});
    }).catch ((err)=> {
    console.error(err.message);
    alert("crate product failed");
    setShow(false);
  })  };

  return (
    <Fragment>
      <button
        className="btn btn-dark text-light"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        {children}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              id={id}
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="stock"
              id={id}
              name="stock"
              value={data.stock}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="price"
              id={id}
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              id={id}
              name="photo"
              onChange={handleUpload}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              id={id}
              name="description"
              value={data.description}
              onChange={handleChange}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" id="button-addon2" title="Register">
            Update
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalEdit;
