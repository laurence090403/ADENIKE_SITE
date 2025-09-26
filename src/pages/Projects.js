import Header from "../components/Header";
import "../styles/Projects.css";
import Footer from "../components/Footer";
import CategoriesSection from './Categories';
import { FaAward, FaUsers, FaHandshake, FaFlag } from "react-icons/fa";

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

  
const projects = [
  {
    id: 1,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
    image: "/im.png",
  },
  {
    id: 2,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
    image: "/imh.png",
    
  },
  {
    id: 3,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
    image: "/imn.png",
    
  },
  {
    id: 4,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
        image: "/im.png",

  },
    {
    id: 5,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
    image: "/imn.png",
    
  },
  {
    id: 6,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
        image: "/im.png",

  },
   {
    id: 7,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
        image: "/im.png",

  },
    {
    id: 8,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
    image: "/imn.png",
    
  },
  {
    id: 9,
    title: "Classic Country vibes in Bulls",
    description:
      "A brand new prefab home designed for comfort, sustainability, and low-maintenance living. It is a prime example of how prefabricated construction delivers stylish, functional homes easily.",
        image: "/im.png",

  },
];

  return (
    <div className="home-container">
      {/* Conteneur pour Header et Hero avec le même background */}
      <div className="header-hero-wrapper">
        {/* Image de fond pour Header et Hero */}
        <div className="shared-background">
          <img
            src="/Backgroundb.png"
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
              NOS REALISATIONS
            </h1>
          </div>
        </section>
      </div>
         <section className="about-sect">
      <h2 className="about-title">
        “ NOUS CONSTRUISONS VOS PROJETS SUR DES BASES SOLIDES “
      </h2>

      <div className="about-container">
        {/* Texte principal */}
        <div className="about-text">
          <p>
            Chez <span className="highlight">ADENIKE INTER SERVICES</span>, nous
            mettons à votre disposition une large gamme de matériaux de
            construction, d’outils et de quincaillerie de qualité pour tous vos
            projets : maisons, hôtels, immeubles et infrastructures.
          </p>
          <p>
            <span className="highlight">Du Bénin aux États-Unis</span>, nous
            accompagnons particuliers et professionnels avec des produits fiables
            et un service de confiance.
          </p>

          <div className="about-links">
            <span>Mission</span>
            <span>Leadership</span>
            <span>Responsibility</span>
          </div>
        </div>

        {/* Cartes d'icônes */}
        <div className="about-grid">
          <div className="about-card">
            <FaAward className="about-icon" />
            <h4>Service Excellence</h4>
            <p>
              We approach construction differently, delivering value beyond our
              client’s expectations.
            </p>
          </div>
          <div className="about-card">
            <FaUsers className="about-icon" />
            <h4>Employee-Owned</h4>
            <p>
              Our team is composed of the best and brightest in the industry.
            </p>
          </div>
          <div className="about-card">
            <FaAward className="about-icon" />
            <h4>Service Excellence</h4>
            <p>
              We approach construction differently, delivering value beyond our
              client’s expectations.
            </p>
          </div>
          <div className="about-card">
            <FaUsers className="about-icon" />
            <h4>Employee-Owned</h4>
            <p>
              Our team is composed of the best and brightest in the industry.
            </p>
          </div>
          <div className="about-card">
            <FaHandshake className="about-icon" />
            <h4>Relationship-Driven</h4>
            <p>We employ an open and collaborative approach with our partners.</p>
          </div>
          <div className="about-card">
            <FaFlag className="about-icon" />
            <h4>Nationwide</h4>
            <p>
              We have the ability to go wherever our clients need, delivering in
              over 15 states.
            </p>
          </div>
        </div>
      </div>
    </section>

     <section className="projects-section">
      <h2 className="projects-header">
        “ NOUS BÂTISSONS DES MAISONS SOLIDES, MODERNES ET ADAPTÉES AUX BESOINS
        DE CHAQUE FAMILLE. DU CHOIX DES MATÉRIAUX À LA FINITION, TOUT EST PENSÉ
        POUR OFFRIR CONFORT, DURABILITÉ ET ESTHÉTISME. “
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img className="project-imaa" src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="/proj1" className="read-more">
                Continue reading →
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>

      

     
        <Footer />

    </div>
  );
}