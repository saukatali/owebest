import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './componants/Layout';
import NoPage from './componants/NoPage';
import Login from './componants/Login';
import Register from './componants/Register';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Faq from './pages/Faq';

import User from './dashboard/User';
import UserShow from './dashboard/UserShow';
import UserAdd from './dashboard/UserAdd';
import UserEdit from './dashboard/UserEdit';


const App = () => {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-detail/:blogId" element={<BlogDetail />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<Faq/>} />
          
          <Route path="/user" element={<User/>} />
          <Route path="/user-add" element={<UserAdd/>} />
          <Route path="/user-show/:userId" element={<UserShow/>} />
          <Route path="/user-edit/:userId" element={<UserEdit/>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
