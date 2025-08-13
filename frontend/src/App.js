import React from 'react';
import Hero from './components/Hero';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        {/* Main navigation could go here */}
      </header>
      <main>
        <Hero />
        <div className="container">
          {/* Other components like Featured Products will go here */}
        </div>
      </main>
      <footer className="app-footer">
        <p>&copy; 2025 Multi-Everything E-commerce Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
