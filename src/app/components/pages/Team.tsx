import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Team() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const teamMembers = [
    {
      name: "Claire Belerose",
      role: "Creative Director & Founder",
      specialty: "Bridal & Event Design",
      quote: "Every flower has a story to tell, we just help it speak.",
      image: "https://images.unsplash.com/photo-1616756672750-326acbaaba4b?w=800",
      description: "With over 15 years of experience in floral artistry, Claire founded Belerose to create a space where flowers are treated as art."
    },
    {
      name: "Sophia Laurent",
      role: "Lead Florist",
      specialty: "Seasonal Arrangements",
      quote: "I find poetry in the way petals unfold.",
      image: "https://images.unsplash.com/photo-1691249937905-7b2960308b43?w=800",
      description: "Sophia's background in botanical illustration informs her approach to composition and color theory."
    },
    {
      name: "Emma Chen",
      role: "Wedding Specialist",
      specialty: "Bridal Bouquets",
      quote: "Weddings are about emotion, and flowers are the perfect medium.",
      image: "https://images.unsplash.com/photo-1628233674127-f3ce66c342bb?w=800",
      description: "Emma has designed florals for over 200 weddings, each one unique and deeply personal."
    },
    {
      name: "Isabella Rose",
      role: "Floral Stylist",
      specialty: "Editorial & Commercial",
      quote: "Flowers should feel effortless, even when they're not.",
      image: "https://images.unsplash.com/photo-1679803163582-d7225503f270?w=800",
      description: "Isabella brings a fashion-forward sensibility to floral design, working with magazines and brands."
    },
    {
      name: "Amelia Hart",
      role: "Bouquet Artist",
      specialty: "Hand-tied Bouquets",
      quote: "The magic is in the details — every stem, every leaf matters.",
      image: "https://images.unsplash.com/photo-1714207427934-fd54f9c9b99c?w=800",
      description: "Amelia specializes in the art of hand-tying, creating bouquets that feel organic and alive."
    },
    {
      name: "Olivia Blake",
      role: "Packaging Specialist",
      specialty: "Presentation & Packaging",
      quote: "The unwrapping should be as beautiful as the blooms themselves.",
      image: "https://images.unsplash.com/photo-1710886317108-0a36c6b22818?w=800",
      description: "Olivia ensures every arrangement is wrapped with care, using sustainable materials and elegant design."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[var(--ivory)] via-[var(--warm-white)] to-[var(--soft-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl text-[var(--deep-brown)] mb-6">
              Meet the Artisans
              <br />
              Behind Belerose
            </h1>
            <p className="text-lg text-[var(--deep-brown)]/70 max-w-2xl mx-auto leading-relaxed">
              A collective of passionate florists, stylists, and creators dedicated to
              the craft of botanical artistry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 px-6 bg-[var(--ivory)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-brown)]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      "{member.quote}"
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--deep-brown)]">
                    {member.name}
                  </h3>
                  <p className="text-[var(--dusty-rose)] font-medium">{member.role}</p>
                  <p className="text-sm text-[var(--deep-brown)]/50 italic">{member.specialty}</p>
                  <p className="text-[var(--deep-brown)]/70 leading-relaxed pt-2">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-32 px-6 bg-gradient-to-br from-[var(--warm-white)] to-[var(--soft-pink)]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-4">
              Behind the Scenes
            </h2>
            <p className="text-[var(--deep-brown)]/60 text-lg max-w-2xl mx-auto">
              A glimpse into our studio and the hands that craft each arrangement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 aspect-[16/10] rounded-sm overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=1200"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="aspect-[16/10] md:aspect-auto rounded-sm overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544928147-9e66f653d177?w=600"
                alt="Crafting details"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="aspect-[16/10] md:aspect-auto rounded-sm overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642751652611-bb9a7cad58a3?w=600"
                alt="Arranging flowers"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 aspect-[16/10] rounded-sm overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560453497-fdcb351a0c55?w=1200"
                alt="Studio atmosphere"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-32 px-6 bg-[var(--ivory)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-6">
              Join Our Atelier
            </h2>
            <p className="text-lg text-[var(--deep-brown)]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for passionate floral artists who share our commitment
              to craftsmanship, creativity, and thoughtful design. If you love flowers and
              believe in their power to tell stories, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--dusty-rose)] text-white rounded-sm hover:bg-[var(--accent)] transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 bg-gradient-to-r from-[var(--champagne)] to-[var(--soft-pink)]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--deep-brown)] mb-6">
              Our Shared Philosophy
            </h2>
            <div className="space-y-4 text-[var(--deep-brown)]/70 text-lg leading-relaxed">
              <p>
                At Belerose, we don't just arrange flowers — we collaborate with nature to
                create moments of beauty that resonate emotionally.
              </p>
              <p>
                Our team believes that every bloom has a voice, every color tells a story,
                and every arrangement is an opportunity to create something meaningful.
              </p>
              <p>
                Together, we work with intention, care, and an unwavering commitment to
                excellence in our craft.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
