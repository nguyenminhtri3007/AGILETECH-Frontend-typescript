import *as AllProductService from "../services/allProduct.service";
import { AllProductModel } from "../models/allProduct.model";

export const getAllProducts  = async (data : AllProductModel) =>{
  try {
    const result = await AllProductService.fetchAllProducts(data)
    return result;

  } catch (error) {
    throw error
  }
}