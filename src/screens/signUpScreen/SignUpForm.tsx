import React, { useEffect, useState } from "react";
import styles from "./SignUpForm.module.scss";
import AvatarAdmin from "../../assets/avata-admin.jpg"
import { useNavigate } from "react-router-dom";
import { AppConfig } from "../../common/config/app.config";
import { AuthModel } from "../../data/models/auth.model";
import *as AuthService from "../../data/services/auth.service"

const SignUpForm = () => {
   const navigate = useNavigate();
   const appconfig = new AppConfig();
   const [username, setUsername] = useState ("");
   const [password, setPassword] = useState ("");

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const model = new AuthModel(username, password);
      const res = await AuthService.signIn(model);

      if (res.accessToken) {
        appconfig.setAccessToken(res.accessToken);
      }
      if (res.refreshToken) {
        appconfig.setRefreshToken(res.refreshToken);
      }
      if(res.image){
        appconfig.setImage(res.image)
      }
      if(res.id){
        appconfig.setUserId(res.id)
      }
      navigate("/homepage");
    } catch (e) {
      console.error("Đăng nhập thất bại:", e);
      alert("Sai thông tin đăng nhập hoặc lỗi server!");
    }
  };

  
  return (
    <div className={styles.container}>
        <div className={styles.logo}>InsideBox</div>
      <div className={styles.formSection}>
   
        <h4>Start your journey</h4>
        <h2>Sign Up to InsideBox</h2>

        <form  onSubmit={handleSubmit}
          >
     
          <div className={styles.inputGroup}>
            <label>UseName</label>
            <div className={styles.inputWrapper}>
              <input type="username" placeholder="example@email.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
         
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.inputWrapper}>
              <input type="password" placeholder="********" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
              />         
            </div>
          </div>
          <button className={styles.signUpBtn} type="submit" >
            Sign Up
            </button>
        </form>
        <div className={styles.divider}>
          <span>or sign up with</span>
        </div>

       

     
        <p className={styles.footer}>
          Have an account? <a href="#">Sign in</a>
        </p>
      </div>

    
      <div className={styles.imageSection}>
        <img src= {AvatarAdmin} alt="avatar admin"/>
      </div>
    </div>
  );
}

export default SignUpForm;