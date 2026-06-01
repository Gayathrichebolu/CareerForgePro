import { motion } from "framer-motion";
import { Mail, Lock, Shield, ArrowRight, X } from "lucide-react";
import { useState } from "react";

function Login({ setCurrentPage, setIsAuthenticated }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fake API delay (simulate real auth)
    setTimeout(() => {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setCurrentPage("dashboard");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-md"
      >

        {/* Close */}
        <button
          onClick={() => setCurrentPage("home")}
          className="absolute -top-3 right-0 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-violet-600 hover:shadow-lg transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus-within:border-violet-400 transition">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus-within:border-violet-400 transition">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>

            {/* Button */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </motion.button>
          </form>

          {/* Footer links */}
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-500">
              New here?{" "}
              <button
                onClick={() => setCurrentPage("signup")}
                className="text-violet-600 font-semibold hover:underline"
              >
                Create account
              </button>
            </p>
          </div>

          {/* Security note */}
          <div className="mt-6 pt-4 border-t flex items-center justify-center gap-2 text-xs text-gray-400">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Protected with secure encryption</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;