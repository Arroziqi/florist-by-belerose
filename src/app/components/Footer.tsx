import { Link } from "react-router";
import { Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--deep-brown)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-[family-name:var(--font-serif)] text-3xl tracking-tight">
                Florist
              </span>
              <span className="font-[family-name:var(--font-serif)] text-xs tracking-[0.3em] text-[var(--dusty-rose)] -mt-1">
                BY BELEROSE
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              A boutique floral atelier dedicated to the art of botanical storytelling.
              Handcrafted arrangements designed with intention, artistry, and emotion.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--dusty-rose)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--dusty-rose)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-lg mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/60 hover:text-[var(--dusty-rose)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="text-white/60 hover:text-[var(--dusty-rose)] transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/60 hover:text-[var(--dusty-rose)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white/60 hover:text-[var(--dusty-rose)] transition-colors"
                >
                  My Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/60 hover:text-[var(--dusty-rose)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-lg mb-4">Visit Us</h3>
            <ul className="space-y-3 text-white/60">
              <li>123 Bloom Street</li>
              <li>Garden District</li>
              <li className="pt-2">hello@florisbybelerose.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-2">
                <span className="text-white/40 text-sm">Tue-Sat: 10am-6pm</span>
              </li>
              <li>
                <span className="text-white/40 text-sm">Sun: 11am-4pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Florist by Belerose. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-[var(--dusty-rose)]" fill="currentColor" />
            <span>for lovers of beauty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
