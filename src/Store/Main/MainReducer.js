import React from "react";
import MainInitialState from "../InitialStates/MainInitialState";
import { types } from "./MainTypes";
function MainReducer(state = MainInitialState, action) {
  switch (action.type) {
    case types.ADD_ITEM: {
      let productIsIntoList = false;
      let newItems = [
        ...state.preOrder.items?.map((item) => {
          if (item.productId && item.productId == action.payload.productId) {
            productIsIntoList = true;
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        }),
      ];
      if (!productIsIntoList) {
        newItems.push({ productId: action.payload.productId, quantity: 1 });
      }
      return { ...state, preOrder: { ...state.preOrders, items: newItems } };
    }
    case types.REDUCE_ITEM: {
      let newItems = [
        ...state.preOrder.items?.map((item) => {
          if (item.productId && item.productId == action.payload.productId) {
            if (item.quantity != 1)
              return { ...item, quantity: item.quantity - 1 };
            else if (item.quantity == 1) return;
          } else return item;
        }),
      ];
      return { ...state, preOrder: { ...state.preOrders, items: newItems } };
    }
    default: {
      return state;
    }
  }
}

export default MainReducer;
