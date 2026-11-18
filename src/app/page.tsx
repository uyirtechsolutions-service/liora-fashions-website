"use client";

import { Hero } from "@/components/sections/hero";
import { ProductGrid } from "@/components/sections/product-grid";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import Nav from "@/components/ui/nav";

export default function Home() {
  return (
    <main className="site-shell">
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <ProductGrid />
      <About />
      <Contact />
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-brand">Liora Fashions · Elegance in Every Thread</span>
          <p>Beautiful styles for women, for every moment.</p>
          <a
            href="https://www.instagram.com/liora_fashions9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
