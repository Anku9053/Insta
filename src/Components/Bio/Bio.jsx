import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bio.css';

const Bio = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setPosts(response.data); // Assuming the posts are in response.data.posts
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="bio-container">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="bio-post">
            <div className="bio-header">
              <div className="second-username">{post.secondUsername}
              
              
              </div>
            
              <div className='button-div'>
              
              <button className="bio-button"><span><svg className='button-svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 19 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 8.25V3H8.75V8.25H3.5V9.75H8.75V15H10.25V9.75H15.5V8.25H10.25Z" fill="white"/>
</svg></span> Follow</button>
              </div>
            </div>
              <div className="designation">{post.designation}</div>
            <div className='bio-div'>

            <div className="bio">{post.bio}</div>
            <div className="bio">{post.bio2}</div>
            <div className="bio">{post.bio3}</div>
            <div className="bio">{post.bio4}</div>
            <div className="link">{post.link}</div>
          </div>
            </div>
        ))
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
};

export default Bio;
