import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import StatsSection from "./StatsSection";

export default function Home() {
  const navigate = useNavigate();
    const partners = [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "2.png",
      "3.png",
      "5.png",
    ];
  return (
    <div className="home-container">
      <Header />
      
      {/* Section Hero avec vidéo en background */}
      <section className="hero-section">
        <video
          className="background-video"
          src="/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            ADENIKE – Construisons ensemble <span className="highlight-text">un avenir solide.</span>
          </h1>
          <p className="services-list">
            Nous sommes une entreprise spécialisée dans la vente de matériaux de construction et la réalisation de projets de bâtiment. Que vous soyez un particulier, une entreprise ou une collectivité, nous vous accompagnons à chaque étape pour concrétiser vos projets.
            Avec ADENIKE, vous avez l'assurance de travailler avec un partenaire fiable, engagé et passionné par la qualité.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => navigate("/histoire")}>
              Notre Histoire
            </button>
            <button className="btn-secondary" onClick={() => navigate("/products")}>
              Nos Services
            </button>
          </div>
        </div>
      </section>

      {/* Section About */}
      <section className="about-section" id="about">
        <div className="about-overlay"></div>
        <div className="about-container">
            {/* Conteneur pour l'image et le texte côte à côte */}
            <div className="about-content-wrapper">
            {/* Conteneur pour l'image arrondie */}

            
            {/* Conteneur pour le texte */}
            <div className="about-content">
                <h2 className="about-subtitle">ABOUT US</h2>
                <h1 className="about-titles">About ADENIKE Society</h1>
                <p className="about-description">
                ADENIKE is Sub-Saharan Africa's leading Dangate Cement Plc is Sub-Saharan
                Africa's leading cement company, with a production capacity of 2.0 million tonnes per year across ten countries. Together, these operations make us
                the largest cement producer in Sub-Saharan Africa cement company, with a
                production capacity of 5.0 million tonnes per year across ten countries. Together,
                these operations make us the largest cement producer in Sub-Saharan Africa.
                Dangate Cement Plc is Sub-Saharan Africa's leading Dangate Cement Plc is Sub-
                Saharan Africa's leading cement company, with a production capacity of 25.0
                million tonnes per year across ten countries. Together, these operations make us
                the largest cement producer in Sub-Saharan Africa cement company, with a
                production capacity of 25.0 million tonnes per year across ten countries. Together,
                these operations make us the largest cement producer in Sub-Saharan Africa.
                </p>
                <button className="read-more-btn" onClick={() => navigate("/histoire")}>Read More </button>
            </div>
                    <div className="about-image-container">
                <img 
                src="/home.png" // Remplacez par le chemin de votre image dans public
                alt="À propos d'ADENIKE" 
                className="about-image"
                />
            </div>
            </div>
        </div>
       </section>
        <StatsSection />

          <section className="partners-section">
      {/* PARTENAIRES */}
<div className="partners-logos-container">
  <div className="partners-logos-scroll">
    {partners.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`partner-${index}`}
        className="partner-logo"
      />
    ))}
    {/* Dupliquer pour l'effet de boucle continu */}
    {partners.map((logo, index) => (
      <img
        key={`duplicate-${index}`}
        src={logo}
        alt={`partner-${index}`}
        className="partner-logo"
      />
    ))}
  </div>
</div>
      <hr></hr>

      {/* CONTENU TEXTE */}
      <div className="partners-content">
        {/* Texte gauche */}
        <div className="partners-left">
          <h2>Nous avons une équipe forte et soudée</h2>
          <p className="subtitle">
            “De la fourniture des matériaux jusqu’à la livraison clé en main de vos bâtiments, nous faisons de votre rêve une réalité.”
          </p>
        </div>

        {/* Texte droite */}
        <div className="partners-right">
          <p>
            We look forward to working with you and demonstrating that
            commitment through our skilled journeymen carpenters, tapers,
            painters and acoustical union members. Notre force réside dans notre engagement envers la qualité, notre respect des délais et notre sens du détail. Nous savons qu’un projet de construction est un investissement de vie, c’est pourquoi nous offrons un service transparent, professionnel et accessible.

            Depuis notre création en 1996, nous avons développé un esprit de
            cohésion et de fraternité au sein de notre équipe. La Société compte
            aujourd'hui plus de 500 employés tous secteurs confondus.

            De la Direction générale à la Direction technique en passant par le
            pôle commercial et financier, nos agents s’évertuent constamment à
            donner le meilleur d’eux pour l’atteinte de nos objectifs bien que
            très ambitieux.
          </p>
        </div>
      </div>
    </section>
    
    <section>
        <div className="projects">
          <h2>Nous avons une équipe forte et soudée</h2>
          <p className="projects-subtitle">
             La Société compte aujourd'hui plus de 500 employés tous secteurs confondus. De la Direction générale à la Direction technique en passant par le pôle commercial et financier, nos agents s’évertuent constamment à donner le meilleur d’eux pour l’atteinte de nos objectifs bien que très ambitieux.
          </p>
        </div>
    </section>
     <section className="project-card">
      <div className="project-container">
        {/* Image */}
        <img
          src="Link.png"
          alt="Vietnamese Martyrs Parish"
          className="project-image"
        />

        {/* Bloc texte */}
        <div className="project-info">
          <h3>VIETNAMESE MARTYRS PARISH</h3>
          <a href="#" className="view-link">
            View Project →
          </a>
        </div>
      </div>
    </section>

     <section className="project-card">
      <div className="project-container">
        {/* Image */}
        <img
          src="j.png"
          alt="Vietnamese Martyrs Parish"
          className="project-image"
        />

        {/* Bloc texte */}
        <div className="project-info">
          <h3>VIETNAMESE MARTYRS PARISH</h3>
          <a href="#" className="view-link">
            View Project →
          </a>
        </div>
      </div>
    </section>
    <Footer />

      {/* Vous pouvez ajouter d'autres sections ici */}
      
    </div>
  );
}