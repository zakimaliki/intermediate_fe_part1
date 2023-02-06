import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from '../../pages/Home.jsx'
import ProuductList from '../../pages/ProductList.jsx'
import Product from '../../pages/Product.jsx'
import Page404 from '../../pages/Page404.jsx'
import Counter from "../../pages/Counter.jsx";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/product-list" element={<ProuductList/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
