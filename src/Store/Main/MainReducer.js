import React from "react";
import MainInitialState from "../initialStates/MainInitialState";
import { types } from "./MainTypes";
function MainReducer(state = MainInitialState, action) {
  switch (action.type) {

    default: {
      return state;
    }
  }
}

export default MainReducer;