import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { HomePage } from './components/HomePage';
import FoodPage from './components/FoodPage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Loading from './components/Loading';
import { useLoading } from './hooks/useLoading';
import {setLoadingInterceptor} from './interceptors/loadinginterceptor';
import { useEffect } from 'react';
import AuthRoute from './components/AuthRoute';
import CheckoutPage from './components/CheckoutPage';
import Payment from './components/Payment';

function App() {
  const {showLoading, hideLoading} = useLoading();
  
  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, []);

  return (
    <>
    <Loading/>
    <Header/>
    <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route path="/search/:searchTerm" element={<HomePage/>}/>
      <Route path="/tag/:tag" element={<HomePage/>}/>
      <Route path="/food/:id" element={<FoodPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/checkout"
      element={
      <AuthRoute>
        <CheckoutPage/>
      </AuthRoute>
      }
      />
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </>
  );
}

export default App;
