import React from 'react'

const Hero = () => {
  return (
    <main className="hero">
      
      <div className="hero-content">
        <h1>YOUR FEET DESERVE
            THE BEST</h1>
        
        <p>YOUR FEET DESERVE THE BEST – BECAUSE EVERY STEP YOU TAKE SHOULD BE COMFORTABLE, SUPPORTED, AND STYLISH. GIVE YOUR FEET THE CARE, QUALITY, AND COMFORT THEY DESERVE WITH PREMIUM FOOTWEAR MADE TO MATCH YOUR LIFESTYLE.</p>
      

        <div className="hero-buttons">
            <button>Shop Now</button>
            <button className='secondary-button'>Category</button>
        </div>
    
        <div className="shopping">
            <p>Also Available on</p>
           <div className="shopping-icons">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
           </div>
        </div>
    </div>  

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="Hero" />
      </div>
    </main>
  );
}

export default Hero