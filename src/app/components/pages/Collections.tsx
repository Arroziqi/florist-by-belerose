import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Collections() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const collections = [
    {
      title: "Signature Collection",
      description: "Our most beloved arrangements, handpicked for their timeless elegance",
      items: [
        {
          name: "Dusty Romance",
          description: "Soft pink roses, champagne blooms, and delicate greenery",
          price: "$125",
          image: "https://images.unsplash.com/photo-1755402467260-9379be8ccecc?w=1080"
        },
        {
          name: "Ivory Dream",
          description: "Pure white peonies with subtle sage accents",
          price: "$145",
          image: "https://images.unsplash.com/photo-1652164055648-102e8719ae05?w=1080"
        },
        {
          name: "Champagne Bliss",
          description: "Luxurious beige and blush arrangement",
          price: "$155",
          image: "https://images.unsplash.com/photo-1679621711784-8485ebe333f5?w=1080"
        }
      ]
    },
    {
      title: "Romantic Garden",
      description: "Lush, abundant bouquets that celebrate nature's romantic side",
      items: [
        {
          name: "Blushing Garden",
          description: "Seasonal pink blooms with textural elements",
          price: "$135",
          image: "https://images.unsplash.com/photo-1680563094046-5d846e2c59d1?w=1080"
        },
        {
          name: "Rose Garden",
          description: "Classic pink roses in full bloom",
          price: "$140",
          image: "https://images.unsplash.com/photo-1589458456444-f7158a7e8a4f?w=1080"
        },
        {
          name: "Peony Paradise",
          description: "Soft white and pink peonies",
          price: "$165",
          image: "https://images.unsplash.com/photo-1692521726977-f5c42456e716?w=1080"
        }
      ]
    },
    {
      title: "Minimalist Luxe",
      description: "Refined, understated arrangements for modern aesthetics",
      items: [
        {
          name: "Single Stem",
          description: "One perfect bloom in elegant simplicity",
          price: "$45",
          image: "https://images.unsplash.com/photo-1767552664188-6c008d06755d?w=1080"
        },
        {
          name: "Trio Elegance",
          description: "Three blooms, perfectly balanced",
          price: "$85",
          image: "https://images.unsplash.com/photo-1755402876233-f10cb0b41f44?w=1080"
        },
        {
          name: "Modern Vase",
          description: "Contemporary arrangement with clean lines",
          price: "$115",
          image: "https://images.unsplash.com/photo-1777542849008-1d1c808cdb35?w=1080"
        }
      ]
    },
    {
      title: "Wedding & Events",
      description: "Bespoke floral designs for your most memorable moments",
      items: [
        {
          name: "Bridal Bouquet",
          description: "Custom-designed for your special day",
          price: "From $250",
          image: "https://images.unsplash.com/photo-1533793241176-a270e75ef2ad?w=1080"
        },
        {
          name: "Ceremony Arch",
          description: "Grand floral installations",
          price: "From $800",
          image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=1080"
        },
        {
          name: "Reception Centerpieces",
          description: "Elegant table arrangements",
          price: "From $75 each",
          image: "https://images.unsplash.com/photo-1553379762-ff913d5513b5?w=1080"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[var(--ivory)] to-[var(--soft-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl text-[var(--deep-brown)] mb-6">
              Our Collections
            </h1>
            <p className="text-lg text-[var(--deep-brown)]/70 max-w-2xl mx-auto leading-relaxed">
              Each collection is thoughtfully curated to bring beauty, emotion, and artistry
              into your space. From intimate bouquets to grand installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections */}
      {collections.map((collection, collectionIndex) => (
        <section
          key={collection.title}
          className={`py-32 px-6 ${
            collectionIndex % 2 === 0 ? "bg-[var(--ivory)]" : "bg-[var(--warm-white)]"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-4">
                {collection.title}
              </h2>
              <p className="text-lg text-[var(--deep-brown)]/60 max-w-2xl">
                {collection.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {collection.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-brown)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--deep-brown)] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[var(--deep-brown)]/60 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-lg font-medium text-[var(--dusty-rose)]">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom Orders CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-[var(--champagne)] to-[var(--soft-pink)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-6">
              Custom Creations
            </h2>
            <p className="text-lg text-[var(--deep-brown)]/70 mb-8 max-w-2xl mx-auto">
              Don't see what you're looking for? We specialize in bespoke arrangements
              tailored to your vision, occasion, and aesthetic.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--dusty-rose)] text-white rounded-sm hover:bg-[var(--accent)] transition-all duration-300"
            >
              Request Custom Order
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
