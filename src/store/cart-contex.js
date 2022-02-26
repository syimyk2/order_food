import React, { useReducer } from "react";
import { ADD, REMOVE } from "../helpers/constants";

export const CartContex = React.createContext();

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      const currentIndex = state.items.findIndex(
        (el) => el.id == action.item.id
      );
      if (currentIndex === -1) {
        let newItem = { ...action.item, amount: 1 };
        const newItems = state.items.concat(newItem);
        const newPrice = state.totalPrice + action.item.price;
        return {
          ...state,
          items: newItems,
          totalPrice: newPrice,
        };
      } else {
        let newItems = state.items.map((el, idx) => {
          return idx === currentIndex ? { ...el, amount: el.amount + 1 } : el;
        });
        const newPrice = state.totalPrice + action.item.price;
        return {
          ...state,
          items: newItems,
          totalPrice: newPrice,
        };
      }
    case "add":
      let currentInd = state.items.findIndex((el) => el.id === action.item.id);
      if (currentInd === -1) {
        let newItem = { ...action.item, amount: Number(action.addNumber) };
        const newItems = state.items.concat(newItem);
        const newPrice = Number(action.item.price) * Number(action.addNumber);
        const currentPrice = state.totalPrice + newPrice;
        return {
          ...state,
          items: newItems,
          totalPrice: currentPrice,
        };
      } else {
        console.log(action);
        const newPrice = Number(action.item.price) * Number(action.addNumber);
        const currentPrice = state.totalPrice + newPrice;
        let newItems = state.items.map((el, i) => {
          return i === currentInd
            ? { ...el, amount: Number(el.amount) + Number(action.addNumber) }
            : el;
        });
        return {
          ...state,
          items: newItems,
          totalPrice: currentPrice,
        };
      }

    case REMOVE:
      const currentElem = state.items.find((el) => el.id === action.id);
      if (currentElem.amount === 1) {
        const newItems = state.items.filter((el) => el.id !== action.id);

        return {
          ...state,
          items: newItems,
          totalPrice: state.totalPrice - currentElem.price,
        };
      } else {
        return {
          ...state,
          items: state.items.map((el) => {
            return el.id === action.id ? { ...el, amount: --el.amount } : el;
          }),
          totalPrice: state.totalPrice - currentElem.price,
        };
      }

    default:
      return state;
  }
};

const CartContexProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initialState);
  const onAdd = (item, addNumber) => {
    if (addNumber > 1) {
      dispatchCart({ type: "add", item, addNumber });
    } else {
      dispatchCart({ type: ADD, item, addNumber });
    }
  };
  const onRemove = (id) => {
    dispatchCart({ type: REMOVE, id: id });
  };

  return (
    <CartContex.Provider
      value={{
        items: cart.items,
        totalPrice: cart.totalPrice,
        onAdd: onAdd,
        onRemove: onRemove,
      }}
    >
      {props.children}
    </CartContex.Provider>
  );
};
export default CartContexProvider;
