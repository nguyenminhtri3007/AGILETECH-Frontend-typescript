import *as CartService from '../services/cart.service';
import { CartModel } from '../models/cart.model';

export const getCartByUser = async (userId: number) =>{
  try {
     const result = await CartService.fetchCartByUser(userId);
     const firstCart = Array.isArray(result?.carts) && result.carts.length > 0
       ? result.carts[0]
       : result;
     return new CartModel(firstCart);
     
  } catch (error) {
    throw error
  }
}

export const addToCart = async (data: CartModel) => {
  try {
    const result = await CartService.addCart(data);
    return new CartModel(result);
  } catch (error) {
    throw error;
  }
};

export const updateCart = async (cartId: number, products: { id: number; quantity: number }[], merge: boolean = true) => {
  try {
    const result = await CartService.updateCart(cartId, { merge, products });
    return new CartModel(result);
  } catch (error) {
    throw error;
  }
}

export const deleteCart = async (cartId: number) => {
  try {
    const result = await CartService.deleteCart(cartId);
    return new CartModel(result);
  } catch (error) {
    throw error;
  }
}

export const getCartById = async (cartId: number) => {
  try {
    const result = await CartService.getCartById(cartId);
    return new CartModel(result);
  } catch (error) {
    throw error;
  }
}