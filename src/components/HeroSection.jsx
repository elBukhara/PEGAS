import React from 'react';
// import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <header className="position-relative w-100 overflow-hidden" style={{ height: '95vh' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50 z-1"></div>
        <img
          src="/assets/images/cars-hero-section.JPG"
          alt="Luxury cars for rent"
          width={1200}
          height={600}
          className="img-fluid w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center px-4 z-2">
          <div className="d-flex align-items-center mb-4">
            <h1 className="text-white fw-bold display-4">
              PEGAS <span className="text-warning">Car Rental</span>
            </h1>
          </div>
          <p className="text-white fs-4 w-50 mb-4">
            Премиальный сервис аренды автомобилей с новыми машинами и минимальным пробегом
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href='#cars' className="btn btn-warning btn-lg fw-bold">Забронивать</a>
            <a href='#contact' className="btn btn-outline-light btn-lg">Связаться</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSection;
