import Header from "../components/Header";
import "../styles/About.css";
import Footer from "../components/Footer";
import { FaTruckFast } from "react-icons/fa6";       // exemple pour Fast Supply
import { MdAttachMoney } from "react-icons/md";      // Affordable
import { BsLightningCharge } from "react-icons/bs";  // High Performance
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"; // Capacity
import { RiFlowChart } from "react-icons/ri";    

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
              NOTRE HISTOIRE
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
      
      <section className="history-section">
        <div className="lefright">
          <div className="left">
            <h2>NOTRE HISTOIRE</h2>
            <p>L'évolution des activités de la SIAB ayant suscité beaucoup d'intérêt auprès d'autres groupes d'investisseurs à l'international, elle sera rachetée et associée au groupe HAGE INDUSTRIES en 2001 ce qui lui permettra d'avoir une ouverture sur le marché sous-régional et international. Tout comme les autres entreprises du groupe, la SIAB s'est diversifiée au fil du temps, offrant de nouveaux produits fabriqués localement : ceci permettra de favoriser le développement de nouveaux emplois pour les béninois et contribuera donc à créer une émergence industrielle du pays. Considéré comme 2ème plus grand contributeur de la douane depuis 2020, la SIAB a énormément contribué à éradiquer le chômage.
            Avec un personnel de plus de 500 employés exerçant au pôle industriel, commercial et administratif, la SIAB a pu augmenter sa capacité de production ce qui lui permettra dès lors de couvrir une bonne partie de la demande en matériaux de construction à base d'acier et d'aluminium sur le plan national, et aussi de pouvoir exporter et de conquérir de nouveaux marchés de la sous-région Ouest-Africaine.</p>
          </div>
          <div className="right">
            <img
              src="/enhaut.png"
              alt="enhaut"
              className="enhaut"
            />
          </div>
        </div>
      </section>
      
      <section className="values-section">
        <div className="jaune">
          <h1>NOS VALEURS</h1>
          <p>Manor Build is one of the most trusted prefab home builders. We specialise in affordable, transportable home designs to suit all budgets and requirements. Our aim is to build affordable homes that exceed the industry standard using quality products that stand the test of time.</p>
        </div>
        
        {/* Intégration de la vidéo YouTube avec protocole HTTPS */}
        <div className="video-container">
          {videoLoaded ? (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Remplacez par votre ID vidéo
              title="Vidéo de présentation de nos valeurs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="video-placeholder">
              <div className="loader"></div>
              <p>Chargement de la vidéo...</p>
            </div>
          )}
        </div>
        <div className="features">
           <div className="feature">
        <FaTruckFast className="icon" />
        <h3>Fast Supply</h3>
        <p>New homes constructed in as little as 8 to 10 weeks.</p>
      </div>

      <div className="feature">
        <MdAttachMoney className="icon" />
        <h3>Affordable</h3>
        <p>Standardised processes and materials result in reduced costs.</p>
      </div>

      <div className="feature">
        <BsLightningCharge className="icon" />
        <h3>High Performance</h3>
        <p>Maximised thermal efficiency and reduced environmental impact.</p>
      </div>

      <div className="feature">
        <HiOutlineBuildingOffice2 className="icon" />
        <h3>Capacity</h3>
        <p>Annual capacity of more than 60 homes per year.</p>
      </div>

      <div className="feature">
        <RiFlowChart className="icon" />
        <h3>Simple process</h3>
        <p>Reduce stress and increase satisfaction.</p>
      </div>
        </div>
         <section className="team">
        <h2>NOTRE EQUIPE</h2>
        <div className="team-grid">
          <div className="member">
            <img src="/Manu.png" alt="" />
            <div className="member2">
              <h4>Olivier RAMOS</h4>
              <p>Directeur Exécutif</p>
            </div>
          </div>

          <div className="member">
            <img src="/Manue.png" alt="" />
            <div className="member2">
              <h4>Manuel DACIEN</h4>
              <p>Directeur adjoint en charge de l’opérationnel et des finances</p>
            </div>
          </div>

          <div className="member">
            <img src="/Manuel.png" alt="" />
            <div className="member2">
              <h4>Robin ANTÈGE</h4>
              <p>Gestionnaire Administratif et Financier</p>
            </div>
          </div>

          {/* … Ajoutez les autres membres de la même façon … */}
        </div>
      </section>
        </section>
        <Footer />

    </div>
  );
}