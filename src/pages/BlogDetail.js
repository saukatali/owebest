import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const BlogDetail = () => {
 
  const {postId} = useParams();
  const [post, setPost] = useState([]);

useEffect(() => {
  // if (!postId) return; 
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setPost(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPost(); 
  }, []);

  return (
    <>
      <section className="blog-details spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="blog-details-inner">
          <div className="blog-detail-title">
            <h2>The Personality Trait That Makes People Happier</h2>
            <p>travel <span>- May 19, 2019</span></p>
          </div>
          <div className="blog-large-pic">
            <img src="../img/blog/blog-detail.jpg" />
          </div>
          <div className="blog-detail-desc">
            <p>psum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
            </p>
          </div>
          <div className="blog-quote">
            <p>“ Technology is nothing. What's important is that you have a faith in people, that
              they're basically good and smart, and if you give them tools, they'll do wonderful
              things with them.” <span>- Steven Jobs</span></p>
          </div>
          <div className="blog-more">
            <div className="row">
              <div className="col-sm-4">
                <img src="../img/blog/blog-detail-1.jpg" />
              </div>
              <div className="col-sm-4">
                <img src="img/blog/blog-detail-2.jpg" />
              </div>
              <div className="col-sm-4">
                <img src="../img/blog/blog-detail-3.jpg" />
              </div>
            </div>
          </div>
          <p>Sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
          <div className="tag-share">
            <div className="details-tag">
              <ul>
                <li><i className="fa fa-tags" /></li>
                <li>Travel</li>
                <li>Beauty</li>
                <li>Fashion</li>
              </ul>
            </div>
            <div className="blog-share">
              <span>Share:</span>
              <div className="social-links">
                <Link to="/"><i className="fa fa-facebook" /></Link>
                <Link to="/"><i className="fa fa-twitter" /></Link>
                <Link to="/"><i className="fa fa-google-plus" /></Link>
                <Link to="/"><i className="fa fa-instagram" /></Link>
                <Link to="/"><i className="fa fa-youtube-play" /></Link>
              </div>
            </div>
          </div>
          <div className="blog-post">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <Link to="/" className="prev-blog">
                  <div className="pb-pic">
                    <i className="ti-arrow-left" />
                    <img src="../img/blog/prev-blog.png" />
                  </div>
                  <div className="pb-text">
                    <span>Previous Post:</span>
                    <h5>The Personality Trait That Makes People Happier</h5>
                  </div>
                </Link>
              </div>
              <div className="col-lg-5 offset-lg-2 col-md-6">
                <Link to="/" className="next-blog">
                  <div className="nb-pic">
                    <img src="../img/blog/next-blog.png" />
                    <i className="ti-arrow-right" />
                  </div>
                  <div className="nb-text">
                    <span>Next Post:</span>
                    <h5>The Personality Trait That Makes People Happier</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="posted-by">
            <div className="pb-pic">
              <img src="../img/blog/post-by.png" />
            </div>
            <div className="pb-text">
              <Link to="/">
                <h5>Shane Lynch</h5>
              </Link>
              <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                amodo</p>
            </div>
          </div>
          <div className="leave-comment">
            <h4>Leave A Comment</h4>
            <form action="#" className="comment-form">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Messages" defaultValue={""} />
                  <button type="submit" className="site-btn">Send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default BlogDetail
