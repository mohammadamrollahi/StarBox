import React from "react";
import "./style.scss";
import starBoxLogo from "../../Additional/Vectors/starboxLogo.png";
import seatchIcon from "../../Additional/Vectors/search-icon.svg";

function Header() {
  return (
    <div className="header-container">
      <div className="header-leftInner-container">
        <img className="search-icon" src={seatchIcon} alt="logo" />
      </div>
      <div className="header-rightInner-container">
        <a href="#" className="menu-item ">
          همکاری
        </a>
        <a href="#" className="menu-item">
          فروشگاه‌ها
        </a>
        <a href="#" className="menu-item menu-selectedItem">
          منو
        </a>
        <img className="logo" src={starBoxLogo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
