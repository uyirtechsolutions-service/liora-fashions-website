import { Sparkles } from "lucide-react";
import Image from "next/image";

const values = ["Women’s styles", "Everyday & festive", "Here to help"];

export function About() {
  return (
    <section id="about" className="about">
      <div className="section-wrap about-layout">
        <div className="about-image-wrap">
          <div className="about-image">
            <Image
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85"
              alt="Woman wearing a colorful traditional outfit"
              fill
              sizes="(max-width: 680px) 90vw, 45vw"
              quality={85}
              loading="lazy"
            />
          </div>
          <div className="about-image-note">
            Find the feeling
            <br />
            you want to wear.
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">A little about us</span>
          <h2>Made for the women who wear it.</h2>
          <p>
            Liora Fashions is a women&apos;s clothing shop with beautiful styles
            for every occasion. From salwar sets and kurtis to festive Anarkalis
            and everyday essentials, find a look for the way you want to feel.
          </p>
          <p>
            Browse our collections, then message us on WhatsApp to ask about
            sizes, availability, and current offers.
          </p>
          <div className="values-list">
            {values.map((value) => (
              <div className="value" key={value}>
                <span aria-hidden="true">
                  <Sparkles size={14} strokeWidth={1.4} />
                </span>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
