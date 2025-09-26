import Header from "../components/Header";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";
import Footer from "../components/Footer";

import { useState, useEffect } from "react"; // Import ajouté

export default function About() {
  const [videoLoaded, setVideoLoaded] = useState(false); // État ajouté
const [activeTab, setActiveTab] = useState("benin");
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
            src="/im.png"
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
              CONTACT
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
        <section className="contact-section">
        <div className="contact-info">
          <h3>CONTACTEZ NOUS</h3>
          <div className="contact-block">
            <strong>Bénin, Porto-Novo</strong><br />
            +33 01 48 47 39 50<br />
            <a href="mailto:contact@exemple.fr">contact@exemple.fr</a>
          </div>
          <div className="contact-block">
            <strong>USA, ATLANTA</strong><br />
            +33 098 42 98 84<br />
            <a href="mailto:team@exemple.com">team@exemple.com</a>
          </div>
        </div>
        <div className="schedule">
          <div className="schedule-card">
            <h3>NOS HORAIRES D’OUVERTURE</h3>
            <p>
              Le club est ouvert tous les jours de l’année, samedi, dimanche et jours fériés inclus.
            </p>
            <ul>
              <li>Lundi : 7h30 – 22h30</li>
              <li>Mardi : 7h30 – 22h30</li>
              <li>Mercredi : 7h30 – 22h30</li>
              <li>Jeudi : 7h30 – 22h30</li>
              <li>Vendredi : 7h30 – 22h30</li>
              <li>Samedi : 7h30 – 22h30</li>
              <li>Dimanche : 7h30 – 22h30</li>
            </ul>
          </div>
          <img
            src="afric.jpg"
            alt="Workers"
            className="schedule-img"
          />
        </div>
      </section>

      {/* SECTION 2 – Carte & Adresse */}
      <section className="map-section">
        <div className="map-wrapper">
          <iframe
            title="map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.252%2C48.846%2C2.26%2C48.85&layer=mapnik"
            allowFullScreen
          ></iframe>
        </div>

        <div className="address-info">
          <h3>NOTRE ADRESSE</h3>
          <p>  <strong>Bénin: </strong> Porto-Novo, Capitale, Quartier Cinquantenaire</p>
          <p> <strong>Etats Unis: </strong> US,TORONTO</p>

          <h4>MEDIA</h4>
           <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>

          <h4>Contact</h4>
          <p>
            <strong>Porto Novo :</strong> +229 0156 7236 3247<br />
            <strong>TORONTO :</strong> +(1) 01 484 739 503
          </p>
        </div>
      </section>
     
        <Footer />

    </div>
  );
}