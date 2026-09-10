import { useState } from "react";
import { LINKS } from "../data/data";
import { Menu, X } from "lucide-react";



export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-6 px-6 md:px-10">

      <div className="flex items-center gap-4">
        <img
          src="img/icon-light.svg"
          alt="Link Labz"
          className="w-8 h-8"
        />
        <h4 className="text-lg font-semibold">
          Link Labz
        </h4>
      </div>

      <div className="hidden md:flex items-center">
        {LINKS.map((item, index) => (
          <a
            key={index}
            className="px-2 link-animado inline-flex items-center gap-1"
            href={item.href}
          >
            {item.name}
            {item.icon && <item.icon />}
          </a>
        ))}
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        aria-label="Abrir menu"
      >
        {menuOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} />
        )}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--white-1)] shadow-lg md:hidden z-50">
          <div className="flex flex-col p-6 gap-4">
            {LINKS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 link-animado"
              >
                {item.name}
                {item.icon && <item.icon />}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};