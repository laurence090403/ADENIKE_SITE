import React from "react";
import "../styles/Testimonials.css";


const testimonials = [
  {
    id: 1,
    image: "/jj.png",
    name: "MADAME FLORENCE A.",
    text: "J’ai acheté tous les matériaux pour la construction de ma maison familiale auprès de l’entreprise. La qualité est excellente et les prix sont très compétitifs. L’équipe m’a également conseillé sur les meilleures options pour mon budget. Aujourd’hui, ma maison est solide et belle, je recommande vivement !",
    location: "COTONOU, BÉNIN",
  },
  {
    id: 2,
    image: "/Image.png",
    name: "MONSIEUR DONALD K.",
    text: "Nous avons confié à l’entreprise la construction de notre hôtel. Du design initial à la livraison finale, tout a été fait dans les règles de l’art. Les délais ont été respectés et le suivi du chantier était exemplaire. C’est rare de voir un tel professionnalisme !",
    location: "ATLANTA, USA",
  },
  {
    id: 3,
    image: "/Imagem.png",
    name: "MADAME PRISCA T.",
    text: "J’avais besoin de ciment, de carreaux et d’accessoires pour ma boutique. J’ai été servie rapidement avec des matériaux de qualité. En plus, le service client est très disponible, ce qui m’a beaucoup aidée. Je n’achète plus ailleurs ! Je suis entièrement satisfaite.",
    location: "PORTO-NOVO, BÉNIN",
  },
    {
    id: 4,
    image: "/jj.png",
    name: "MADAME FLORENCE A.",
    text: "J’ai acheté tous les matériaux pour la construction de ma maison familiale auprès de l’entreprise. La qualité est excellente et les prix sont très compétitifs. L’équipe m’a également conseillé sur les meilleures options pour mon budget. Aujourd’hui, ma maison est solide et belle, je recommande vivement !",
    location: "COTONOU, BÉNIN",
  },
  {
    id: 5,
    image: "/Image.png",
    name: "MONSIEUR DONALD K.",
    text: "Nous avons confié à l’entreprise la construction de notre hôtel. Du design initial à la livraison finale, tout a été fait dans les règles de l’art. Les délais ont été respectés et le suivi du chantier était exemplaire. C’est rare de voir un tel professionnalisme !",
    location: "ATLANTA, USA",
  },
  {
    id: 6,
    image: "/Imagem.png",
    name: "MADAME PRISCA T.",
    text: "J’avais besoin de ciment, de carreaux et d’accessoires pour ma boutique. J’ai été servie rapidement avec des matériaux de qualité. En plus, le service client est très disponible, ce qui m’a beaucoup aidée. Je n’achète plus ailleurs ! Je suis entièrement satisfaite.",
    location: "PORTO-NOVO, BÉNIN",
  },
    {
    id: 7,
    image: "/jj.png",
    name: "MADAME FLORENCE A.",
    text: "J’ai acheté tous les matériaux pour la construction de ma maison familiale auprès de l’entreprise. La qualité est excellente et les prix sont très compétitifs. L’équipe m’a également conseillé sur les meilleures options pour mon budget. Aujourd’hui, ma maison est solide et belle, je recommande vivement !",
    location: "COTONOU, BÉNIN",
  },
  {
    id: 8,
    image: "/Image.png",
    name: "MONSIEUR DONALD K.",
    text: "Nous avons confié à l’entreprise la construction de notre hôtel. Du design initial à la livraison finale, tout a été fait dans les règles de l’art. Les délais ont été respectés et le suivi du chantier était exemplaire. C’est rare de voir un tel professionnalisme !",
    location: "ATLANTA, USA",
  },
  {
    id: 9,
    image: "/Imagem.png",
    name: "MADAME PRISCA T.",
    text: "J’avais besoin de ciment, de carreaux et d’accessoires pour ma boutique. J’ai été servie rapidement avec des matériaux de qualité. En plus, le service client est très disponible, ce qui m’a beaucoup aidée. Je n’achète plus ailleurs ! Je suis entièrement satisfaite.",
    location: "PORTO-NOVO, BÉNIN",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <img className="testimonial-im" src={item.image} alt={item.name} />
            <div className="testimonial-content">
              <h3>{item.name}</h3>
              <p>"{item.text}"</p>
              <button className="testimonial-location">{item.location}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
