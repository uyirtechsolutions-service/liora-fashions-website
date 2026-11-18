"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
    alt: "Woman in a richly colored embroidered outfit",
    caption: "Elegance in every thread",
    collection: "Festive favourites",
  },
  {
    src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1400&q=85",
    alt: "Woman wearing a vibrant traditional outfit",
    caption: "Color made to celebrate",
    collection: "The occasion edit",
  },
  {
    src: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=1400&q=85",
    alt: "Woman styled in a graceful contemporary ethnic look",
    caption: "Made for your moments",
    collection: "Everyday elegance",
  },
  {
    src: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1400&q=85",
    alt: "Woman in a flowing jewel-toned ensemble",
    caption: "A little more you",
    collection: "The Liora collection",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow">Liora Fashions · Women&apos;s wear</span>
        <h1 id="hero-title">
          Tradition,
          <br />
          with a little
          <br />
          <em>more you.</em>
        </h1>
        <p className="hero-description">
          Discover women&apos;s styles for everyday comfort, celebrations, and
          every beautiful moment in between.
        </p>
        <div className="hero-actions">
          <Link className="button-primary" href="#collections">
            Explore women&apos;s wear <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <a className="button-text" href="#about">
            The Liora story <ArrowDown size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div
          className="hero-image"
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured Liora looks"
        >
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              className={`hero-slide${index === activeSlide ? " is-active" : ""}`}
              src={slide.src}
              alt={index === activeSlide ? slide.alt : ""}
              aria-hidden={index !== activeSlide}
              fill
              sizes="(max-width: 680px) 84vw, 55vw"
              quality={85}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
          <div className="hero-image-caption">
            <p>{slides[activeSlide].caption}</p>
            <span>{slides[activeSlide].collection}</span>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          Made for
          <br />
          your moment
        </div>
        <span className="hero-index" aria-hidden="true">
          LIORA — EST. 2024
        </span>
      </div>
    </section>
  );
}
