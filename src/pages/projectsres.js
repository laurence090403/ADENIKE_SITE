import Header from "../components/Header";
import "../styles/projectres.css";
import Footer from "../components/Footer";
import { Link} from "react-router-dom";

import CategoriesSection from './Categories';

import { useState, useEffect } from "react"; // Import ajouté

export default function About() {



const projectImages = [
{
id: 1,
src: "/one.jpg",
alt: "Façade principale de l'hôtel Vietnamese Martyrs Parish"
},
{
id: 2,
src: "/two.jpg",
alt: "Vue intérieure du hall principal de l'hôtel"
},
{
id: 3,
src: "/three.jpeg",
alt: "Chambre modèle de l'hôtel"
},
{
id: 4,
src: "/four.jpg",
alt: "Terrasse extérieure et jardin paysager"
}
];
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
            src="/one.jpg"
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
              VIETNAMESE MARTYRS PARISH
            </h1>
          </div>
        </section>
      </div>
            <section>
        <div className="projectsi">
          <h2>PROJET VIETNAMESE MARTYRS PARISH</h2>
          <p className="projectsi-subtitle">
            De la Direction générale à la Direction technique en passant par le pôle commercial et financier, nos agents s'évertuent constamment à donner le meilleur d'eux pour l'atteinte de nos objectifs bien que très ambitieux.
          Adenike a fourni l’ensemble des matériaux clés pour la construction de cet hôtel de 4 étages destiné à accueillir les visiteurs de la paroisse Vietnamese Martyrs. Le bâtiment combine une architecture contemporaine et des inspirations asiatiques, avec de larges baies vitrées pour une luminosité naturelle optimale.</p>
          <h2>Notre Contribution</h2>
          <p className="projectsie">Notre contribution à ce projet a été déterminante dès les premières phases de conception. Nous avons accompagné l’équipe d’architectes pour sélectionner des matériaux à la fois esthétiques, résistants et parfaitement adaptés au climat côtier de Cotonou. Nous avons fourni des blocs de béton haute résistance et des armatures métalliques certifiées pour garantir une structure solide et durable. Pour les finitions, notre équipe a conseillé et livré une gamme complète de carrelages importés, de peintures acryliques résistantes à l’humidité, ainsi que des solutions d’isolation thermique et acoustique. Nous avons également assuré un suivi régulier sur le chantier afin de veiller à la qualité de mise en œuvre et à la conformité avec les normes internationales de sécurité. Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
         Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
          </p>

           <p className="projectsie">Notre contribution à ce projet a été déterminante dès les premières phases de conception. Nous avons accompagné l’équipe d’architectes pour sélectionner des matériaux à la fois esthétiques, résistants et parfaitement adaptés au climat côtier de Cotonou. Nous avons fourni des blocs de béton haute résistance et des armatures métalliques certifiées pour garantir une structure solide et durable. Pour les finitions, notre équipe a conseillé et livré une gamme complète de carrelages importés, de peintures acryliques résistantes à l’humidité, ainsi que des solutions d’isolation thermique et acoustique. Nous avons également assuré un suivi régulier sur le chantier afin de veiller à la qualité de mise en œuvre et à la conformité avec les normes internationales de sécurité. Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
         Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
          </p>
           <p className="projectsie">Notre contribution à ce projet a été déterminante dès les premières phases de conception. Nous avons accompagné l’équipe d’architectes pour sélectionner des matériaux à la fois esthétiques, résistants et parfaitement adaptés au climat côtier de Cotonou. Nous avons fourni des blocs de béton haute résistance et des armatures métalliques certifiées pour garantir une structure solide et durable. Pour les finitions, notre équipe a conseillé et livré une gamme complète de carrelages importés, de peintures acryliques résistantes à l’humidité, ainsi que des solutions d’isolation thermique et acoustique. Nous avons également assuré un suivi régulier sur le chantier afin de veiller à la qualité de mise en œuvre et à la conformité avec les normes internationales de sécurité. Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
         Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
          </p>
           <p className="projectsie">Notre contribution à ce projet a été déterminante dès les premières phases de conception. Nous avons accompagné l’équipe d’architectes pour sélectionner des matériaux à la fois esthétiques, résistants et parfaitement adaptés au climat côtier de Cotonou. Nous avons fourni des blocs de béton haute résistance et des armatures métalliques certifiées pour garantir une structure solide et durable. Pour les finitions, notre équipe a conseillé et livré une gamme complète de carrelages importés, de peintures acryliques résistantes à l’humidité, ainsi que des solutions d’isolation thermique et acoustique. Nous avons également assuré un suivi régulier sur le chantier afin de veiller à la qualité de mise en œuvre et à la conformité avec les normes internationales de sécurité. Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
         Cette implication technique et logistique a permis d’optimiser les délais de construction tout en respectant le budget fixé.
          </p>

        
        </div>
      </section>
 <section className="project-gallery">
      <h2>Galerie du projet</h2>
      <div className="project-gallery-grid">
        {projectImages.map((img) => (
          <figure key={img.id}>
            <img src={img.src} alt={img.alt} />
          </figure>
        ))}
      </div>
    </section>
      

      

     
        <Footer />

    </div>
  );
}