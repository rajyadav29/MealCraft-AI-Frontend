import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { 
  HiOutlineSparkles, 
  HiOutlineArrowNarrowRight, 
  HiOutlineTrash, 
  HiOutlineClock, 
  HiOutlineGlobe, 
  HiOutlineHeart, 
  HiOutlinePlus, 
  HiOutlineMinus
} from 'react-icons/hi';
import Button from '../components/Button';

const LandingPage = () => {
  
  const navigate = useNavigate();
  const [heroPrompt, setHeroPrompt] = useState('');

  // FAQ state control
  const [openFaq, setOpenFaq] = useState(null);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!heroPrompt.trim()) return;
    
    // Redirect to generator with the input pre-filled in route state
    navigate('/recipe-generator', { state: { initialPrompt: heroPrompt } });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // eslint-disable-next-line no-unused-vars
  const features = [
    {
      icon: HiOutlineTrash,
      title: "Leftover Recipes",
      description: "Got random stuff in the fridge? The AI turns it into an actual meal. No more staring at ingredients wondering what to make.",
      color: "bg-teal-500/10 text-teal-600 dark:text-teal-400"
    },
    {
      icon: HiOutlineHeart,
      title: "Diet-Specific Recipes",
      description: "Keto, vegan, gluten-free, high-protein. Set your dietary preferences once and every recipe respects them automatically.",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: HiOutlineClock,
      title: "Quick Weeknight Dinners",
      description: "30 minutes or less. Just tell the AI how much time you have and it keeps things quick.",
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
    },
    {
      icon: HiOutlineGlobe,
      title: "Cuisine Explorer",
      description: "Italian, Thai, Mexican, Indian, Japanese. Pick any cuisine and get a recipe that tastes like the real thing.",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    }
  ];

  const faqs = [
    {
      question: "Is MealCraft AI free?",
      answer: "Yes, our frontend provides a fully responsive playground environment where you can generate, refresh, and save recipes locally to your device completely free."
    },
    {
      question: "Can I filter recipes by food allergies?",
      answer: "Absolutely! You can choose Vegetarian, Vegan, Keto, Gluten-Free, or High Protein configurations from the filters list to keep recipes aligned with your allergies or targets."
    },
    {
      question: "Are recipes saved automatically?",
      answer: "Yes, once you click the 'Save' badge on a generated recipe card, it registers instantly in your Local Storage repository so you can browse, filter, or delete it later on the Saved Recipes tab."
    },
    {
      question: "How accurate are the cooking instructions?",
      answer: "Extremely accurate. The AI engine constructs detailed, step-by-step procedures specifying exact measurements and macronutrient specifications (calories, protein, carbohydrates, fats)."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        {/* Neon blurred backgrounds */}
        <div className="absolute top-[-10%] left-[5%] w-[35vw] h-[35vw] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[5%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Heading and Interactive Input Form */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>✨</span> Free AI Recipe generator
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Generate Delicious <br />
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Recipes with AI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Create personalized recipes instantly using ingredients you already have.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
             <span className="px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium">
              🤖 AI Powered
             </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
              🍲 1000+ Recipes
               </span>

                  <span className="px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium">
                 🥗 Diet Friendly
                   </span>
            </div>

            {/* Interactive Input Form */}
            <form onSubmit={handleHeroSubmit} className="max-w-xl pt-4">
              <div className="flex flex-col sm:flex-row gap-3 bg-white dark:bg-[#0F172A] p-2 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-lg focus-within:border-teal-500 transition-all">
                <input
                  type="text"
                  value={heroPrompt}
                  onChange={(e) => setHeroPrompt(e.target.value)}
                  placeholder="chicken tacos, spinach salad, or list ingredients..."
                  className="flex-grow px-4 py-3 text-sm bg-transparent border-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none"
                />
                <Button
                  type="submit"
                  variant="primary"
                  icon={HiOutlineSparkles}
                  className="py-3 px-6 text-sm shrink-0 font-bold"
                >
                  Show me recipes
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column: Glassmorphic Food Presentation Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="zero-card p-3 rounded-[2.5rem] relative group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 hover:shadow-2xl hover:shadow-teal-500/10 max-w-lg w-full">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Clean glass food plate image */}
              <img 
                src="/glass_food_plate.png" 
                alt="Delicious gourmet food on glass platter" 
                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] border border-white/10 dark:border-slate-800/60"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. VALUE PROPS / FEATURES GRID */}

     <section
       id="features"
        className="py-16 bg-white dark:bg-[#1E293B] border-t border-b border-slate-100/80 dark:border-slate-800 transition-colors"
      >
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Beyond Leftovers
         </h2>
           <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
        Use MealCraft AI for way more than just clearing out the fridge.
          </p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;

              return (
                <div
                  key={idx}
                  className="zero-card p-6 rounded-3xl flex gap-5 items-start"
                >
                  <div className={`p-3.5 rounded-2xl ${feat.color} shrink-0`}>
                    <Icon className="text-2xl" />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {feat.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
                  );
                  })}
                </div>

                  </div>
            </section>
            <section id="how-it-works" className="py-12">
      <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-extrabold text-center mb-6">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="zero-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1
            hover:border-teal-500/40">
              <h3 className="font-bold text-xl mb-3">
                1. Add Ingredients
              </h3>

              <p>
                Enter ingredients available in your kitchen.
              </p>
            </div>

            <div className="zero-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1
            hover:border-teal-500/40">
              <h3 className="font-bold text-xl mb-3">
                2. Generate Recipe
              </h3>

              <p>
                MealCraft AI creates a custom recipe instantly.
              </p>
            </div>

            <div className="zero-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1
            hover:border-teal-500/40">
              <h3 className="font-bold text-xl mb-3">
                3. Save & Cook
              </h3>

              <p>
                Save favorite recipes and start cooking.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABULAR SECTION */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            How MealCraft AI Compares
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Here is what you get with us vs. other standard AI recipe tools.
          </p>
        </div>
        <div className="zero-card rounded-3xl overflow-hidden p-2">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="py-4 px-6 font-bold text-slate-800 dark:text-slate-200">Feature</th>
                <th className="py-4 px-6 font-bold text-teal-600">MealCraft AI</th>
                <th className="py-4 px-6 font-bold text-slate-400 dark:text-slate-600">Other AI Generators</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 dark:border-slate-800/50">
                <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">Automatic Fallbacks</td>
                <td className="py-4 px-6 text-teal-500 font-bold text-lg">✓</td>
                <td className="py-4 px-6 text-slate-600 dark:text-slate-400 text-sm">Rarely</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800/50">
                <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">Local Favorites Storage</td>
                <td className="py-4 px-6 text-teal-500 font-bold text-lg">✓</td>
                <td className="py-4 px-6 text-slate-500 dark:text-slate-400 text-sm">No</td>
              </tr>
              <tr className="border-b border-slate-100 dark:border-slate-800/50">
                <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">Macro Nutritional Stats</td>
                <td className="py-4 px-6 text-teal-500 font-bold text-lg">✓</td>
                <td className="py-4 px-6 text-slate-500 dark:text-slate-400 text-sm">Sometimes</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-slate-700 dark:text-slate-300 font-medium">Dark-First Responsive Frame</td>
                <td className="py-4 px-6 text-teal-500 font-bold text-lg">✓</td>
                <td className="py-4 px-6 text-slate-500 dark:text-slate-400 text-sm">Web only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="pricing" className="py-12">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-extrabold text-center mb-6">
     Pricing
    </h2>

     <div className="grid md:grid-cols-3 gap-8">

      <div className="zero-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
       hover:border-teal-500">
        <h3 className="text-2xl font-bold mb-4">
          Free Plan
        </h3>

        <p className="text-5xl font-bold mb-6">
          ₹0
        </p>

        <ul className="space-y-3">
          ₹0/month
          <p></p>
        
          <li>✓ Unlimited Recipe Generation</li>
         <li> ✓ Save Recipes</li>
          <li>✓ Nutrition Information</li>
          <li>✓ Basic AI Recommendations</li>
          
        </ul>
      </div>

      <div className="zero-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
       hover:border-teal-500">
        <h3 className="text-2xl font-bold mb-4">
          Pro ⭐ Most Popular
        </h3>

        <p className="text-5xl font-bold mb-6">
          ₹199
        </p>

        <ul className="space-y-3">
          ₹199/month
          <p></p>
          <li>✓ Everything in Starter</li>
          <li>✓ Weekly Meal Plans</li>
          <li>✓ Grocery List Generator</li>
          <li>✓ Advanced AI Suggestions</li>
          <li> ✓ Priority Support</li>
         
        </ul>
      </div>

      <div className="zero-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
       hover:border-teal-500">
        <h3 className="text-2xl font-bold mb-4">
          Enterprise
        </h3>

        <p className="text-5xl font-bold mb-6">
         ₹499
        </p>

        <ul className="space-y-3">
          ₹499/month
          <p></p>

         <li>✓ Everything in Pro</li> 
          <li>✓ Family Meal Planning</li>
          <li>✓ API Access</li>
          <li>✓ Unlimited Saved Recipes</li>
          <li>✓ Premium Support</li>
        </ul>
      </div>

     
    </div>
  </div>
</section>

      {/* 4. FAQ ACCORDION SECTION */}
      <section className="py-12 bg-white dark:bg-[#1E293B] border-t border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Answers to common inquiries about the generator.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="zero-card rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    type="button"
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 dark:text-slate-200 focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-teal-600 dark:text-teal-400">
                      {isOpen ? <HiOutlineMinus className="text-lg" /> : <HiOutlinePlus className="text-lg" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 border-t border-slate-100 dark:border-slate-800/40 mt-1">
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
       
      

      {/* 5. CTA PANEL */}
      <section className="py-10 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-teal-600 to-teal-800 text-white p-8 md:p-16 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl text-left space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Ready to generate delicious meals?
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Create a free account to unlock profile updates, persistent saved favorites, and instant custom AI recipe generation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/register">
                <Button variant="secondary" className="hover:scale-105 transition-transform" icon={HiOutlineArrowNarrowRight}>
                  Create Free Account
                </Button>
              </Link>
              <Link to="/recipe-generator">
                <button className="px-6 py-3 font-semibold text-white bg-teal-700/50 hover:bg-teal-700/80 rounded-xl border border-white/20 transition-all hover:scale-105 cursor-pointer">
                  Try Generator Instantly
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
