import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from "react-i18next";

import {
  HiMenu,
  HiX,
  HiMoon,
  HiSun,
  HiOutlineLogout,
  HiUserCircle,
  HiGlobeAlt,
  HiChevronDown
} from 'react-icons/hi';

import Button from './Button';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
  );
 const [language, setLanguage] = useState(
  localStorage.getItem("language") || "English"
);
const [languageOpen, setLanguageOpen] = useState(false);


  // Sync dark mode class with state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  // eslint-disable-next-line no-unused-vars
  const activeClassName = ({ isActive }) =>
    `text-sm font-semibold transition-all duration-200 ${
      isActive
        ? 'text-teal-600 dark:text-teal-400'
        : 'text-slate-650 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400'
    }`;

const navLinks = isAuthenticated
  ? [
      { to: '/dashboard', label: t("Dashboard") },
      { to: '/recipe-generator', label: ("Generator") },
      { to: '/saved-recipes', label: ("Saved Recipes") },
      { to: '/profile', label: ("Profile") },
    ]
  : [
      { href: '/#features', label: t("features") },
      { href: '/#how-it-works', label: t("howItWorks") },
      { href: '/#pricing', label: t("pricing") },
      { href: '/contact', label: t("contact") },
      
    ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2">
            <span className="text-2xl">🍳</span>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
              MealCraft AI 
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              isAuthenticated ? (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 transition-all duration-300 hover:bg-teal-500/10 hover:text-teal-500"
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 transition-all duration-300 hover:bg-teal-500/10 hover:text-teal-500"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Action Area (Theme & Login State) */}
          <div className="hidden md:flex items-center gap-4">

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 hover:border-teal-500/40 transition-all duration-300"
              >
                <HiGlobeAlt className="text-lg text-slate-500" />

                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {language}
                </span>

                <HiChevronDown className="text-sm text-slate-500" />
              </button>

              {languageOpen && (
          <div className="absolute right-0 mt-2 w-52 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">

            <button
                 onClick={() => {
                            i18n.changeLanguage("en");
                            localStorage.setItem("language", "English");
                            setLanguage("English");
                            setLanguageOpen(false);
                          }}
              className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              🇬🇧 English
            </button>

            <button
              onClick={() => {
                        i18n.changeLanguage("hi");
                        localStorage.setItem("language", "Hindi");
                        setLanguage("Hindi");
                        setLanguageOpen(false);
                      }}
              className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              🇮🇳 हिन्दी
            </button>

            <button
              onClick={() => {
                        i18n.changeLanguage("de");
                        localStorage.setItem("language", "German");
                        setLanguage("German");
                        setLanguageOpen(false);
                      }}
              className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              🇩🇪 Deutsch
            </button>

            <button
              onClick={() => {
                        i18n.changeLanguage("es");
                        localStorage.setItem("language", "Spanish");
                        setLanguage("Spanish");
                        setLanguageOpen(false);
                      }}
              className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              🇪🇸 Español
            </button>

            <button
              onClick={() => {
                        i18n.changeLanguage("zh");
                        localStorage.setItem("language", "Chinese");
                        setLanguage("Chinese");
                        setLanguageOpen(false);
                      }}
              className="w-full text-left px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              🇨🇳 中文
            </button>

          </div>
        )}
                    </div>
                    {/* Dark Mode toggle */}
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                      title="Toggle Dark Mode"
                    >
                      {darkMode ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
                    </button>

                    {isAuthenticated ? (
                      <div className="flex items-center gap-3">
                        <Link to="/profile" className="flex items-center gap-2 group">
                          {user?.avatar ? (
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-8 h-8 rounded-full border border-teal-500 group-hover:scale-105 transition-transform object-cover"
                            />
                          ) : (
                            <HiUserCircle className="text-3xl text-slate-400 group-hover:text-teal-600 transition-colors" />
                          )}
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-205 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {user?.name?.split(' ')[0]}
                          </span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium text-red-650 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all border border-transparent hover:border-red-100 dark:hover:border-red-900/30 cursor-pointer"
                          title="Logout"
                        >
                          <HiOutlineLogout className="text-lg" />
                          <span>Logout</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Link to="/login">
                          <Button variant="outline" size="sm">
                            {t("login")}
                          </Button>
                        </Link>
                        <Link to="/register">
                          <Button variant="primary" size="sm">
                           {t("getStarted")}
                          </Button>
                        </Link>
                      </div>
                    )}
          </div>

          {/* Mobile Right Bar (Theme + Hamburger) */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
            >
              {darkMode ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 cursor-pointer"
            >
              {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-xl text-base font-semibold ${
                  isActive
                    ? 'bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <div className="px-3 py-2 flex items-center gap-3">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full border border-teal-500 object-cover" />
                ) : (
                  <HiUserCircle className="text-3xl text-slate-400" />
                )}
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{user?.name}</div>
                  <div className="text-xs text-slate-550 dark:text-slate-400">{user?.email}</div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-2 px-3 py-2.5 rounded-xl text-base font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 cursor-pointer"
              >
                <HiOutlineLogout className="text-xl" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
