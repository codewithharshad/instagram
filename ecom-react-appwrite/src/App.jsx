import React from 'react'
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// Try importing Switch directly
 

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import ReturnPolicy from './pages/other/ReturnPolicy';
import PrivacyPolicy from './pages/other/PrivacyPolicy';
import AboutUs from './pages/other/AboutUs';
import TermsCondition from './pages/other/TermsCondition';
import ContactUs from './pages/other/ContactUs';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import UpdateOrderStatus from './pages/admin/page/UpdateOrderStatus';
import { Toaster } from 'sonner'
 import Allproducts from './pages/allproducts/Allproducts';
 
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateOrderStatus' element={
            <ProtectedRouteForAdmin>
              <UpdateOrderStatus/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Toaster/>
      </Router>
    </MyState>

  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
   const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.providerUid === 'harshadwhocodes@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}