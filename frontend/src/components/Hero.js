import React from 'react';
import './Hero.css';

const Hero = () => {
  // In a real application, this data would likely come from a CMS or API
  const banner = {
    title: 'Welcome to Our Grand Opening!',
    description: 'Discover amazing products and deals from vendors around the world.',
    imageUrl: 'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=2670&auto=format&fit=crop', // A placeholder image
    buttonText: 'Shop Now'
  };

  const heroStyle = {
    backgroundImage: `url(${banner.imageUrl})`
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{banner.title}</h1>
        <p className="hero-description">{banner.description}</p>
        <button className="hero-button">{banner.buttonText}</button>
      </div>
    </div>
  );
};

export default Hero;
