import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCreate from "../components/ModalCreate";
import ModalDelete from "../components/ModalDelete";
import ModalEdit from "../components/ModalEdit";
const Product = () => {
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state)
  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_BACKEND + "products")
      .then(res=>{
        let result = res.data.data;
        dispatch({ type: "GET_ALL_PRODUCT", payload: result });
      })
      .catch((err)=>console.error(err.message))
},[])

  return (
    <div>
      <h1>Product Page</h1>
      <ModalCreate>Create</ModalCreate>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-light text-center">
            <th scope="col">NO</th>
            <th scope="col">NAMA</th>
            <th scope="col">STOCK</th>
            <th scope="col">PRICE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td><a target="_blank" rel="noopener noreferrer" href={item.photo}>{item.photo}</a></td>
              <td>{item.description}</td>
              <td className="text-center">
                {/* <Link to={`${item.id}`}>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    Detail
                  </button>
                </Link> */}
                <ModalEdit
                  id={item.id}
                  name={item.name}
                  stock={item.stock}
                  price={item.price}
                  photo={item.photo}
                  description={item.description}
                >
                  Edit
                </ModalEdit>
                <ModalDelete id={item.id} name={item.name}>
                  Delete
                </ModalDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
