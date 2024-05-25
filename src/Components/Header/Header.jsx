import React, { useEffect, useState } from 'react';
import './Header.css';
import axios from 'axios';
import { FaBatteryEmpty, FaWifi } from "react-icons/fa6";
import { TbAntennaBars5 } from "react-icons/tb";
import { IoMdShare } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";

const Header = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setData(response.data[0]);
        console.log(response.data[0]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
    return (
        <div>
            <div className="header">
                <div className="time">{currentTime}</div>
                <div className="status-icons">
                    <TbAntennaBars5 className='network' />
                    <FaWifi className='wifi' />
                    <FaBatteryEmpty className='battery' />
                </div>
            </div>

            <div className="content">
                <div className="back-button"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
<path d="M21.8307 10.9163H1.99739M1.99739 10.9163L11.5174 1.39634M1.99739 10.9163L11.5174 20.4363" stroke="white" stroke-width="1.64992" stroke-linecap="square"/>
</svg></div>
                <div className="username">{data.username}...</div>
                <div className="blue-tick">
                    <svg className='tick-svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" fill="none">
                        <path d="M7.18616 0.960578C7.6122 0.457717 8.3878 0.457717 8.81384 0.960578L9.45251 1.7144C9.71377 2.02276 10.1269 2.15699 10.5195 2.06108L11.4793 1.82662C12.1195 1.67022 12.747 2.12611 12.7961 2.78335L12.8697 3.76861C12.8998 4.17164 13.1551 4.52304 13.5291 4.67622L14.4434 5.05069C15.0533 5.30049 15.293 6.03812 14.9464 6.59871L14.4268 7.43906C14.2143 7.78282 14.2143 8.21718 14.4268 8.56094L14.9464 9.40129C15.293 9.96188 15.0533 10.6995 14.4434 10.9493L13.5291 11.3238C13.1551 11.477 12.8998 11.8284 12.8697 12.2314L12.7961 13.2166C12.747 13.8739 12.1195 14.3298 11.4793 14.1734L10.5195 13.9389C10.1269 13.843 9.71377 13.9772 9.45251 14.2856L8.81384 15.0394C8.3878 15.5423 7.6122 15.5423 7.18616 15.0394L6.54749 14.2856C6.28623 13.9772 5.87314 13.843 5.48052 13.9389L4.52074 14.1734C3.88049 14.3298 3.25302 13.8739 3.20392 13.2166L3.13031 12.2314C3.1002 11.8284 2.84489 11.477 2.47089 11.3238L1.5566 10.9493C0.946699 10.6995 0.707027 9.96188 1.05362 9.40129L1.57319 8.56094C1.78573 8.21718 1.78573 7.78282 1.57319 7.43906L1.05362 6.59871C0.707027 6.03812 0.946699 5.30049 1.5566 5.05069L2.47089 4.67622C2.84489 4.52304 3.1002 4.17164 3.13031 3.76861L3.20392 2.78335C3.25302 2.12611 3.88049 1.67022 4.52074 1.82662L5.48052 2.06108C5.87314 2.15699 6.28623 2.02276 6.54749 1.7144L7.18616 0.960578Z" fill="#24A4DE"/>
                        <path d="M5.33594 7.82212L7.2407 9.5999L10.6693 6.3999" stroke="white" stroke-width="1.28" stroke-linecap="round"/>
                    </svg>
                </div>
                
                <div className="share-button"><svg className='share-svg' xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 4.16667C17.5 5.54738 16.3807 6.66667 15 6.66667C14.1925 6.66667 13.4743 6.28378 13.0173 5.68963L7.33315 9.10011C7.44091 9.37934 7.5 9.68277 7.5 10C7.5 10.3172 7.44091 10.6207 7.33315 10.8999L13.0173 14.3104C13.4743 13.7162 14.1925 13.3333 15 13.3333C16.3807 13.3333 17.5 14.4526 17.5 15.8333C17.5 17.214 16.3807 18.3333 15 18.3333C13.6193 18.3333 12.5 17.214 12.5 15.8333C12.5 15.711 12.5088 15.5908 12.5257 15.4732L6.60229 11.9191C6.16841 12.2817 5.60969 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C5.60969 7.5 6.16841 7.71825 6.60229 8.08089L12.5257 4.52681C12.5088 4.40921 12.5 4.28897 12.5 4.16667C12.5 2.78595 13.6193 1.66667 15 1.66667C16.3807 1.66667 17.5 2.78595 17.5 4.16667Z" fill="#592EBF"/>
</svg></div>
            </div>

        </div>
    );
};

export default Header;
