"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

const links = [
  { label: "Home", href: "#home" },
  { label: "Women’s collections", href: "#collections" },
  { label: "Our story", href: "#about" },
  { label: "Visit us", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span className="sr-only">
          Liora Fashions women&apos;s wear. Up to 50% offer. Contact us on
          WhatsApp for current collections.
        </span>
        <div className="announcement-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="announcement-group" key={copy}>
              <span>Women&apos;s fashion</span>
              <span className="announcement-star">✳</span>
              <span>Up to 50% offer</span>
              <span className="announcement-star">✳</span>
              <span>Salwar sets · Kurtis · Sharara &amp; more</span>
              <span className="announcement-star">✳</span>
            </div>
          ))}
        </div>
      </div>
      <header className="site-nav">
        <div className="nav-inner">
          <Link
            href="#home"
            className="brand"
            aria-label="Liora Fashions home"
            onClick={() => setIsOpen(false)}
          >
            <span className="brand-name">
              <span className="brand-title">LIORA FASHIONS</span>
              <span className="brand-tagline">Elegance in Every Thread</span>
            </span>
          </Link>

          <nav
            id="main-navigation"
            className={`nav-links${isOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="nav-order"
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Order on WhatsApp
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
    </>
  );
}
