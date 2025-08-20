import React, { createContext, useContext, useReducer } from "react";

import { AllProductModel } from "../data/models/allProduct.model";

interface CartItem extends AllProductModel {
  quantity: number;
}


interface CartState {
  items: CartItem[];
};

const initialState : CartState ={
  items:[]
};

type CartAction =
  | { type: "ADD_ITEM"; payload: AllProductModel }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_QTY"; payload: number }
  | { type: "DECREASE_QTY"; payload: number }
  | { type: "CLEAR_CART" };

 function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
   case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };

      case "INCREASE_QTY":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        )
      };

    case "DECREASE_QTY":
      return {
        ...state,
        items: state.items
          .map(i =>
            i.id === action.payload
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter(i => i.quantity > 0)
      };

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });


export const CartProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);