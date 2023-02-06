import axios from "axios";
const getProductDetail = (id) => async (dispatch) => {
  try {
    const products = await axios.get(
      process.env.REACT_APP_API_BACKEND + "products/" + id
    );
    const result = products.data.data[0];
    dispatch({ type: "GET_DETAIL_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export default  getProductDetail;
