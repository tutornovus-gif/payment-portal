import React from 'react';
import './Banner.css';
import bannerImg from '../assets/post.jpeg';

const Banner = ({ onClose }) => {
    return (
        <div className="banner-overlay">
            <div className="banner-modal">
                <button className="banner-close" onClick={onClose} aria-label="Close banner">
                    &times;
                </button>
                <div className="banner-content">
                    <img src={bannerImg} alt="Promotional Banner" className="banner-image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
