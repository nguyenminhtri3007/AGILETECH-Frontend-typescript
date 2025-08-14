import { log } from "console";

export class AppConfig {
  private domain = "https://dummyjson.com"

  getDomain(){
    return this.domain;
  }

  setUserId(userId:number){
    localStorage.setItem('userId', JSON.stringify(userId));
  }

  getUserId(){
    try{
      const userId = localStorage.getItem('userId')
      if(userId){
        return JSON.parse(userId) as number;
      }

      return -1
    }catch (e){
      throw e;
    }
  }
  setUserName(username: string){
    localStorage.setItem('username', username)
  }
  getUserName(){
    try {
      const userName = localStorage.getItem('username')
    if(userName){
      return userName
    }

    return null
    } catch (e) {
      throw e;
    }
  }

  setImage(image: string) {
    localStorage.setItem('image', image)
  }

  getImage() {
    try {
      const image = localStorage.getItem('image')
      if(image){
        return image
      }
      return null
    } catch (e) {
      throw e
    }
  }


  setAccessToken(token: string){
    localStorage.setItem('accessToken',token)
  }
  getAccessToken(){
    try {
      const accessToken = localStorage.getItem('accessToken');
      if(accessToken){
        return accessToken
      }

      return null
    } catch (e) {
      throw e;
    }
  }
   setRefreshToken(token: string){
    localStorage.setItem('refreshToken', token)
   }

   getRefreshToken(){
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if(refreshToken){
        return refreshToken
      }
      return null
    } catch (e) {
      throw e
    }
   }

   isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1] ))
      const expirationTime = payload.exp * 1000;
      const currentTime = Date.now();
     if (currentTime > expirationTime) {
         return true;
         } else {
               return false;
           }
    } catch (error) {
      console.log("đã xảy ra lỗi", error);
      return true;
      
    }
   }

   clear (){
    localStorage.clear();
   }
}