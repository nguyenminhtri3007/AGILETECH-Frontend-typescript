import { AppConfig } from "../../common/config/app.config";
import { ServiceCore } from "../../common/service/service.core";
import { AllProductModel } from "../models/allProduct.model";

export const  fetchAllProducts = async (data : AllProductModel) =>{
  try {
    const domain = new AppConfig().getDomain();
    const response = await ServiceCore.GET(
      `${domain}`,
      `products`,
      data
    );
    return response
  } catch (error) {
    throw error
  }
}


export const fetchProductById = async (id: number, data: AllProductModel) =>{
  try {
    const domain = new AppConfig().getDomain();
    const response = await ServiceCore.GET(
      `${domain}`,
      `products/${id}`,
      data
    )
    return response

  } catch (error) {
    throw error
  }
}