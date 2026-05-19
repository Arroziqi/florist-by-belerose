import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-[var(--ivory)] via-[var(--warm-white)] to-[var(--soft-pink)]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-[family-name:var(--font-serif)] text-9xl text-[var(--dusty-rose)] mb-4">
            404
          </h1>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--deep-brown)] mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-[var(--deep-brown)]/70 mb-12 leading-relaxed">
            It seems this page has wilted away. Let's get you back to our beautiful blooms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--dusty-rose)] text-white rounded-sm hover:bg-[var(--accent)] transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[var(--border)] text-[var(--deep-brown)] rounded-sm hover:bg-[var(--warm-white)] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
