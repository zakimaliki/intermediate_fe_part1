/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./product.module.css";

const ProductList = () => {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    setProduct(e.target.value);
  };
  const handleSimpan = () => {
    setProducts([...products, product])
    setProduct("")
  };
  const handleDelete = (e) =>{
    let filteredArray = products.filter(item => item !== e.target.value)
    console.log(filteredArray);
    // setProducts({products: filteredArray});
  }
  return (
    <div>
      <h2>Product</h2>
      <div className={styles.wrapperInput}>
        <div className="input-group mb-3">
          <Input
            type="text"
            // placeholder="Product"
            id="product1"
            name="product1"
            value={product}
            onChange={handleChange}
          />
          <Button
            type="button"
            id="button-addon2"
            title="save"
            onClick={handleSimpan}
          />
        </div>
      </div>
      <ul>
      {products.map((item,index)=>
        <li key={index+1}>{item} <button value={index} onClick={handleDelete}>delete</button></li>
      )}
      </ul>

    </div>
  );
};

export default ProductList;
