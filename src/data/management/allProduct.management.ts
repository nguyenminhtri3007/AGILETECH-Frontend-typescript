import *as AllProductService from "../services/allProduct,service";
import { AllProductModel } from "../models/allProduct.model";

export const AllProduct = async (data : AllProductModel) =>{
  try {
    const result = await AllProductService.GetAllProduct(data)
    return result;

  } catch (error) {
    throw error
  }
}