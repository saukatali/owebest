import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.posts)
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPost();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.products)
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <>
      <div>

        <section className="hero-section">
          <div className="hero-items owl-carousel">
            <div className="single-hero-items set-bg" data-setbg="img/hero-1.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <span>Bag,kids</span>
                    <h1>Black friday</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore</p>
                    <a to="#" className="primary-btn">Shop Now</a>
                  </div>
                </div>
                <div className="off-card">
                  <h2>Sale <span>50%</span></h2>
                </div>
              </div>
            </div>
            <div className="single-hero-items set-bg" data-setbg="img/hero-2.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <span>Bag,kids</span>
                    <h1>Black friday</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore</p>
                    <a to="#" className="primary-btn">Shop Now</a>
                  </div>
                </div>
                <div className="off-card">
                  <h2>Sale <span>50%</span></h2>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="banner-section spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="img/banner-1.jpg" />
                  <div className="inner-text">
                    <h4>Men’s</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="img/banner-2.jpg" />
                  <div className="inner-text">
                    <h4>Women’s</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-banner">
                  <img src="img/banner-3.jpg" />
                  <div className="inner-text">
                    <h4>Kid’s</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="women-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="product-large set-bg" data-setbg="img/products/women-large.jpg">
                  <h2>Women’s</h2>
                  <a to="#">Discover More</a>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-1">
                <div className="filter-control">
                  <ul>
                    <li className="active">Clothings</li>
                    <li>HandBag</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="product-slider owl-carousel">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-1.jpg" />
                      <div className="sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a to="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a to="#">+ Quick View</a></li>
                        <li className="w-icon"><a to="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Coat</div>
                      <a to="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-2.jpg" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a to="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a to="#">+ Quick View</a></li>
                        <li className="w-icon"><a to="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Shoes</div>
                      <a to="#">
                        <h5>Guangzhou sweater</h5>
                      </a>
                      <div className="product-price">
                        $13.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-3.jpg" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a to="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a to="#">+ Quick View</a></li>
                        <li className="w-icon"><a to="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a to="#">
                        <h5>Pure Pineapple</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                  <div className="product-item">
                    <div className="pi-pic">
                      <img src="img/products/women-4.jpg" />
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a to="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a to="#">+ Quick View</a></li>
                        <li className="w-icon"><a to="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Towel</div>
                      <a to="#">
                        <h5>Converse Shoes</h5>
                      </a>
                      <div className="product-price">
                        $34.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="deal-of-week set-bg spad" data-setbg="img/time-bg.jpg">
          <div className="container">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Deal Of The Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                  consectetur adipisicing elit </p>
                <div className="product-price">
                  $35.00
                  <span>/ HanBag</span>
                </div>
              </div>
              <div className="countdown-timer" id="countdown">
                <div className="cd-item">
                  <span>56</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>12</span>
                  <p>Hrs</p>
                </div>
                <div className="cd-item">
                  <span>40</span>
                  <p>Mins</p>
                </div>
                <div className="cd-item">
                  <span>52</span>
                  <p>Secs</p>
                </div>
              </div>
              <a to="#" className="primary-btn">Shop Now</a>
            </div>
          </div>
        </section>

        <section className="man-banner spad">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="filter-control">
                  <ul>
                    <li className="active">Clothings</li>
                    <li>HandBag</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="product-slider owl-carousel">
                {products.slice(4, 10).map((product, index) => (
                  <div className="product-item" key={index}>
                    <div className="pi-pic">
                      <img src="img/products/man-1.jpg" />
                      <div className="sale">Sale</div>
                      <div className="icon">
                        <i className="icon_heart_alt" />
                      </div>
                      <ul>
                        <li className="w-icon active"><a to="#"><i className="icon_bag_alt" /></a></li>
                        <li className="quick-view"><a to="#">+ Quick View</a></li>
                        <li className="w-icon"><a to="#"><i className="fa fa-random" /></a></li>
                      </ul>
                    </div>
                    <div className="pi-text">
                      <div className="catagory-name">Coat</div>
                      <a to="#">
                        <h5>{product.title}</h5>
                      </a>
                      <div className="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="product-large set-bg m-large" data-setbg="../img/products/man-large.jpg">
                  <h2>Men’s</h2>
                  <a to="#">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="instagram-photo">
          {products.slice(4, 10).map((product, index) => (
            <div className="insta-item set-bg" data-setbg={product.thumbnail} key={index}>
              <div className="inside-text">
                <i className="ti-instagram" />
                <h5><a to="#">{product.title}</a></h5>
              </div>
            </div>
          ))}

        </div>

        <section className="latest-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {posts.slice(4, 7).map((post, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="single-latest-blog">
                    <img src="img/latest-1.jpg" />
                    <div className="latest-text">
                      <div className="tag-list">
                        <div className="tag-item">
                          <i className="fa fa-calendar-o" />
                          May 4,2019
                        </div>
                        <div className="tag-item">
                          <i className="fa fa-comment-o" />
                          5
                        </div>
                      </div>
                      <a to="#">
                        <h4>{post.title}</h4>
                      </a>
                      <p>{post.body}</p>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
            <div className="benefit-items">
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="img/icon-1.png" />
                    </div>
                    <div className="sb-text">
                      <h6>Free Shipping</h6>
                      <p>For all order over 99$</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="img/icon-2.png" />
                    </div>
                    <div className="sb-text">
                      <h6>Delivery On Time</h6>
                      <p>If good have prolems</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-benefit">
                    <div className="sb-icon">
                      <img src="img/icon-1.png" />
                    </div>
                    <div className="sb-text">
                      <h6>Secure Payment</h6>
                      <p>100% secure payment</p>
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

export default Home
