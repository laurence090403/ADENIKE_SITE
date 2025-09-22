import Header from "../components/Header";
import "../styles/Mission.css";
import Footer from "../components/Footer";
import CategoriesSection from './Categories';
import Testimonials from './Testimonials';
import { useNavigate } from "react-router-dom";


import { useState, useEffect } from "react"; // Import ajouté

export default function About() {
  const [videoLoaded, setVideoLoaded] = useState(false); // État ajouté
  const navigate = useNavigate();

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
            src="/afric.jpg"
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
              NOTRE MISSION
            </h1>
          </div>
        </section>
      </div>
            <section>
        <div className="projectsik">
          <h2>Building the right environment where people can be at their best, be authentic, and are treated with dignity and respect.</h2>
        
            <p className="projectsie">
            Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables. Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables.
            </p>
             <p className="projectsie">
            Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables. Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables.
            </p>
             <p className="projectsiek">
            Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables. Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables.
            </p>
        </div>
      </section>
        <section className="why-section">
      {/* Bloc principal */}
      <div className="why-header">
        <h2>POURQUOI CHOISIR ADENIKE SERVICES?</h2>
        <p>
          Nous vous fournissons des matériaux de construction de qualité <br />
          Leader du marché béninois en sidérurgie depuis 1996, ADENIKE SERVICES
          continue d'innover en proposant des produits répondant aux normes
          internationales en vigueur. Leader du marché béninois en sidérurgie
          depuis 1996, ADENIKE SERVICES continue d'innover en proposant des
          produits répondant aux normes internationales en vigueur. Leader du
          marché béninois en sidérurgie depuis 1996, ADENIKE SERVICES continue
          d'innover en proposant des produits répondant aux normes
          internationales en vigueur. Leader du
          marché béninois en sidérurgie depuis 1996, ADENIKE SERVICES continue
          d'innover en proposant des produits répondant aux normes
          internationales en vigueur. Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables.
        </p>
        <button className="btn-more" onClick={() => navigate("/projets")}>En savoir plus</button>
      </div>

      {/* Bloc images + texte */}
      <div className="why-bottom">
        {/* Grille d’images */}
        <div className="why-images">
          <img src="/enhaut.png" alt="Construction" />
          <img src="/Background.png" alt="Travail" />
          <img src="/Backgroundb.png" alt="Bâtiment" />
          <img src="/afric.jpg" alt="Ingénieur" />
        </div>

        {/* Texte à droite */}
        <div className="why-text">
          <h3>NOUS AVONS UNE ÉQUIPE FORTE ET SOUDÉE</h3>
          <p>
            Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables.
          </p>
          <p>
            Depuis notre création en 1995, nous avons développé un esprit de
            cohésion unique entre collaborateurs et partenaires. Notre équipe
            soudée et expérimentée met tout en œuvre pour réaliser vos projets
            avec professionnalisme et efficacité. Chaque membre apporte son
            expertise, garantissant des réalisations solides, esthétiques et
            durables.
          </p>
        </div>
      </div>
    </section>
     <section>
        <div className="projectsi">
          <h2>Notre savoir-faire, ils en parlent</h2>
        </div>
      </section>
      <Testimonials/>
        
        <Footer />

    </div>
  );
}