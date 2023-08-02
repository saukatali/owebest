import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
const Blog = () => {
  const [posts, setPosts] = useState([]);

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
                <input type="text" placeholder="Search . . .  " />
                <button type="submit"><i className="fa fa-search" /></button>
              </form>
            </div>
            <div className="blog-catagory">
              <h4>Categories</h4>
              <ul>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Picnic</a></li>
                <li><a href="#">Model</a></li>
              </ul>
            </div>
            <div className="recent-post">
              <h4>Recent Post</h4>
              <div className="recent-blog">
                <a href="#" className="rb-item">
                  <div className="rb-pic">
                    <img src="img/blog/recent-1.jpg" />
                  </div>
                  <div className="rb-text">
                    <h6>The Personality Trait That Makes...</h6>
                    <p>Fashion <span>- May 19, 2019</span></p>
                  </div>
                </a>
                <a href="#" className="rb-item">
                  <div className="rb-pic">
                    <img src="img/blog/recent-2.jpg" />
                  </div>
                  <div className="rb-text">
                    <h6>The Personality Trait That Makes...</h6>
                    <p>Fashion <span>- May 19, 2019</span></p>
                  </div>
                </a>
                <a href="#" className="rb-item">
                  <div className="rb-pic">
                    <img src="img/blog/recent-3.jpg" />
                  </div>
                  <div className="rb-text">
                    <h6>The Personality Trait That Makes...</h6>
                    <p>Fashion <span>- May 19, 2019</span></p>
                  </div>
                </a>
                <a href="#" className="rb-item">
                  <div className="rb-pic">
                    <img src="img/blog/recent-4.jpg" />
                  </div>
                  <div className="rb-text">
                    <h6>The Personality Trait That Makes...</h6>
                    <p>Fashion <span>- May 19, 2019</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div className="blog-tags">
              <h4>Product Tags</h4>
              <div className="tag-item">
                <a href="#">Towel</a>
                <a href="#">Shoes</a>
                <a href="#">Coat</a>
                <a href="#">Dresses</a>
                <a href="#">Trousers</a>
                <a href="#">Men's hats</a>
                <a href="#">Backpack</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 order-1 order-lg-2">
          <div className="row">
            {posts.slice(0, 6).map((post, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div className="blog-item">
                <div className="bi-pic">
                  <img src="img/blog/blog-1.jpg" />
                </div>
                <div className="bi-text">
                  <Link to={`/blog-detail/${post.id}`}>
                    <h4>{post.title}</h4>
                  </Link>
                  <p>travel <span>- May 19, 2019</span></p>
                </div>
              </div>
            </div>
            ))}
          
            <div className="col-lg-12">
              <div className="loading-more">
                <i className="icon_loading" />
                <a href="#">
                  Loading More
                </a>
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
