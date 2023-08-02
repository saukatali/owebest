import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Header = () => {
  return (
    <>
   <header className="header-section">
  <div className="header-top">
    <div className="container">
      <div className="ht-left">
        <div className="mail-service">
          <i className=" fa fa-envelope" />
          owebest@gmail.com
        </div>
        <div className="phone-service">
          <i className=" fa fa-phone" />
          +91 9878655433
        </div>
      </div>
      <div className="ht-right">
        <Link to="/login" className="login-panel"><i className="fa fa-user" />Login</Link>
        <div className="lan-selector">
          <select className="language_drop" name="countries" id="countries" style={{width: 70}}>
            <option value="yt" data-image="../img/flag-1.jpg" data-imagecss="flag yt" data-title="English">English</option>
            <option value="yu" data-image="../img/flag-2.jpg" data-imagecss="flag yu" data-title="Bangladesh">German </option>
          </select>
        </div>
        <div className="top-social">
          <Link to="/"><i className="ti-facebook" /></Link>
          <Link to="/"><i className="ti-twitter-alt" /></Link>
          <Link to="/"><i className="ti-linkedin" /></Link>
          <Link to="/"><i className="ti-pinterest" /></Link>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="inner-header">
      <div className="row">
        <div className="col-lg-2 col-md-2">
          <div className="logo">
            <Link to="/">
              <img src="../img/logo.png" />
            </Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-7">
          <div className="advanced-search">
            <button type="button" className="category-btn">All Categories</button>
            <div className="input-group">
              <input type="text" placeholder="What do you need?" />
              <button type="button">Search</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 text-right col-md-3">
          <ul className="nav-right">
            <li className="heart-icon">
              <a to="#">
                <i className="icon_heart_alt" />
                <span>5</span>
              </a>
            </li>
            <li className="cart-icon">
              <Link to="/cart">
                <i className="icon_bag_alt" />
                <span>5</span>
              </Link>
              <div className="cart-hover">
                <div className="select-items">
                  <table>
                    <tbody>
                      <tr>
                        <td className="si-pic"><img src="../img/select-product-1.jpg" /></td>
                        <td className="si-text">
                          <div className="product-selected">
                            <p>$60.00 x 1</p>
                            <h6>Kabino Bedside Table</h6>
                          </div>
                        </td>
                        <td className="si-close">
                          <i className="ti-close" />
                        </td>
                      </tr>
                      <tr>
                        <td className="si-pic"><img src="../img/select-product-2.jpg" /></td>
                        <td className="si-text">
                          <div className="product-selected">
                            <p>$60.00 x 1</p>
                            <h6>Kabino Bedside Table</h6>
                          </div>
                        </td>
                        <td className="si-close">
                          <i className="ti-close" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="select-total">
                  <span>total:</span>
                  <h5>$120.00</h5>
                </div>
                <div className="select-button">
                  <a to="#" className="primary-btn view-card">VIEW CARD</a>
                  <a to="#" className="primary-btn checkout-btn">CHECK OUT</a>
                </div>
              </div>
            </li>
            <li className="cart-price">$150.00</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="nav-item">
    <div className="container">
      <div className="nav-depart">
        <div className="depart-btn">
          <i className="ti-menu" />
          <span>All departments</span>
          <ul className="depart-hover">
            <li className="active"><a to="#">Women’s Clothing</a></li>
            <li><Link to="/">Men’s Clothing</Link></li>
            <li><Link to="/">Underwear</Link></li>
            <li><Link to="/">Luxury Brands</Link></li>
          </ul>
        </div>
      </div>
      <nav className="nav-menu mobile-menu">
        <ul>
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><a to="#">Collection</a>
            <ul className="dropdown">
              <li><Link to="/">Men's</Link></li>
              <li><Link to="/">Women's</Link></li>
              <li><Link to="/">Kid's</Link></li>
            </ul>
          </li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a to="#">Pages</a>
            <ul className="dropdown">
              <li> <Link to="/cart">Cart</Link></li>
              <li> <Link to="/checkout">Checkout</Link></li>
              <li> <Link to="/faq">Faq</Link></li>
              <li> <Link to="/register">Register</Link></li>
              <li> <Link to="/login">Login</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap" />
    </div>
  </div>
</header>

<Outlet/>

    </>
  )
}

export default Header
