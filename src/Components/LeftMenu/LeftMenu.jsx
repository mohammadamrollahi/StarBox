import React from "react";
import "./style.scss";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { add_item, reduce_item } from "../../Store/Main/MainActions";
import basketLogo from "../../Additional/Vectors/basketLogo.png";

function LeftMenu({ preOrder, dispatch }) {
  return (
    <div className="leftMenu-container">
      {preOrder.items[0] ? (
        <div className="factor-container">
          {preOrder.items?.map((item) => (
            <>
              <p className="selectedItem-title">{item.productTitle} </p>
              <div className="priceAndNumber-container">
                <p className="selectedItem-price"> {item.totalPrice} تومان</p>
                <div className="number-selected-container">
                  <RemoveCircleOutlineIcon
                    onClick={() => dispatch(reduce_item(item.productId))}
                    sx={{ fontSize: 34 }}
                  />
                  <p className="number-selected">{item.quantity}</p>
                  <AddCircleOutlineIcon
                    onClick={() =>
                      dispatch(
                        add_item(item.productId, item.productTitle, item.price)
                      )
                    }
                    sx={{ fontSize: 34, color: "#006341" }}
                  />
                </div>
              </div>
            </>
          ))}

          <div className="totalPriceAndTax-container">
            <div className="totalPrice-container">
              <p>مجموع</p> <p>{preOrder.allTotalPrices} تومان</p>
            </div>
            <div className="totalTax-container">
              {" "}
              <p>مالیات</p> <p>{preOrder.allTax} تومان</p>{" "}
            </div>
          </div>

          <div className="payable-container">
            <p>قابل پرداخت</p> <p>{preOrder.payabale} تومان</p>
          </div>
          <div className="payButton-container">
            <button
              onClick={() => {
                console.log(localStorage.user);
              }}
              className="pay-button"
            >
              نهایی کردن سفارش{" "}
            </button>
          </div>
        </div>
      ) : (
        <div className="emptyShoppingBasket">
          <img className="basketBorder" src={basketLogo} alt="" />
          <p className="emptyBasket-text">سبد خرید شما خالی است</p>
        </div>
      )}
    </div>
  );
}

export default LeftMenu;
