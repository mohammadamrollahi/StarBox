import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import LeftMenu from "../../Components/LeftMenu/LeftMenu";
import RightMenu from "../../Components/RightMenu/RightMenu";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import "./style.scss";
function LandingPage() {
  const preOrder = useSelector((state) => state.Main.preOrder);
  const dispatch = useDispatch();
  let [products, setProduct] = useState([]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setProduct(res.data);
    });
    axios.get("http://localhost:4000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    let userLoggedIn = false;
    axios.get("http://localhost:4000/users").then((res) => {
      res.data.map((user) => {
        if (user.email == localStorage.starboxUserEmail) {
          userLoggedIn = true;
        }
      });
      if (!userLoggedIn) {
        Swal.fire({
          title: "ایمیل خود را وارد کنید",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          confirmButtonText: "جست و جو",
          showLoaderOnConfirm: true,
          confirmButtonColor: '#006341',

          preConfirm: (login) => {
            return axios
              .get(`http://localhost:4000/users`)
              .then((response) => {
                let userFound = false;
                response.data.map((user) => {
                  if (user.email == login) {
                    userFound = true;
                    localStorage.setItem("starboxUserEmail", login);
                    localStorage.setItem("starboxUserId", user.id);

                  }
                });
                if (!userFound) {
                  throw new Error("کاربری با این ایمیل پیدا نشد");
                }
              })
              .catch((error) => {
                Swal.showValidationMessage(error);
              });
          },
          allowOutsideClick: () => Swal.isLoading(),
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              confirmButtonText: "خب",
              showLoaderOnConfirm: true,
              confirmButtonColor: '#006341',
              title: `شما وارد شدید`,
            });
          }
        });
      }
    }); 
  }, []);
  return (
    <div className="page-container">
      <div className="page-innerContainer">
        <Header />
        <div className="page-innerContainer-bottomContainer">
          <LeftMenu dispatch={dispatch} preOrder={preOrder} />
          <div className="horizontal-line"></div>
          <RightMenu dispatch={dispatch} products={products} categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
