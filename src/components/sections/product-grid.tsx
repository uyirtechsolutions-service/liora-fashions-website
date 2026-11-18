"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: "salwar-set",
    name: "Women's Salwar Set",
    category: "Salwar Set",
    image:
      "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=900&q=85",
    description: "A graceful classic for everyday wear and special visits.",
  },
  {
    id: "sharara",
    name: "Festive Sharara",
    category: "Sharara",
    image:
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85",
    description: "A statement silhouette for celebrations and gatherings.",
  },
  {
    id: "co-ord-set",
    name: "Women's Co-ord Set",
    category: "Co-ord Set",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85",
    description: "An easy matching look, ready to wear together.",
  },
  {
    id: "kurtis",
    name: "Everyday Kurti",
    category: "Kurtis",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
    description: "A versatile women's wardrobe favorite for everyday comfort.",
  },
  {
    id: "leggings",
    name: "Comfort Leggings",
    category: "Leggings",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    description: "A comfortable everyday essential to pair with your kurtis.",
  },
  {
    id: "feeding-top",
    name: "Maternity Feeding Top",
    category: "Feeding Top",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
    description: "A thoughtful everyday option for nursing mothers.",
  },
  {
    id: "anarkali",
    name: "Anarkali Suit",
    category: "Anarkali",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    description: "A flowing traditional favorite for festive occasions.",
  },
  {
    id: "straight-pants",
    name: "Straight Pants",
    category: "Straight Pants",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    description: "An easy-to-style essential for your ethnic wardrobe.",
  },
  {
    id: "plazo",
    name: "Plazo Pants",
    category: "Plazo",
    image:
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=900&q=85",
    description: "A relaxed, flowing fit made for all-day ease.",
  },
];

const categories = [
  "All collections",
  "Salwar Set",
  "Sharara",
  "Co-ord Set",
  "Kurtis",
  "Leggings",
  "Feeding Top",
  "Anarkali",
  "Straight Pants",
  "Plazo",
];

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All collections");
  const filteredProducts =
    activeCategory === "All collections"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="collections" className="collection">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Liora Fashions · Women&apos;s wear</span>
            <h2>A style for every moment.</h2>
          </div>
        </div>

        <div className="filter-list" aria-label="Filter women's collections">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="filter-button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 680px) 50vw, (max-width: 900px) 33vw, 25vw"
                  loading="lazy"
                />
                <span className="product-tag">{product.category}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <a
                  className="order-button"
                  href={getWhatsAppOrderUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Order ${product.name} on WhatsApp`}
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Order on WhatsApp
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
