import { motion } from "motion/react";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const bouquets = [
    {
      name: "Dusty Romance",
      description: "Soft pink roses and champagne blooms",
      price: "$125",
      image: "https://images.unsplash.com/photo-1755402467260-9379be8ccecc?w=1080"
    },
    {
      name: "Ivory Dream",
      description: "Elegant white peonies with sage accents",
      price: "$145",
      image: "https://images.unsplash.com/photo-1652164055648-102e8719ae05?w=1080"
    },
    {
      name: "Blushing Garden",
      description: "Handpicked seasonal pink blooms",
      price: "$135",
      image: "https://images.unsplash.com/photo-1680563094046-5d846e2c59d1?w=1080"
    },
    {
      name: "Champagne Bliss",
      description: "Luxurious beige and pink arrangement",
      price: "$155",
      image: "https://images.unsplash.com/photo-1679621711784-8485ebe333f5?w=1080"
    }
  ];

  const collections = [
    {
      title: "Spring Awakening",
      description: "Fresh blooms celebrating renewal",
      image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=1080"
    },
    {
      title: "Summer Romance",
      description: "Lush arrangements for warm days",
      image: "https://images.unsplash.com/photo-1589458456444-f7158a7e8a4f?w=1080"
    }
  ];

  const testimonials = [
    {
      name: "Sophie Laurent",
      text: "The artistry in every arrangement is breathtaking. Belerose transformed our wedding into a romantic dream.",
      role: "Bride"
    },
    {
      name: "Emma Chen",
      text: "Each bouquet tells a story. The attention to detail and handcrafted touch is unmatched.",
      role: "Event Designer"
    },
    {
      name: "Isabella Rose",
      text: "More than flowers — it's an emotional experience. The team truly understands floral storytelling.",
      role: "Gallery Owner"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--ivory)] via-[var(--warm-white)] to-[var(--soft-pink)]">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1552225429-19a1d86cf2a4?w=1920"
            alt="Floral background"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl tracking-tight text-[var(--deep-brown)] mb-6">
              Where Every Bloom
              <br />
              Tells a Story
            </h1>
            <p className="text-lg md:text-xl text-[var(--deep-brown)]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Handcrafted floral arrangements designed with artistry, elegance, and emotion
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--dusty-rose)] text-white rounded-sm hover:bg-[var(--accent)] transition-all duration-300 group"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--dusty-rose)]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Featured Bouquets */}
      <section className="py-32 px-6 bg-[var(--ivory)]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl text-[var(--deep-brown)] mb-4">
              Featured Bouquets
            </h2>
            <p className="text-[var(--deep-brown)]/60 text-lg max-w-2xl mx-auto">
              Each arrangement is thoughtfully crafted to evoke emotion and celebrate beauty
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {bouquets.map((bouquet, index) => (
              <motion.div
                key={bouquet.name}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                  <ImageWithFallback
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-brown)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--deep-brown)] mb-2">
                  {bouquet.name}
                </h3>
                <p className="text-sm text-[var(--deep-brown)]/60 mb-3">{bouquet.description}</p>
                <p className="font-medium text-[var(--dusty-rose)]">{bouquet.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Belerose */}
      <section className="py-32 px-6 bg-gradient-to-b from-[var(--warm-white)] to-[var(--soft-pink)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=1080"
                  alt="Belerose atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-2 mb-6 text-[var(--dusty-rose)]">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm tracking-widest uppercase">Our Philosophy</span>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-6">
                The Art of Floral Storytelling
              </h2>
              <div className="space-y-4 text-[var(--deep-brown)]/70 leading-relaxed">
                <p>
                  At Belerose, we believe that flowers are more than decorations — they are vessels of emotion,
                  carriers of memory, and expressions of the soul.
                </p>
                <p>
                  Each arrangement is handcrafted with intention, combining artistry with nature's ephemeral beauty.
                  Our atelier is a sanctuary where blooms are transformed into stories.
                </p>
                <p>
                  From intimate bouquets to grand installations, we pour our hearts into every petal,
                  creating moments that linger long after the flowers have faded.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-[var(--dusty-rose)] hover:gap-4 transition-all duration-300"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seasonal Collections */}
      <section className="py-32 px-6 bg-[var(--ivory)]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl text-[var(--deep-brown)] mb-4">
              Seasonal Collections
            </h2>
            <p className="text-[var(--deep-brown)]/60 text-lg">
              Celebrating the rhythm of nature through curated seasonal arrangements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-brown)]/70 via-[var(--deep-brown)]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-[family-name:var(--font-serif)] text-4xl mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-white/80">{collection.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[var(--warm-white)]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <Heart className="w-8 h-8 text-[var(--dusty-rose)] mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-4">
              Kind Words
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                {...fadeInUp}
                transition={{ delay: index * 0.15 }}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-sm border border-[var(--border)]"
              >
                <p className="text-[var(--deep-brown)]/80 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-[var(--border)] pt-4">
                  <p className="font-medium text-[var(--deep-brown)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--deep-brown)]/50">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery Preview */}
      <section className="py-32 px-6 bg-[var(--soft-pink)]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-4">
              @florisbybelerose
            </h2>
            <p className="text-[var(--deep-brown)]/60">
              Follow our floral journey on Instagram
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1644248423203-80e317d78aee?w=600",
              "https://images.unsplash.com/photo-1553379762-ff913d5513b5?w=600",
              "https://images.unsplash.com/photo-1755402975446-28a968506161?w=600",
              "https://images.unsplash.com/photo-1680563899402-26c3a712831f?w=600",
              "https://images.unsplash.com/photo-1582874576091-26fa231ce87c?w=600",
              "https://images.unsplash.com/photo-1777542849008-1d1c808cdb35?w=600",
              "https://images.unsplash.com/photo-1651154872716-0f7a409a4dd0?w=600",
              "https://images.unsplash.com/photo-1767552664188-6c008d06755d?w=600"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-sm overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-[var(--dusty-rose)] to-[var(--accent)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
              Whether it's a wedding, celebration, or simply because — we'd love to craft
              the perfect arrangement for your special moment.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--dusty-rose)] rounded-sm hover:bg-white/90 transition-all duration-300 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
