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
