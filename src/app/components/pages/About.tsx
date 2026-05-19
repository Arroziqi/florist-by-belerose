import { motion } from "motion/react";
import { Heart, Sparkles, Leaf } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const values = [
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "Every arrangement is crafted to evoke emotion and create lasting memories"
    },
    {
      icon: Sparkles,
      title: "Artisan Craftsmanship",
      description: "Hand-selected blooms arranged with meticulous attention to detail"
    },
    {
      icon: Leaf,
      title: "Sustainable Beauty",
      description: "Locally sourced, seasonal flowers chosen for their natural elegance"
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
              About Belerose
            </h1>
            <p className="text-lg text-[var(--deep-brown)]/70 max-w-2xl mx-auto leading-relaxed">
              A boutique floral atelier dedicated to the art of botanical storytelling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642751652611-bb9a7cad58a3?w=1080"
                  alt="Florist at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Sparkles className="w-6 h-6 text-[var(--dusty-rose)] mb-4" />
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[var(--deep-brown)]/70 leading-relaxed">
                <p>
                  Belerose began as a dream — a vision to create a sanctuary where flowers
                  are not just arranged, but transformed into emotional experiences.
                </p>
                <p>
                  Founded in 2018, our atelier has become a haven for those who seek more than
                  beauty. We believe in the language of flowers, in the stories they tell,
                  and the memories they preserve.
                </p>
                <p>
                  Each stem is chosen with intention. Each color palette is designed to evoke
                  a feeling. Each arrangement is a collaboration between nature and artistry.
                </p>
                <p>
                  From intimate gatherings to grand celebrations, from quiet moments to life's
                  biggest milestones — we're honored to be part of your story.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 px-6 bg-[var(--warm-white)]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-4">
              Our Philosophy
            </h2>
            <p className="text-[var(--deep-brown)]/60 text-lg max-w-2xl mx-auto">
              The values that guide every arrangement we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeInUp}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--soft-pink)] text-[var(--dusty-rose)] mb-6">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--deep-brown)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--deep-brown)]/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atelier */}
      <section className="py-32 px-6 bg-gradient-to-br from-[var(--soft-pink)] to-[var(--champagne)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-6">
                The Atelier
              </h2>
              <div className="space-y-4 text-[var(--deep-brown)]/70 leading-relaxed">
                <p>
                  Our studio is more than a workspace — it's a creative sanctuary filled with
                  natural light, the scent of fresh blooms, and the quiet hum of artistry.
                </p>
                <p>
                  Here, we carefully select each flower, considering its texture, color, and
                  the story it brings. We work with seasonal blooms, sourced from local growers
                  who share our commitment to quality and sustainability.
                </p>
                <p>
                  Every arrangement is hand-tied, hand-arranged, and thoughtfully packaged.
                  We take pride in the handcrafted nature of our work — no two bouquets are
                  ever exactly alike.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600"
                    alt="Workshop 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544928147-9e66f653d177?w=600"
                    alt="Workshop 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden -mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1628927122320-910a679f54b5?w=600"
                    alt="Workshop 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1683463170494-3cc8be265d79?w=600"
                    alt="Workshop 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-32 px-6 bg-[var(--ivory)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Leaf className="w-8 h-8 text-[var(--dusty-rose)] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-6">
              Sustainable Practices
            </h2>
            <p className="text-lg text-[var(--deep-brown)]/70 leading-relaxed mb-8">
              We believe beauty should never come at the expense of our planet. That's why we
              prioritize seasonal, locally-sourced flowers and eco-friendly packaging. Our
              commitment to sustainability means we work closely with growers who share our
              values, ensuring that every bloom is ethically sourced and handled with care.
            </p>
            <p className="text-[var(--deep-brown)]/60">
              Compostable wrapping · Reusable containers · Local sourcing · Zero waste studio
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
