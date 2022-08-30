import React from "react";
import "./style.scss";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function LeftMenu() {
  return (
    <div className="leftMenu-container">
      <div className="factor-container">
        <p className="selectedItem-title">نوشیدنی فراپاچینو با کوکی خرد شده</p>
        <div className="priceAndNumber-container">
        <p className="selectedItem-price"> 55000 تومان</p>
        <div className="number-selected-container">
          <RemoveCircleOutlineIcon sx={{ fontSize: 34 }} />
          <p className="number-selected">3</p>
          <AddCircleOutlineIcon sx={{ fontSize: 34, color: "#006341" }} />
        </div>
        </div>
        <div className="totalPriceAndTax-container">
          <div className="totalPrice-container"><p>مجموع</p> <p>22000 تومان</p></div>
          <div className="totalTax-container"> <p>مالیات</p> <p>53000 تومان</p> </div>

        </div>

        <div className="payable-container">
          <p>قابل پرداخت</p> <p>22000 تومان</p>
        </div>
        <div className="payButton-container">
          <button onClick={()=>{console.log(localStorage.user)}} className="pay-button">نهایی کردن سفارش </button>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
