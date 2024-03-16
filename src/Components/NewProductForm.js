import "./NewProductForm.css";
import { useState } from "react";

function NewProductForm(props) {
  const [enteredProductId, setProductId] = useState("");
  const [enteredProductName, setProductName] = useState("");
  const [enteredProductPrice, setProductPrice] = useState("");
  const [enteredProductCategory, setProductCategory] = useState("");

  const productIDHandler = (event) => {
    setProductId(event.target.value);
    console.log(event.target.value);
  };
  const productNameHandler = (event) => {
    setProductName(event.target.value);
    console.log(event.target.value);
  };
  const productSellingPriceHandler = (event) => {
    setProductPrice(event.target.value);
    console.log(event.target.value);
  };
  const productCategoryHandler = (event) => {
    setProductCategory(event.target.value);
    console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const productData = {
      productId: enteredProductId,
      productName: enteredProductName,
      productPrice: enteredProductPrice,
      productCategory: enteredProductCategory,
    };
    props.onSaveProductData(productData);
    setProductId("");
    setProductName("");
    setProductPrice("");
    setProductCategory("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div>
          <label className="form-label">Product Id</label>
          <input
            type="number"
            className="form-input"
            value={enteredProductId}
            onChange={productIDHandler}
            required
          />
        </div>
        <div>
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-input"
            value={enteredProductName}
            onChange={productNameHandler}
          />
        </div>
        <div>
          <label className="form-label">Product Selling Price</label>
          <input
            type="text"
            className="form-input"
            value={enteredProductPrice}
            onChange={productSellingPriceHandler}
          />
        </div>
        <div>
          <label className="form-label">Product Category</label>
          <select
            className="form-input"
            value={enteredProductCategory}
            onChange={productCategoryHandler}
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Food">Food</option>
          </select>
        </div>
        <button type="submit" className="form-submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewProductForm;
