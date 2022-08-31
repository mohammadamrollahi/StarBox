import React from "react";
import "./style.scss";
import axios from "axios";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { add_item, reduce_item } from "../../Store/Main/MainActions";
import basketLogo from "../../Additional/Vectors/basketLogo.png";
import Swal from "sweetalert2";
import apiAddress from "../../Additional/api/api";
function LeftMenu({ preOrder, dispatch }) {
  let confirmOrder = () => {
    axios
      .post(`${apiAddress}/orders`, {
        userId: +localStorage.starboxUserId,
        items: [
          ...preOrder.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        ],
      })
      .then((res) => {
        if (res.status == 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "سفارش شما ثبت شد",
            showConfirmButton: false,
            timer: 3500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "danger",
            title: "مشکلی پیش آمده لطفا دوباره تلاش کنید",
            showConfirmButton: false,
            timer: 3500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "مشکلی پیش آمده لطفا دوباره تلاش کنید",
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  return (
    <div className="leftMenu-container">
      {preOrder.items[0] ? (
        <div className="factor-container">
          {preOrder.items?.map((item) => (
            <>
              <p className="selectedItem-title">{item.productTitle} </p>
              <div className="priceAndNumber-container">
                <p className="selectedItem-price">
                  {" "}
                  {item.totalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  تومان
                </p>
                <div className="number-selected-container">
                  <RemoveCircleOutlineIcon
                    onClick={() => dispatch(reduce_item(item.productId))}
                    sx={{ fontSize: 34, cursor: "pointer" }}
                  />
                  <p className="number-selected">{item.quantity}</p>
                  <AddCircleOutlineIcon
                    onClick={() =>
                      dispatch(
                        add_item(item.productId, item.productTitle, item.price)
                      )
                    }
                    sx={{ fontSize: 34, color: "#006341", cursor: "pointer" }}
                  />
                </div>
              </div>
            </>
          ))}

          <div className="totalPriceAndTax-container">
            <div className="totalPrice-container">
              <p>مجموع</p>{" "}
              <p>
                {preOrder.allTotalPrices
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                تومان
              </p>
            </div>
            <div className="totalTax-container">
              {" "}
              <p>مالیات</p>{" "}
              <p>
                {preOrder.allTax
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                تومان
              </p>{" "}
            </div>
          </div>

          <div className="payable-container">
            <p>قابل پرداخت</p>{" "}
            <p>
              {preOrder.payabale
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              تومان
            </p>
          </div>
          <div className="payButton-container">
            <button onClick={confirmOrder} className="pay-button">
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
