import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-wrap contact-panel">
        <div className="contact-copy">
          <span className="eyebrow">Visit Liora Fashions</span>
          <h2>Your next favorite is waiting.</h2>
          <p>
            Stop by our women&apos;s fashion shop or message us for help with
            styles, sizes, and current offers.
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="button-primary"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={15} aria-hidden="true" />
            Chat with us on WhatsApp
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            className="contact-instagram"
            href="https://maps.app.goo.gl/kyu3NAL6LwWe28P18?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={14} aria-hidden="true" />
            Find us on Google Maps <ArrowUpRight size={12} aria-hidden="true" />
          </a>
          <a
            className="contact-instagram"
            href="https://www.instagram.com/liora_fashions9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow along on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}
