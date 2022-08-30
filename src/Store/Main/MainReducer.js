import React from "react";
import MainInitialState from "../InitialStates/MainInitialState";
import { types } from "./MainTypes";
function MainReducer(state = MainInitialState, action) {
  switch (action.type) {
    case types.ADD_ITEM: {
      let productIsIntoList = false;
      let allTotalPrices = 0;
      let newItems = [
        ...state.preOrder.items?.map((item) => {
          if (item.productId && item.productId == action.payload.productId) {
            productIsIntoList = true;
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: action.payload.price * (item.quantity + 1),
            };
          } else return item;
        }),
      ];
      if (!productIsIntoList) {
        newItems.push({
          productId: action.payload.productId,
          quantity: 1,
          productTitle:action.payload.productTitle,
          price:action.payload.price,
          totalPrice: action.payload.price,
        });
      }
      newItems.map((item) => {
        allTotalPrices += item.totalPrice;
      });
      return {
        ...state,
        preOrder: {
          ...state.preOrder,
          items: newItems,
          allTotalPrices: allTotalPrices,
          allTax: allTotalPrices * 0.09,
          payabale: Math.floor(allTotalPrices * 1.09),
        },
      };
    }
    case types.REDUCE_ITEM: {
      let ItemIdforDelete = -1;
      let allTotalPrices = 0;
      let newItems = [
        ...state.preOrder.items?.map((item, index) => {
          if (item.productId && item.productId == action.payload.productId) {
            if (item.quantity != 1)
              return {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.price * (item.quantity - 1),
              };
            else if (item.quantity == 1) {
              ItemIdforDelete = index;
            }
          } else return item;
        }),
      ];
      if (ItemIdforDelete > -1) newItems.splice(ItemIdforDelete, 1);
      newItems.map((item) => {
        allTotalPrices += item.totalPrice;
      });
      return {
        ...state,
        preOrder: {
          ...state.preOrders,
          items: newItems,
          allTotalPrices: allTotalPrices,
          allTax: allTotalPrices * 0.09,
          payabale: Math.floor(allTotalPrices * 1.09),
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default MainReducer;
