import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import SignUpForm from './screens/signUpScreen/SignUpForm';
import HomePage from './screens/homepageScreen/Homepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailScreen from './screens/detailProductScreen/DetailProductScreen';
import ChatApp from './screens/ChatApp/ChatApp';
import { CartProvider } from './context/CartContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <CartProvider>
  <Routes>
    <Route path='/' element = {<SignUpForm/>}/>
    <Route path='homepage' element = {<HomePage/>}/>
    <Route path="/product/:id" element = {<ProductDetailScreen/>}/>
  </Routes>
  </CartProvider>
  </BrowserRouter>
  {/* <ChatApp/> */}
  </React.StrictMode>
);


reportWebVitals();
