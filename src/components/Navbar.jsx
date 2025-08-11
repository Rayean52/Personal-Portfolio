import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Skills', id: 'skills' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <img className='w-16' src="https://i.ibb.co/dsZdXhC0/letter-r-12499446.png" alt="" />
        <Link to="/" className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Abdullah Rayean
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="btn btn-ghost hover:btn-primary transition-all duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle mr-2 hover:btn-primary transition-all duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
        </button>

        <div className="dropdown dropdown-end lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:btn-primary transition-all duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;