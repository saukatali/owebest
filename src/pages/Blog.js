import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredPosts);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPost();
  }, []);

  return (
    <>
      <div>
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <i className="fa fa-home" />
                  <Link to="/"><i className="fa fa-home" /> Home</Link>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="blog-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1">
                <div className="blog-sidebar">
                  <div className="search-form">
                    <h4>Search</h4>
                    <form action="#">
                      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search . . . " />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                  <div className="blog-catagory">
                    <h4>Categories</h4>
                    <ul>
                      <li><Link to="/">Fashion</Link></li>
                      <li><Link to="/">Travel</Link></li>
                      <li><Link to="/">Picnic</Link></li>
                      <li><Link to="/">Model</Link></li>
                    </ul>
                  </div>
                  <div className="recent-post">
                    <h4>Recent Post</h4>
                    <div className="recent-blog">
                      <Link to="/" className="rb-item">
                        <div className="rb-pic">
                          <img src="img/blog/recent-1.jpg" />
                        </div>
                        <div className="rb-text">
                          <h6>The Personality Trait That Makes...</h6>
                          <p>Fashion <span>- May 19, 2019</span></p>
                        </div>
                      </Link>
                      
                      <Link to="/" className="rb-item">
                        <div className="rb-pic">
                          <img src="img/blog/recent-4.jpg" />
                        </div>
                        <div className="rb-text">
                          <h6>The Personality Trait That Makes...</h6>
                          <p>Fashion <span>- May 19, 2019</span></p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-tags">
                    <h4>Product Tags</h4>
                    <div className="tag-item">
                      <Link to="/">Towel</Link>
                      <Link to="/">Shoes</Link>
                      <Link to="/">Coat</Link>
                      <Link to="/">Dresses</Link>
                      <Link to="/">Trousers</Link>
                      <Link to="/">Men's hats</Link>
                      <Link to="/">Backpack</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                <div className="row">
                  {filteredPosts.map((post, index) => (
                    <div className="col-lg-6 col-sm-6" key={index}>
                      <div className="blog-item">
                        <div className="bi-pic">
                          <img src="img/blog/blog-1.jpg" />
                        </div>
                        <div className="bi-text">
                          <Link to={`/blog-detail/${post.id}`}>
                            <h4>{post.title}</h4>
                          </Link>
                          <p>travel <span> - {new Date().toDateString()} </span></p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-lg-12">
                    <div className="loading-more">
                      <i className="icon_loading" />
                      <Link to="/">
                        Loading More
                      </Link>
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

export default Blog
