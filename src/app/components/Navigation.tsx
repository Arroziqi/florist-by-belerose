import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "About", path: "/about" },
    { name: "My Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--ivory)]/80 backdrop-blur-md border-b border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
              <span className="font-[family-name:var(--font-serif)] text-2xl tracking-tight text-[var(--deep-brown)]">
                Florist
              </span>
              <span className="font-[family-name:var(--font-serif)] text-xs tracking-[0.3em] text-[var(--dusty-rose)] -mt-1">
                BY BELEROSE
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <span className="text-sm tracking-wide text-[var(--deep-brown)] transition-colors duration-300 group-hover:text-[var(--dusty-rose)]">
                    {item.name}
                  </span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[var(--dusty-rose)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[var(--deep-brown)] hover:text-[var(--dusty-rose)] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[var(--ivory)] border-b border-[var(--border)] md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <span className={`text-lg font-[family-name:var(--font-serif)] transition-colors ${
                    location.pathname === item.path
                      ? "text-[var(--dusty-rose)]"
                      : "text-[var(--deep-brown)] hover:text-[var(--dusty-rose)]"
                  }`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
