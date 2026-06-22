import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { recipeService } from '../services/recipeService';
import { HiOutlineSparkles, HiOutlineBookmark, HiOutlineClock, HiOutlineChevronRight } from 'react-icons/hi';
import Loader from '../components/Loader';

const DashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ saved: 0, generated: 24 });
  const [loading, setLoading] = useState(true);
  const [recentSaved, setRecentSaved] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Load saved recipes to calculate exact statistics
        const result = await recipeService.getRecipeHistory();
        const savedList = result.recipes || [];
        setRecentSaved(savedList.slice(0, 3));
        
        // Calculate dynamic stats
        setStats({
          saved: savedList.length,
          generated: user?.generatedCount || 24
        });

        // Set up recent activities
        const mockActivities = [
          { id: 1, action: "Saved Recipe", detail: savedList[0]?.title || "Vibrant Paneer Tikka Masala", time: "2 hours ago" },
          { id: 2, action: "Generated Recipe", detail: "Custom Keto Italian Lunch", time: "1 day ago" },
          { id: 3, action: "Updated Profile", detail: "Changed bio details", time: "3 days ago" },
        ];
        setActivities(mockActivities);
      } catch (err) {
        console.error('Error fetching dashboard info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  // Determine time-of-day greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  if (loading) {
    return (
      <div className="min-h-[75vh] bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
        <Loader message="Assembling your kitchen dashboard..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
        
        {/* 1. WELCOME BANNER CARD */}
        <div className="relative rounded-[2rem] bg-gradient-to-br from-teal-600 to-teal-800 text-white p-8 overflow-hidden shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight">
              {getGreeting()}, {user?.name || 'Chef'}! 👩‍🍳
            </h2>
            <p className="text-white/80 text-base max-w-xl">
              Ready to create something amazing today?  MealCraft AI is armed with ingredients, cuisines, and diets to fit your current mood.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
            <span className="text-3xl">🥦</span>
            <div className="text-left">
              <p className="text-xs text-white/70 uppercase font-bold tracking-wider">Kitchen Status</p>
              <p className="text-sm font-semibold text-white">Pantry Stocked</p>
            </div>
          </div>
        </div>

        {/* 2. STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="zero-card p-6 rounded-[2rem] flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 flex items-center justify-center text-2xl shadow-sm shrink-0">
              <HiOutlineBookmark />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Saved Favorites</p>
              <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-1">{stats.saved} recipes</h3>
            </div>
          </div>
          <div className="zero-card p-6 rounded-[2rem] flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/20 text-amber-500 dark:text-amber-400 flex items-center justify-center text-2xl shadow-sm shrink-0">
              <HiOutlineSparkles />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">AI Generated</p>
              <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white mt-1">{stats.generated} times</h3>
            </div>
          </div>
        </div>

        {/* 3. SHORCUTS / QUICK ACTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Quick Shortcuts */}
          <div className="zero-card p-6 rounded-[2rem] space-y-4 lg:col-span-1">
            <h4 className="text-lg font-bold text-slate-850 dark:text-white">
              Quick Shortcuts
            </h4>
            <div className="space-y-3">
              <Link
                to="/recipe-generator"
                className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-teal-50 dark:hover:bg-teal-950/20 border border-slate-100 dark:border-slate-800 hover:border-teal-100 dark:hover:border-teal-950/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">⚡</span>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Generate Recipe</p>
                    <p className="text-xs text-slate-400">Launch AI cook assistant</p>
                  </div>
                </div>
                <HiOutlineChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/saved-recipes"
                className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-teal-50 dark:hover:bg-teal-950/20 border border-slate-100 dark:border-slate-800 hover:border-teal-100 dark:hover:border-teal-950/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">📂</span>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Saved Recipes</p>
                    <p className="text-xs text-slate-400">Browse saved cooking history</p>
                  </div>
                </div>
                <HiOutlineChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Recent Saved Recipes */}
          <div className="zero-card p-6 rounded-[2rem] space-y-4 lg:col-span-1">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-slate-850 dark:text-white">
                Favorite Recipes
              </h4>
              <Link to="/saved-recipes" className="text-xs font-semibold text-teal-650 hover:underline">
                View All
              </Link>
            </div>
            
            <div className="space-y-3">
              {recentSaved.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-sm">
                  No saved recipes yet. Run the generator to save some!
                </div>
              ) : (
                recentSaved.map((recipe) => (
                  <Link
                    key={recipe.id}
                    to="/saved-recipes"
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-950 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all"
                  >
                    <span className="text-2xl bg-teal-50 dark:bg-teal-950/30 p-2 rounded-xl">🥗</span>
                    <div className="text-left flex-grow">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{recipe.title}</p>
                      <p className="text-xs text-slate-400">{recipe.cuisine} &bull; {recipe.mealType}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="zero-card p-6 rounded-[2rem] space-y-4 lg:col-span-1">
            <h4 className="text-lg font-bold text-slate-850 dark:text-white">
              Recent Activity
            </h4>
            <div className="space-y-4">
              {activities.map((act) => (
                <div key={act.id} className="flex gap-3 text-sm">
                  <div className="relative flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500 shrink-0"></div>
                    <div className="w-0.5 bg-slate-200 dark:bg-slate-800 flex-grow mt-1.5"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {act.action}: <span className="font-normal text-slate-600 dark:text-slate-400">{act.detail}</span>
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <HiOutlineClock />
                      <span>{act.time}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
