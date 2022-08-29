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
          <div className="totalPrice-container"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
