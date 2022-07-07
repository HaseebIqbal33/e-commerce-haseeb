import { Formik } from "formik";
import React from "react";
import { URL_ADD_ITEM } from "../../constants";
import { addItemValidationSchema } from "../../validationSchemas/addItem";
import { useItemContext } from "../context/ItemContextContainer";

const initialValues = {
  title: "",
  category: "",
  sale_price: 0,
  unit_price: 0,
  quantity: 0,
};

function AddItem() {
  const { items, getAllItems } = useItemContext();

  const onSubmit = (values) => {
    fetch(URL_ADD_ITEM, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
        getAllItems();
      });
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={addItemValidationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleChange, handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit}>
            <h4> Add New Item </h4>
            <hr />
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Title</label>

                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    defaultValue={values.title}
                    onChange={handleChange}
                  />
                  {errors.title && (
                    <span style={{ color: "red" }}>{errors.title}</span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Category</label>
                  <select
                    className="form-control"
                    name="category"
                    defaultValue={values.category}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Sale Price</label>
                  <input
                    className="form-control"
                    type="number"
                    name="sale_price"
                    placeholder="Enter Sale Price"
                    defaultChecked={values.sale_price}
                    onChange={handleChange}
                  />
                  {errors.sale_price && (
                    <p style={{ color: "red" }}>{errors.sale_price}</p>
                  )}
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Unit Price</label>
                  <input
                    className="form-control"
                    type="number"
                    name="unit_price"
                    placeholder="Enter Unit Price"
                    defaultChecked={values.unit_price}
                    onChange={handleChange}
                  />
                  {errors.unit_price && (
                    <p style={{ color: "red" }}>{errors.unit_price}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    name="quantity"
                    placeholder="Enter Quantity"
                    defaultChecked={values.quantity}
                    onChange={handleChange}
                  />
                  {errors.quantity && (
                    <p style={{ color: "red" }}>{errors.quantity}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success col-12"
                  disabled={!isValid || items.length > 5}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddItem;
