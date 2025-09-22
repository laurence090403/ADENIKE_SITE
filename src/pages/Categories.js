import React, { useState } from "react";
import "../styles/CategoriesSection.css";

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    {
      id: 1,
      name: "Maçonnerie & Gros Œuvre",
      products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
    {
      id: 2,
      name: "Plomberie & Sanitaires",
     products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
    {
      id: 3,
      name: "Soudure & Métallerie",
     products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
    {
      id: 4,
      name: "Menuiserie & Bois",
     products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
    {
      id: 5,
      name: "Électricité",
     products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
    {
      id: 6,
      name: "Peinture & Finitions",
      products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
    {
      id: 7,
      name: "Carrelage",
       products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
    {
      id: 8,
      name: "Outillage",
     products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
     {
      id: 9,
      name: "Maçonnerie & Gros Œuvre",
      products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
     {
      id: 10,
      name: "Maçonnerie & Gros Œuvre",
      products: [
        { id: 1, name: "Clous de coffrage", image: "/clou.jpg" },
        { id: 2, name: "Étais de coffrage", image: "/etais.jpg"  },
        { id: 3, name: "Tiges filetées", image: "/barres.webp" },
        { id: 4, name: "Ligatures",image: "/rfil.webp" },
        { id: 5, name: "Truelle", image: "/hk.jpg"  },
        { id: 6, name: "Taloches", image: "/pla.webp" },
        { id: 7, name: "Marteau de maçon", image: "/ddd.jpg"  },
        { id: 8, name: "Brouette", image: "/brouette.jpg"  },
        { id: 9, name: "Charnières métalliques", image: "/aa.jpg"  },
        { id: 10, name: "Casque de chantier", image: "/casque.jpg" },
        { id: 11, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 12, name: "Ciment", image: "/barres.webp" },
        { id: 13, name: "Chaux", image: "/rfil.webp" },
        { id: 14, name: "Plâtre", image: "/pla.webp" },
        { id: 15, name: "Blocs de béton", image: "/ddd.jpg" },        
        { id: 16, name: "Gants renforcés", image: "/clou.jpg"},
        { id: 17, name: "Ciment", image: "/barres.webp" },
        { id: 18, name: "Chaux", image: "/rfil.webp" },
        { id: 19, name: "Plâtre", image: "/pla.webp" },
        { id: 20, name: "Blocs de béton", image: "/ddd.jpg" }
      ]
    },
  ];

  return (
    <section className="categories-section">
      {/* Onglets Catégories */}
      <div className="categories-tabs-container">
        <div className="categories-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tab-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Produits de la catégorie active */}
      <div className="products-grid">
        {categories
          .find((cat) => cat.id === activeCategory)
          .products.map((product) => (
            <div key={product.id} className="product-card">
              <img className="productimage" src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CategoriesSection;