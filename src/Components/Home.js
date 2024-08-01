import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Beauty Parlour</h2>
      <p>Your beauty, our duty. Experience the best services from our skilled stylists.</p>
      <div className="home-gallery">
        <div className="gallery-item">
          <img src="/images/pic1.jpg" alt="Hairstyle 1" />
          <p>Elegant Hairstyle</p>
        </div>
        <div className="gallery-item">
          <img src="/images/9 Best Drugstore Waterproof Mascaras of 2021.jpg" alt="Hairstyle 2" />
          <p>Modern Cut</p>
        </div>
        <div className="gallery-item">
          <img src="/images/pic2.jpg" alt="Makeup 1" />
          <p>Glam Makeup</p>
        </div>
        <div className="gallery-item">
          <img src="/images/download.jpg" alt="Makeup 2" />
          <p>Natural Look</p>
        </div>
      </div>
    </div>
  );
};

export default Home;