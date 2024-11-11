import React, { useState } from 'react';
import { Search, Hospital, Pill, TestTube, Star, Loader, Map } from 'lucide-react';
import './medical.css';

const Medical = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Search className="w-5 h-5" /> },
    { id: 'hospitals', name: 'Hospitals', icon: <Hospital className="w-5 h-5" /> },
    { id: 'pharmacies', name: 'Pharmacies', icon: <Pill className="w-5 h-5" /> },
    { id: 'labs', name: 'Labs', icon: <TestTube className="w-5 h-5" /> },
  ];

  const services = [
    {
      id: 1,
      category: 'hospitals',
      name: 'General Hospital',
      //rating: 4.5,
      emergency: true,
      // specialties: ['Emergency Care', 'Surgery', 'Pediatrics'],
      // insurance: ['Medicare', 'Blue Cross', 'Aetna'],
      mapLink: 'https://www.google.com/maps/search/?api=1&query=City+General+Hospital'
    },
    {
      id: 2,
      category: 'pharmacies',
      name: 'HealthCare Pharmacy',
      //rating: 4.8,
      emergency: false,
      services: ['Prescription Filling', 'Vaccinations'],
      mapLink: 'https://www.google.com/maps/search/?api=1&query=HealthCare+Pharmacy'
    },
    {
      id: 3,
      category: 'labs',
      name: 'Diagnostic Labs',
      //rating: 4.3,
      emergency: false,
      services: ['Blood Test', 'X-Ray', 'MRI'],
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Diagnostic+Labs+Near+Me'
    },
  ];

  const filteredServices = services.filter(service => 
    (selectedCategory === 'all' || service.category === selectedCategory) &&
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="medical-services-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="header-section">
          <h1 className="header-title">Find Medical Services</h1>
          <p className="header-subtitle">Browse local hospitals, pharmacies, and labs</p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <Search className="search-icon" />
        </div>

        {/* Category Buttons */}
        <div className="categories-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {isLoading ? (
            <Loader className="loader" />
          ) : (
            filteredServices.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <h2 className="service-title">{service.name}</h2>
                  <div className="service-rating">
                    <Star className="rating-star" /> {service.rating}
                  </div>
                </div>
                <div className="tags-container">
                  {service.specialties?.map((spec, index) => (
                    <span key={index} className="tag tag-blue">{spec}</span>
                  ))}
                  {service.insurance?.map((ins, index) => (
                    <span key={index} className="tag tag-green">{ins}</span>
                  ))}
                </div>
                <div className="buttons-container">
                  <a
                    href={service.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-button"
                  >
                    <Map className="map-icon" /> View on Map
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && !isLoading && (
          <div className="no-results">No services found for your search.</div>
        )}
      </div>
    </div>
  );
};

export default Medical;