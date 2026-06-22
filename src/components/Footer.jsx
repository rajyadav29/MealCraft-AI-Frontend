import 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
  id="contact"
  className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-900 ..."
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🍳</span>
              <span className="text-xl font-bold bg-linear-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                MealCraft AI
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
            Transform everyday ingredients into extraordinary meals with the power of AI. Generate personalized recipes, 
            reduce food waste, and discover delicious dishes tailored to your taste. </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-400 uppercase tracking-wide text-sm font-bold mb-6">
              CONTACT
            </h3>

           <ul className="space-y-4 text-slate-900 dark:text-slate-300">
              <a
                  href="mailto:support@mealcraftai.com"
                  className="transition-all duration-300 hover:text-teal-500 hover:translate-x-1 inline-block">
                  📧 support@mealcraftai.com
                </a>
             <a
                  href="tel:+919876512345"
                  className="transition-all duration-300 hover:text-teal-500 hover:translate-x-1 inline-block">
                  📞 +91 9876512345
              </a>
              <li className="transition-all duration-300 hover:text-teal-500 hover:translate-x-1 cursor-pointer">
                📍 Lucknow, Uttar Pradesh, India
              </li>
            
            </ul>
          </div>

          {/* Legal / Social */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-5 text-slate-900 dark:text-slate-200">

                <li className="transition-all duration-300 hover:text-teal-500 hover:translate-x-1 cursor-pointer">
                  API Reference
                </li>

                <li className="transition-all duration-300 hover:text-teal-500 hover:translate-x-1 cursor-pointer">
                  Privacy Policy
                </li>

                <li className="transition-all duration-300 hover:text-teal-500 hover:translate-x-1 cursor-pointer">
                  Terms of Service
              </li>

              </ul>
          </div>
        </div>


         
       
        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-slate-200/50 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; {currentYear} MealCraft AI. Built with premium React & Tailwind. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-400 dark:text-slate-500">
            <span>Designed for Health</span>
            <span>&bull;</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
