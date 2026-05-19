import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@florisbybelerose.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: MapPin,
      label: "Atelier",
      value: "123 Bloom Street, Garden District"
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Tue-Sat: 10am-6pm, Sun: 11am-4pm"
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
              Let's Create Together
            </h1>
            <p className="text-lg text-[var(--deep-brown)]/70 max-w-2xl mx-auto leading-relaxed">
              Whether you're planning a wedding, celebration, or simply want to brighten
              someone's day — we'd love to bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-6 bg-[var(--ivory)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div {...fadeInUp} className="md:col-span-3">
              <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--deep-brown)] mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[var(--deep-brown)]/70 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--dusty-rose)]/30 transition-all"
                      placeholder="Emma"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--deep-brown)]/70 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--dusty-rose)]/30 transition-all"
                      placeholder="Laurent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--deep-brown)]/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--dusty-rose)]/30 transition-all"
                    placeholder="emma@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--deep-brown)]/70 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--dusty-rose)]/30 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--deep-brown)]/70 mb-2">
                    Occasion
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--dusty-rose)]/30 transition-all">
                    <option>Select an occasion</option>
                    <option>Wedding</option>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                    <option>Corporate Event</option>
                    <option>Just Because</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[var(--deep-brown)]/70 mb-2">
                    Tell us about your vision
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--dusty-rose)]/30 transition-all resize-none"
                    placeholder="Share any details about your event, preferred colors, style, or special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[var(--dusty-rose)] text-white rounded-sm hover:bg-[var(--accent)] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp} className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--deep-brown)] mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--soft-pink)] flex items-center justify-center text-[var(--dusty-rose)]">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-[var(--deep-brown)]/50 mb-1">{info.label}</p>
                        <p className="text-[var(--deep-brown)]">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--border)]">
                <h4 className="font-[family-name:var(--font-serif)] text-xl text-[var(--deep-brown)] mb-4">
                  Visit Our Atelier
                </h4>
                <p className="text-[var(--deep-brown)]/70 leading-relaxed mb-6">
                  We welcome studio visits by appointment. Come see our workspace, browse
                  fresh blooms, and discuss your floral needs in person.
                </p>
                <a
                  href="#"
                  className="inline-block text-[var(--dusty-rose)] hover:text-[var(--accent)] transition-colors"
                >
                  Book an Appointment →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-[var(--warm-white)]">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-sm border border-[var(--border)]">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--deep-brown)] mb-3">
                How far in advance should I order?
              </h3>
              <p className="text-[var(--deep-brown)]/70 leading-relaxed">
                For standard bouquets, we recommend 2-3 days notice. For weddings and large
                events, we suggest booking 3-6 months in advance to ensure availability and
                allow time for detailed planning.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-sm border border-[var(--border)]">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--deep-brown)] mb-3">
                Do you offer delivery?
              </h3>
              <p className="text-[var(--deep-brown)]/70 leading-relaxed">
                Yes! We offer same-day delivery within the Garden District and next-day
                delivery to surrounding areas. Wedding and event florals are personally
                delivered and set up by our team.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-sm border border-[var(--border)]">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--deep-brown)] mb-3">
                Can I request specific flowers?
              </h3>
              <p className="text-[var(--deep-brown)]/70 leading-relaxed">
                Absolutely. While we love working with seasonal blooms, we're happy to source
                specific flowers when possible. Share your preferences and we'll do our best
                to accommodate.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-sm border border-[var(--border)]">
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--deep-brown)] mb-3">
                What's your cancellation policy?
              </h3>
              <p className="text-[var(--deep-brown)]/70 leading-relaxed">
                Standard orders can be cancelled up to 24 hours before delivery for a full
                refund. Wedding and event contracts have specific cancellation terms outlined
                in the agreement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[var(--soft-pink)] to-[var(--champagne)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="aspect-[4/5] rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683463170494-3cc8be265d79?w=1080"
                alt="Studio atmosphere"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--deep-brown)] mb-6">
                We Can't Wait to
                <br />
                Hear From You
              </h2>
              <p className="text-lg text-[var(--deep-brown)]/70 leading-relaxed">
                Every inquiry is special to us. Whether you're planning the wedding of your
                dreams or simply want to send a thoughtful bouquet, we're here to create
                something beautiful together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
