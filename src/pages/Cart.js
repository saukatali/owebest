import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Cart = () => {
  // const [carts, setCarts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // useEffect(() =>{
  //   const fetchCart = async () => {
  //     try{
  //       const response = await fetch('https://dummyjson.com/carts');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log(data.carts)
  //       setCarts(data.carts);
  //     }catch(error){
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   fetchCart();
  // }, [])

  React.useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      console.log(JSON.parse(storedCartItems));
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);


  const handleRemoveToCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    // sessionStorage.removeItem(cartItems.filter((item) => item.id !== id));
    setCartItems(updatedItems);
  };


  if (cartItems.length === 0) {
    return (
          <>
           <h2 className="text-center p-5">Cart is Empty</h2>
          </>
      )
  }

  return (
    <>
      <div>
  <div className="breacrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text product-more">
          <Link to="/"><i className="fa fa-home" /> Home</Link>
            <a to="/product">Shop</a>
            <span>Shopping Cart</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="shopping-cart spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th className="p-image">Image</th>
                  <th className="p-name">Product Name</th>
                  <th className="p-price">Price</th>
                  <th className="p-qty">Quantity</th>
                  <th className="p-total">Total</th>
                  <th><i className="ti-close" />Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index) => (
                <tr key={index}>
                  <td className="cart-pic first-row"><img src={cart.thumbnail} /></td>
                  <td className="cart-title first-row">
                    <h5>{cart.title}</h5>
                  </td>
                  <td className="p-price first-row">{cart.price}</td>
                  <td className="qua-col first-row">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="total-price first-row">{cart.price}</td>
                  <td className="close-td first-row"><i className="ti-close" />
                    <span className="text-danger" onClick={() => handleRemoveToCart(cart.id)}>Remove</span>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="cart-buttons">
                <Link to="/" className="primary-btn continue-shop">Continue shopping</Link>
                <Link to="/" className="primary-btn up-cart">Update cart</Link>
              </div>
              <div className="discount-coupon">
                <h6>Discount Codes</h6>
                <form action="#" className="coupon-form">
                  <input type="text" placeholder="Enter your codes" />
                  <button type="submit" className="site-btn coupon-btn">Apply</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-4">
              <div className="proceed-checkout">
                <ul>
                  <li className="subtotal">Subtotal <span>$240.00</span></li>
                  <li className="cart-total">Total <span>$240.00</span></li>
                </ul>
                <Link to="/" className="proceed-btn">PROCEED TO CHECK OUT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Cart
