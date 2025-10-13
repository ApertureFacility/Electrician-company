import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О компании" },
  { to: "/equipment", label: "Услуги" },
  { to: "/solutions", label: "Готовые решения" },
  { to: "/project", label: "Проекты" },
  { to: "/contacts", label: "Контакты" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-4 sm:px-8 lg:px-[250px] flex items-center justify-between relative">
      <div className="flex items-center">
      <Link to="/">
        <img
          src="/src/assets/headerLogo.png"
          alt="РСЭМ Логотип"
          className="h-10"
        /></Link>
      </div>

      <nav className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="hover:text-blue-400">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex flex-col text-sm text-right">
        <span>Телефон: +3 231 123 312</span>
        <span>пн–пт 9:00–19:00</span>
      </div>

      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#201D1D] text-white flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col text-sm text-center pt-4 border-t border-gray-700 w-4/5">
            <span>Телефон: +3 231 123 312</span>
            <span>пн–пт 9:00–19:00</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;