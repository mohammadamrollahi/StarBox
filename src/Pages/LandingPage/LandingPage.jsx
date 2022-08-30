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
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setProduct(res.data);
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
          title: "Submit your Email",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Look up",
          showLoaderOnConfirm: true,
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
                  throw new Error("user not found");
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
              title: `You are login`,
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
          <RightMenu dispatch={dispatch} products={products} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
