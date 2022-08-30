import {types} from "./MainTypes";
export const add_item = (productId,productTitle,price) => {
    return {
      type: types.ADD_ITEM,
      payload: { productId,productTitle,price },
    };
  };
  export const reduce_item = (productId) => {
    return {
      type: types.REDUCE_ITEM,
      payload: { productId },
    };
  };