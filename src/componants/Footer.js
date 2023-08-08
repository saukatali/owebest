import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="partner-logo">
        <div className="container">
          <div className="logo-carousel owl-carousel">
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="../img/logo-carousel/logo-1.png" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="../img/logo-carousel/logo-2.png" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="../img/logo-carousel/logo-3.png" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="../img/logo-carousel/logo-4.png" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="../img/logo-carousel/logo-5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-left">
                <div className="footer-logo">
                  <Link to="/"><img src="../img/footer-logo.png" /></Link>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +91 98777654321</li>
                  <li>Email: fashi@gmail.com</li>
                </ul>
                <div className="footer-social">
                  <Link to="/"><i className="fa fa-facebook" /></Link>
                  <Link to="/"><i className="fa fa-instagram" /></Link>
                  <Link to="/"><i className="fa fa-twitter" /></Link>
                  <Link to="/"><i className="fa fa-pinterest" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <div className="footer-widget">
                <h5>Information</h5>
                <ul>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/checkout">Checkout</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/user">Serivius</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget">
                <h5>My Account</h5>
                <ul>
                  <li><Link to="#">My Account</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/cart">Shopping Cart</Link></li>
                  <li><Link to="/product">Shop</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="newslatter-item">
                <h5>Join Our Newsletter Now</h5>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <form action="#" className="subscribe-form">
                  <input type="text" placeholder="Enter Your Mail" />
                  <button type="button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-reserved">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text">
                  Copyright © All rights reserved | This template is made with 
                  <i className="fa fa-heart-o" aria-hidden="true" /> by 
                  <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                </div>
                <div className="payment-pic">
                  <img src="../img/payment-method.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
