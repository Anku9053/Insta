import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Subscriber.css';

const Subscriber = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setData(response.data[0]);
        console.log(response.data[0])
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
    <div className="subscriber-container">
      <div className="left-section">
        <img src={data.image} alt="Profile" className="profile-image" />
      </div>
      <div className="right-section">
        <div className="card">
        <svg className='follo' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
  <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="#AB1AA1"/>
</svg>
          <div>
            <div className="count">1M</div>
            <div className="label">Followers</div>
          </div>
        </div>
        <div className="card">
        <svg className='follo2' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 18" fill="none">
  <path d="M1 9.70699V8.29199C1 5.39699 1 3.94899 1.905 3.01799C2.811 2.08599 4.237 2.04599 7.088 1.96499C8.438 1.92699 9.818 1.89999 11 1.89999C12.181 1.89999 13.561 1.92699 14.912 1.96499C17.763 2.04599 19.189 2.08599 20.094 3.01799C21 3.94899 21 5.39799 21 8.29199V9.70699C21 12.603 21 14.05 20.095 14.982C19.189 15.913 17.764 15.954 14.912 16.034C13.562 16.073 12.182 16.1 11 16.1C9.69576 16.0961 8.39163 16.0741 7.088 16.034C4.237 15.954 2.811 15.914 1.905 14.982C1 14.05 1 12.602 1 9.70799V9.70699Z" stroke="#FF487F" stroke-width="1.93101"/>
  <path d="M14.4643 8.89972L9.04028 11.9991V5.80031L14.4643 8.89972Z" fill="#FF487F"/>
</svg>
          <div>
            <div className="count">220K</div>
            <div className="label">Subscribers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
