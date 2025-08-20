import { AppConfig } from "../../common/config/app.config"
import { ServiceCore } from '../../common/service/service.core';
import { CartModel } from '../models/cart.model';

export const fetchCartByUser = async (userId : number) =>{
try {
  const domain = new AppConfig().getDomain();
  const response = await ServiceCore.GET(
    `${domain}`,
      `carts/user/${userId}`,
      null
  )
  return response;
  
} catch (error) {
  throw error
}
}

export const addCart = async (data: CartModel) =>{
  try {
    const domain = new AppConfig().getDomain();
    const response = await ServiceCore.POST(
      `${domain}`,
      `carts/add`,
      data
    )

    return response;
    
  } catch (error) {
    throw error
  }

}

export const updateCart = async (cartId: number, payload: { merge?: boolean; products: { id: number; quantity: number }[] }) => {
  try {
    const domain = new AppConfig().getDomain();
    const response = await ServiceCore.PUT(
      `${domain}`,
      `carts/${cartId}`,
      payload
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export const deleteCart = async (cartId: number) => {
  try {
    const domain = new AppConfig().getDomain();
    const response = await ServiceCore.DELETE(
      `${domain}`,
      `carts/${cartId}`
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export const getCartById = async (cartId: number) => {
  try {
    const domain = new AppConfig().getDomain();
    const response = await ServiceCore.GET(
      `${domain}`,
      `carts/${cartId}`,
      null
    );
    return response;
  } catch (error) {
    throw error;
  }
}