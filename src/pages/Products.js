import Header from "../components/Header";
import "../styles/About.css";
import Footer from "../components/Footer";
import CategoriesSection from './Categories';

import { useState, useEffect } from "react"; // Import ajouté

export default function About() {
  const [videoLoaded, setVideoLoaded] = useState(false); // État ajouté

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Conteneur pour Header et Hero avec le même background */}
      <div className="header-hero-wrapper">
        {/* Image de fond pour Header et Hero */}
        <div className="shared-background">
          <img
            src="/Background.png"
            alt="Background"
            className="background-image"
          />
          <div className="background-overlay"></div>
        </div>
        
        {/* Header */}
        <Header />
        
        {/* Section Hero */}
        <section className="hero-sections">
          <div className="hero-contents">
            <h1 className="hero-titles">
              NOS PRODUITS
            </h1>
          </div>
        </section>
      </div>
            <section>
        <div className="projectsi">
          <h2>ADENIKE INTER services</h2>
          <p className="projectsi-subtitle">
            De la Direction générale à la Direction technique en passant par le pôle commercial et financier, nos agents s'évertuent constamment à donner le meilleur d'eux pour l'atteinte de nos objectifs bien que très ambitieux.
          </p>
        </div>
      </section>
      <CategoriesSection />
      

      

     
        <Footer />

    </div>
  );
}