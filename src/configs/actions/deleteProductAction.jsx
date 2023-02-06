import axios from "axios";
const deleteProduct = (id, setShow) => async (dispatch) => {
  try {
    const products = await axios.delete(
      process.env.REACT_APP_API_BACKEND + "products/" + id
    );
    console.log(products);
    alert("delete success");
    setShow(false);
    const result = products.data.data;
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("delete failed");
    setShow(false);
  }
};

export default deleteProduct;
