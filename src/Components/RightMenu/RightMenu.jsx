import React from "react";
import "./style.scss";
import Button from "@mui/material/Button";

function RightMenu({ products }) {
  return (
    <div className="rightMenu-container">
      <p className="products-header">میکس فراپاچینو</p>
      <hr className="fancy-line" />

      <div className="products-container">
        {products.map((item) => (
          <div className="product-card">
            <img className="product-poster" src={item.poster} alt="" />
            <p className="product-title">{item.title}</p>
            <p className="price">{item.price} تومان </p>
            <button className="add-button">افزودن به سبد خرید</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightMenu;
