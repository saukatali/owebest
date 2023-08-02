import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../componants/Loader'
import { useState, useEffect } from 'react'
const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchproducts, setSearchProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true)



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
        setSearchProducts(data.products);
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  // const filterBrandProducts = (query) => {
  //   const brands = products.filter((newVal) => {
  //     return newVal.brand === query; 
  //   });
  //   console.log(brands)
  //   setSearchProducts(brands);
  // };

  const filterCategoryProducts = (query) => {
    const categories = products.filter((product) =>
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    console.log(categories)
    setSearchProducts(categories);
  };

  const filterBrandProducts = (query) => {
    const brands = products.filter((product) =>
      product.brand.toLowerCase().includes(query.toLowerCase())
    );
    console.log(query)
    setSearchProducts(brands);
  };


  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     try {
  //       const response = await fetch('https://dummyjson.com/products/categories');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       // console.log(data)
  //       setCategory(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchCategory();
  // }, []);

  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const uniqueBrands     = [...new Set(products.map(product => product.brand))];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <Link to="/"><i className="fa fa-home" /> Home</Link>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="product-shop spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                <div className="filter-widget">
                  <h4 className="fw-title">Categories</h4>
                  <ul className="filter-catagories">
                    {uniqueCategories.map((cat, index) => (
                      <li key={index}><Link to="/product" onClick={() => filterCategoryProducts(cat)}>{cat}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="filter-widget">
                  <h4 className="fw-title">Brand</h4>
                  <div className="fw-brand-check">

                   
                    {uniqueBrands.map((brand, index) => (
                      <div className="bc-item" key={index}>
                        <label htmlFor={`bc-${brand}-${index}`}>
                          {brand}
                          <input type="checkbox"
                            onClick={() => filterBrandProducts(brand)}
                            id={`bc-${brand}-${index}`}
                          />
                          <span className="checkmark" />
                        </label>
                      </div>
                    ))}

                  </div>
                </div>
                <div className="filter-widget">
                  <h4 className="fw-title">Price</h4>
                  <div className="filter-range-wrap">
                    <div className="range-slider">
                      <div className="price-input">
                        <input type="text" id="minamount" />
                        <input type="text" id="maxamount" />
                      </div>
                    </div>

                    <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={33} data-max={98}>
                      <div className="ui-slider-range ui-corner-all ui-widget-header" />
                      <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                      <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                    </div>
                  </div>
                  <Link to="/" className="filter-btn">Filter</Link>
                </div>
                <div className="filter-widget">
                  <h4 className="fw-title">Color</h4>
                  <div className="fw-color-choose">

                    <div className="cs-item">
                      <input type="radio" id="cs-black" />
                      <label className="cs-black" htmlFor="cs-black">Black</label>
                    </div>

                    <div className="cs-item">
                      <input type="radio" id="cs-violet" />
                      <label className="cs-violet" htmlFor="cs-violet">Violet</label>
                    </div>
                    <div className="cs-item">
                      <input type="radio" id="cs-blue" />
                      <label className="cs-blue" htmlFor="cs-blue">Blue</label>
                    </div>
                    <div className="cs-item">
                      <input type="radio" id="cs-yellow" />
                      <label className="cs-yellow" htmlFor="cs-yellow">Yellow</label>
                    </div>
                    <div className="cs-item">
                      <input type="radio" id="cs-red" />
                      <label className="cs-red" htmlFor="cs-red">Red</label>
                    </div>
                    <div className="cs-item">
                      <input type="radio" id="cs-green" />
                      <label className="cs-green" htmlFor="cs-green">Green</label>
                    </div>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4 className="fw-title">Size</h4>
                  <div className="fw-size-choose">
                    <div className="sc-item">
                      <input type="radio" id="s-size" />
                      <label htmlFor="s-size">s</label>
                    </div>
                    <div className="sc-item">
                      <input type="radio" id="m-size" />
                      <label htmlFor="m-size">m</label>
                    </div>
                    <div className="sc-item">
                      <input type="radio" id="l-size" />
                      <label htmlFor="l-size">l</label>
                    </div>
                    <div className="sc-item">
                      <input type="radio" id="xs-size" />
                      <label htmlFor="xs-size">xs</label>
                    </div>
                  </div>
                </div>
                <div className="filter-widget">
                  <h4 className="fw-title">Tags</h4>
                  <div className="fw-tags">
                    <Link to="/">Towel</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Coat</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="product-show-option">
                  <div className="row">
                    <div className="col-lg-7 col-md-7">
                      <div className="select-option">
                        <select className="sorting">
                          <option value>Default Sorting</option>
                        </select>
                        <select className="p-show">
                          <option value>Show:</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 text-right">
                      <p>Show 01- 09 Of {products.length} Product</p>
                    </div>
                  </div>
                </div>
                <div className="product-list">
                  <div className="row">
                    {searchproducts.map((product, index) => (
                      <div className="col-lg-4 col-sm-6" key={index}>
                        <div className="product-item">
                          <div className="pi-pic">
                            <img height={150} src={product.thumbnail} alt={`Thumbnail of ${product.title}`} />
                            <div className="sale pp-sale">Sale</div>
                            <div className="icon">
                              <i className="icon_heart_alt" />
                            </div>
                            <ul>
                              <li className="w-icon active"><Link to="/"><i className="icon_bag_alt" /></Link></li>
                              <li className="quick-view"><Link to="/">+ Quick View</Link></li>
                              <li className="w-icon"><Link to="/"><i className="fa fa-random" /></Link></li>
                            </ul>
                          </div>
                          <div className="pi-text">
                            <div className="catagory-name">{product.category}</div>
                            <Link to={`/product-detail/${product.id}`}>
                              <h5>{product.title}</h5>
                            </Link>
                            <div className="product-price">
                              ${product.price}
                              <span>${product.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="loading-more">
                  <i className="icon_loading" />
                  <Link to="/">
                    Loading More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Product
