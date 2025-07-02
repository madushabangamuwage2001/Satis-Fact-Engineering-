import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const services = [
    "Mesonry-Titanium floor & Tiling",
    "Plumbing/Water Profing",
    "Carpenting -Roofing & Furniture",
    "Spray painting/Colour washing",
    "Electrical work",
    "Air condition work",
    "All kind of Handy man services"
  ];

  // Cards for service areas similar to the CECB website
  const serviceCards = [
    {
      title: "Water Resource Planning",
      image: "/src/assets/water-resource.jpg",
      description: "Expert water resource management and planning services for sustainable development."
    },
    {
      title: "Architectural",
      image: "/src/assets/architectural.jpg", 
      description: "Professional architectural design services for residential and commercial projects."
    },
    {
      title: "Quantity Surveying",
      image: "/src/assets/quantity-surveying.jpg",
      description: "Accurate cost estimation and quantity surveying for construction projects."
    }
  ];

  // Expertise areas similar to the CECB website
  const expertiseCards = [
    {
      title: "Hydropower & Water Resources",
      image: "/src/assets/hydropower.jpg",
      description: "Specialized services in hydropower development and water resource management."
    },
    {
      title: "Buildings",
      image: "/src/assets/buildings.jpg",
      description: "Expert construction and design of commercial, residential, and industrial buildings."
    },
    {
      title: "Health Sector Infrastructure",
      image: "/src/assets/health-infrastructure.jpg",
      description: "Building the healthcare facilities of tomorrow with specialized engineering expertise."
    },
    {
      title: "CECB Laboratory Services",
      image: "/src/assets/laboratory.jpg",
      description: "Quality testing and certification services for construction materials."
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Video Section */}
      <div className="hero-video-container">
        <video autoPlay muted loop className="hero-video">
          <source src="/src/assets/ .mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      {/* Inspired to Go Beyond Section (similar to CECB) */}
      <div className="inspired-section">
        <div className="inspired-content">
          <h2 className="inspired-title">INSPIRED TO <span>GO BEYOND</span></h2>
          <div className="inspired-columns">
            <div className="inspired-image">
              <img src="/src/assets/engineer-site.jpg" alt="Engineer on site" />
            </div>
            <div className="inspired-text">
              <p>
                Satis-Fact Engineering embodies the spirit of innovation and excellence in the construction
                industry. Our commitment to quality and customer satisfaction drives us to exceed expectations
                on every project.
              </p>
              <p>
                With years of expertise in various construction disciplines, we provide comprehensive
                solutions for residential, commercial, and industrial projects. Our team of skilled professionals
                ensures timely delivery and superior craftsmanship.
              </p>
              <Link to="/about" className="orange-button">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Build Your Dreams Section */}
      <div className="section-header blue-bg">
        <h2>Build Your Dreams With Us</h2>
      </div>
      
      <div className="service-cards">
        {serviceCards.map((card, index) => (
          <div key={index} className="service-card">
            <div className="card-image">
              <img src={card.image} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to="/services" className="orange-button">Read More</Link>
          </div>
        ))}
      </div>
      
      {/* Improve Your Experience Section */}
      <div className="section-header blue-bg">
        <h2>Improve Your Experience With Us</h2>
      </div>
      
      <div className="expertise-grid">
        {expertiseCards.map((card, index) => (
          <div key={index} className="expertise-card">
            <div className="expertise-image">
              <img src={card.image} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to="/services" className="orange-button">Read More</Link>
          </div>
        ))}
      </div>
      
      {/* Awards and Achievements Section */}
      <div className="awards-section">
        <h2 className="section-title">Awards And Achievements</h2>
        <div className="awards-container">
          <div className="award-item">
            <div className="award-image"></div>
            <p>Excellence in Engineering Services</p>
          </div>
          <div className="award-item">
            <div className="award-image"></div>
            <p>Best Construction Company 2023</p>
          </div>
          <div className="award-item">
            <div className="award-image"></div>
            <p>Safety First Award</p>
          </div>
          <div className="award-item">
            <div className="award-image"></div>
            <p>Customer Satisfaction Excellence</p>
          </div>
        </div>
      </div>
      
      {/* Original content about Satis-Fact */}
      <div className="original-content">
        <h1 className="special-offer">Special Offer For You</h1>
        
        <div className="logo-container">
          <div className="logo-image"></div>
          <h2 className="company-name">Satis-fact</h2>
        </div>
        
        <h3 className="company-title">Satis-Fact Engineering & Maintains Service</h3>
        
        <div className="description-container">
          <p className="main-description">
            Any Kind Of Construction Work Or Maintainance work & services<br />
            your special occation/function or what ever
          </p>
          <p className="sub-description">
            We are already to maintain your House/Hotel/industrials
          </p>
        </div>
        
        <div className="services-section">
          <div className="ictad-logo">
            <div className="ictad-image"></div>
            <p>The Institute for Construction Training and Development</p>
          </div>
          
          <ul className="services-list">
            {services.map((service, index) => (
              <li key={index} className="service-item">
                <span className="bullet">•</span> {service}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="free-estimate">
          <p>Free of Charge :- Estimate/B.O.Q</p>
        </div>
        
        <div className="contact-info">
          <p className="contact-header">CONTACT FOR :- W.A. Abeynayake</p>
          <p className="phone-numbers">
            0763 115 305<br />
            0712 912 196
          </p>
          <p className="email">E-mail :- asankaabeynayake@gmail.com</p>
        </div>
      </div>
      
      <div className="cta-section">
        <Link to="/contact" className="cta-button">
          Contact Us Today
        </Link>
        <Link to="/services" className="services-button">
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Home;

