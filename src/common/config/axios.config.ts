import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AppConfig } from "./app.config";
import { HandleHttp } from "../service/handle-http";
const appConfig = new AppConfig();

const CustomAxios = axios.create();

async function refreshAccessToken(refreshToken: string): Promise<string> {
  try {
     const response = await axios.post("https://dummyjson.com/auth/refresh", {
      refreshToken,
      expiresInMins: 30, 
    });
    return response.data.accessToken;
  } catch (error) {
    console.error('Lỗi khi gọi API refreshToken:', error);
    throw new Error('Không thể làm mới accessToken');
  }
}

CustomAxios.interceptors.request.use(
  async (config) => {
    let accessToken = appConfig.getAccessToken();

    if (accessToken && appConfig.isTokenExpired(accessToken)) {

      const refreshToken = appConfig.getRefreshToken();
      if (refreshToken) {
        try {
          const newAccessToken = await refreshAccessToken(refreshToken); 
          appConfig.setAccessToken(newAccessToken); 
          accessToken = newAccessToken;
          config.headers.Authorization = `Bearer ${accessToken}`; 
        } catch (error) {
          console.error('Lỗi khi làm mới accessToken:', error);
          throw new Error('Không thể làm mới accessToken');
        }
      } else {
        throw new Error('Không tìm thấy refreshToken');
      }
    } else if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    console.error(">>> Lỗi khi gửi request:", error);
    return Promise.reject(error);
  }
);
CustomAxios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error: AxiosError) => {
        return Promise.reject(error.response?.data);
    }
)

export default CustomAxios;