import { response } from "express";
import { AppConfig } from "../../common/config/app.config";
import { ServiceCore } from "../../common/service/service.core";
import { AllProductModel } from "../models/allProduct.model";

export const  GetAllProduct = async (data : AllProductModel) =>{
  try {
    const domain = new AppConfig().getDomain();
    const response = await ServiceCore.GET(
      `${domain}`,
      `product`,
      data
    );
    return response
  } catch (error) {
    throw error
  }
}