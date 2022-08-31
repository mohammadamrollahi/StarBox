import React from "react";
import "./style.scss";
import { add_item } from "../../Store/Main/MainActions";
import CircularProgress from "@mui/material/CircularProgress";

function RightMenu({ dispatch, products, categories }) {
  return (
    <div className="rightMenu-container">
      {categories[0] ? (
        categories.map((category) => (
          <>
            <p className="products-header">{category.title}</p>
            <div className="fancy-line"></div>

            <div className="products-container">
              {products.map((item, index) =>
                item.category == category.id ? (
                  <div className="productCard-container">
                    <div
                      style={
                        index == 1 || index % 3 == 1
                          ? { marginTop: "112px" }
                          : { marginTop: "40px" }
                      }
                      className="product-card"
                    >
                      <img
                        className="product-poster"
                        src={item.poster}
                        alt=""
                      />
                      <p className="product-title">{item.title}</p>
                      <p className="price">
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        تومان{" "}
                      </p>
                      <button
                        className="add-button"
                        onClick={() =>
                          dispatch(add_item(item.id, item.title, item.price))
                        }
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </>
        ))
      ) : (
        <CircularProgress className="loading-circle" color="success" />
      )}
    </div>
  );
}

export default RightMenu;
