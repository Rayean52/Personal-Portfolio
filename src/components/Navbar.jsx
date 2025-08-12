import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaHome, FaCode, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
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
    document.getElementById('my-drawer').checked = false; // close drawer after click
  };

  const navItems = [
    { name: 'Home', id: 'hero', icon: <FaHome /> },
    { name: 'Skills', id: 'skills', icon: <FaCode /> },
    { name: 'About', id: 'about', icon: <FaUser /> },
    { name: 'Projects', id: 'projects', icon: <FaProjectDiagram /> },
    { name: 'Contact', id: 'contact', icon: <FaEnvelope /> },
  ];

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Navbar */}
      <div className="drawer-content">
        <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-lg">
          <div className="navbar-start">
            <img className="w-16" src="https://i.ibb.co/dsZdXhC0/letter-r-12499446.png" alt="Logo" />
            <Link
              to="/"
              className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Abdullah Rayean
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="btn btn-ghost hover:btn-primary transition-all duration-300 flex items-center gap-2"
                  >
                    {item.icon}
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle + Drawer Button */}
          <div className="navbar-end">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle hover:btn-primary transition-all duration-300 mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
            </button>
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost lg:hidden"
              aria-label="Open drawer"
            >
              <FaBars className="w-5 h-5" />
            </label>
          </div>
        </nav>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side z-[100]">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="bg-base-200 min-h-full w-72 flex flex-col">
          {/* Drawer Title */}
          <div className="p-4 border-b border-base-300 flex items-center gap-3">
            <img className="w-10" src="https://i.ibb.co/dsZdXhC0/letter-r-12499446.png" alt="Logo" />
            <span className="text-lg font-bold">Navigation</span>
          </div>

          {/* Drawer Menu */}
          <ul className="menu text-base-content p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="hover:btn-primary transition-all duration-300 flex items-center gap-3"
                >
                  {item.icon}
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
