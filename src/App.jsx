import React from 'react'
import './App.css'; // Assuming you have a CSS file for styles
import  Navigation from './components/Navigation.jsx'; // Importing Navigation component
import Hero from './components/Hero.jsx';

const App = () => {
    
  return (
    <div className='montserrat-custom'>
      <Navigation />
      <Hero />
      
    </div>
  )
}

export default App;