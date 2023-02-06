import React from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProductDetail from "../configs/redux/actions/getDetailProduct";
import { useEffect } from "react";

const ProductDetail = () => {
  const {id} = useParams();
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const {productDetail} = useSelector((state)=>state.product)
console.log(productDetail.name);
  useEffect(()=>{
    dispatch(getProductDetail(id))
},[])

  return (
    <div>
      <h1>Product Detail Page {id}</h1>
      <ul>
        <li>{productDetail.name}</li>
        <li>
          <img src={productDetail.photo} alt="" />
        </li>
        <li>{productDetail.price}</li>
        <li>{productDetail.stock}</li>
        <li>{productDetail.description}</li>
      </ul>
      <button onClick={()=>navigate('/')}>Kembali ke home</button>
    </div>
  );
};

export default ProductDetail;
