import React from 'react';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryMenu from './components/CategoryMenu';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <CategoryMenu />
      </header>
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Multi-Everything E-commerce Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
