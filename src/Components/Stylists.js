import React from 'react';
import './Stylists.css';

const Stylists = () => {
  return (
    <div className="stylists">
      <h2>Meet Our Stylists</h2>
      <div className="stylist-profile">
        <div className="stylist">
          <img src="./images/Retrato Profissional Cabeleleira.jpg" alt="Stylist 1" />
          <h3>Kimiko Miyashiro</h3>
          <p>Specialty: Haircuts, Makeup</p>
        </div>
        <div className="stylist">
          <img src="./images/Beauty Therapist Apron, Beauty Specialist Wear, Embroidered Aprons of Faux Leather Apron, PMU Apron, Nail Master, Water Proof, Stain Proof - Etsy.jpg" alt="Stylist 1" />
          <h3>Sara Williams</h3>
          <p>Specialty: Haircuts, Color, Body massage</p>
        </div>
        
      </div>
    </div>
  );
};

export default Stylists;
