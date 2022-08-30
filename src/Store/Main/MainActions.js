import {types} from "./MainTypes";
export const add_item = (productId) => {
    return {
      type: types.ADD_ITEM,
      payload: { productId },
    };
  };
  export const reduce_item = (productId) => {
    return {
      type: types.REDUCE_ITEM,
      payload: { productId },
    };
  };