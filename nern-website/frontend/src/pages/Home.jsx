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
          <source src="/src/assets/hero-construction.mp4" type="video/mp4" />
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
      
      <div className="cta-section">
        <Link to="/contact" className="cta-button">
          Contact Us Today
        </Link>
        <Link to="/services" className="services-button">
          View All Services
        </Link>
      </div><br/><br/>
    </div>
  );
};

export default Home;

