// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import {
//   FileText,
//   Search,
//   Sparkles,
//   BarChart3,
//   Mail,
//   Star,
//   LayoutDashboard,
//   Lock,
// } from "lucide-react";

// const steps = [
//   {
//     title: "Create Resume",
//     desc: "Build your resume with live preview",
//     icon: FileText,
//     gradient: "from-violet-500 to-fuchsia-500",
//     bg: "from-violet-500/5 to-fuchsia-500/5 dark:from-violet-900/10 dark:to-fuchsia-900/10",
//     border: "border-violet-200/60 dark:border-violet-800/40",
//     page: "resume",
//     pro: false,
//   },
//   {
//     title: "Analyze Job Description",
//     desc: "Paste JD and extract key keywords",
//     icon: Search,
//     gradient: "from-blue-500 to-cyan-500",
//     bg: "from-blue-500/5 to-cyan-500/5 dark:from-blue-900/10 dark:to-cyan-900/10",
//     border: "border-blue-200/60 dark:border-blue-800/40",
//     page: "jd-analysis",
//     pro: true,
//   },
//   {
//     title: "Improve Resume",
//     return (
//       <motion.div
//         className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-300 text-slate-200"
//     bg: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
//     border: "border-amber-200 dark:border-amber-700/50",
//     page: "improve-resume",
//         <Navbar onBack={() => setCurrentPage("home")} showBack />

//         <div className="px-4 sm:px-10 py-12">
//     title: "Check ATS Score",
//     desc: "See how well your resume matches",
//     icon: BarChart3,
//     gradient: "from-emerald-500 to-teal-500",
//     bg: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
//     border: "border-emerald-200 dark:border-emerald-700/50",
//             <span className="inline-block px-4 py-1.5 rounded-full bg-white/6 text-purple-300 text-sm font-medium mb-4">
//               Workspace
//             </span>
//             <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">
//               CareerForge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">Workspace</span>
//             </h1>
//             <p className="text-slate-300 text-lg max-w-xl mx-auto">
//               Build your career documents step by step with polished tools and AI assistance
//             </p>
//   },
//   {
//     title: "My Dashboard",
//     desc: "View and manage saved resumes",
//                 className={`cursor-pointer rounded-3xl p-6 sm:p-7 shadow-2xl transition-all duration-300 group relative overflow-hidden ${step.pro && !isPro ? 'opacity-70' : 'bg-gradient-to-br from-white/3 to-white/2'}`}
//     gradient: "from-indigo-500 to-violet-500",
//     bg: "from-indigo-500/5 to-violet-500/5 dark:from-indigo-900/10 dark:to-indigo-900/10",
//     border: "border-indigo-200/60 dark:border-indigo-800/40",
//     page: "dashboard",
//     pro: false,
//   },
//   {
//     title: "Upgrade to Pro",
//     desc: "Unlock templates & unlimited builds",
//     icon: Star,
//     gradient: "from-yellow-500 to-amber-500",
//     bg: "from-yellow-500/10 to-amber-500/10 dark:from-yellow-900/20 dark:to-amber-900/20",
//     border: "border-yellow-200 dark:border-yellow-800/60",
//     page: "pricing",
//     pro: false,
//   },
// ];
//                 <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/6 flex items-center justify-center text-xs font-bold text-slate-300">
// function Builder({ setCurrentPage, isPro }) {
//   const [selectedStep, setSelectedStep] = useState("");

//   const handleStepClick = (step) => {
//     if (step.pro && !isPro) {
//       toast.error(
//         `"${step.title}" is a Pro Feature. Redirecting to Pricing...`,
//         {
//           icon: "🔒",
//           duration: 3000,
//         },
//       );
//       // Delay redirection to let user read toast notice
//       setTimeout(() => {
//         setCurrentPage("pricing");
//       }, 1000);
//     } else {
//       if (step.page) {
//         setCurrentPage(step.page);
//       } else {
//         setSelectedStep(step.title);
//       }
//     }
//   };

//   return (
//                   className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-2xl mb-5 shadow-lg text-white`}
//       className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50/40 to-violet-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-all duration-300"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.4 }}
//     >
//       {/* Local Navbar rendering is removed because App.jsx renders it globally now */}

//       <div className="max-w-7xl mx-auto">
//         {/* Header Block Section */}
//         <motion.div
//                     <span className="inline-block px-2 py-1 rounded-full bg-amber-500/80 text-white text-xs font-semibold shadow-sm">
//                       PRO
//                     </span>
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
//                 <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
//           </span>
//           <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
//                 <p className="text-sm text-slate-300 leading-relaxed">
//             <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
//               Workspace
//             </span>
//           </h1>
//           <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
//             Supercharge your job application workflow step-by-step with AI
//             tools.
//           </p>
//         </motion.div>

//         {/* Dynamic Card Grids */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {steps.map((step, index) => {
//             const isLocked = step.pro && !isPro;

//             return (
//               <motion.div
//                 key={step.title}
//                 onClick={() => handleStepClick(step)}
//                 className={`group relative cursor-pointer overflow-hidden rounded-2xl border ${step.border} bg-gradient-to-br ${step.bg} p-6 shadow-lg transition-all duration-300 backdrop-blur-sm ${
//                   isLocked
//                     ? "hover:border-amber-500/40"
//                     : "hover:border-slate-700"
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 whileHover={{ y: -5 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Background Glow Effect on Hover */}
//                 <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all group-hover:scale-150" />

//                 {/* Step Counter Tag */}
//                 <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 text-xs font-bold text-slate-500 border border-slate-800/50">
//                   {index + 1}
//                 </div>

//                 {/* Main Feature Icon Wrap */}
//                 <motion.div
//                   className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${step.gradient} text-slate-950 mb-6 shadow-lg shadow-indigo-500/10`}
//                   whileHover={{ rotate: 5, scale: 1.05 }}
//                 >
//                   <step.icon className="w-6 h-6 text-slate-950" />
//                 </motion.div>

//                 {/* Exclusive Pro Tags Indicator */}
//                 {step.pro && (
//                   <div className="mb-3 flex items-center gap-1.5">
//                     <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider shadow-sm">
//                       <Lock className="w-3 h-3" /> Pro Feature
//                     </span>
//                   </div>
//                 )}

//                 {/* Title & Description Context */}
//                 <h3 className="text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-indigo-400 transition-colors duration-200">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-slate-400 leading-relaxed font-medium">
//                   {step.desc}
//                 </p>

//                 {/* Action Arrow Shortcut Indicator */}
//                 <div className="absolute bottom-5 right-5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
//                   <span className="text-xs font-bold">→</span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Coming Soon Drawer Element */}
//         {selectedStep && (
//           <motion.div
//             className="mt-10 max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h2 className="text-2xl font-bold mb-2 text-white">
//               {selectedStep}
//             </h2>
//             <p className="text-slate-300">
//               This feature is coming soon. Stay tuned! 🚀
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default Builder;

import React from "react";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Sparkles,
  FileSearch,
  Layers,
  ScrollText,
  ChevronRight,
  Terminal,
  Cpu,
  Workflow,
} from "lucide-react";

function Builder({ setCurrentPage, isPro }) {
  // Container animation variants for clean progressive loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const tools = [
    {
      title: "Build From Scratch",
      desc: "Assemble a clean corporate resume using our precise, structured template engine.",
      icon: <PlusCircle className="w-5 h-5 text-indigo-400" />,
      action: () => setCurrentPage("create-resume"),
      badge: "Essential",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    },
    {
      title: "AI Resume Improver",
      desc: "Deconstruct your current resume layout & inject high-impact metric keywords.",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      action: () => setCurrentPage("improve-resume"),
      badge: "AI Sync",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "ATS Score Checker",
      desc: "Compare your resume alongside target job descriptions to analyze matching scores.",
      icon: <FileSearch className="w-5 h-5 text-emerald-400" />,
      action: () => setCurrentPage("ats-score"),
      badge: "Scoring Engine",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      title: "JD Keyword Extractor",
      desc: "Parse job requirements to map required technical stack configurations.",
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      action: () => setCurrentPage("jd-analysis"),
      badge: "Data Map",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      title: "Cover Letter Generator",
      desc: "Synthesize personalized, persuasive introductory letters tailored directly to target roles.",
      icon: <ScrollText className="w-5 h-5 text-pink-400" />,
      action: () => setCurrentPage("cover-letter"),
      badge: "Synthesizer",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-68px)] bg-slate-950 text-slate-100 relative overflow-hidden px-4 sm:px-8 py-12 selection:bg-indigo-500/30">
      {/* Dynamic Background Ambient Shaders */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Core Header Console Panel */}
        <header className="bg-slate-900/20 border border-slate-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-xs font-bold text-indigo-400">
              <Terminal className="h-3.5 w-3.5" /> Pipeline Command Terminal
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-100 md:text-4xl">
              Career Forge Control Matrix
            </h1>
            <p className="text-sm text-slate-400 max-w-xl">
              Select an optimization node to design, improve, align, or generate
              critical engineering recruitment resources.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-950 border border-slate-900 rounded-2xl p-4 shrink-0">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-mono font-bold uppercase">
                System Cluster
              </p>
              <p className="text-xs font-bold text-slate-200">
                Nodes Connected & Balanced
              </p>
            </div>
          </div>
        </header>

        {/* Tools Dynamic Grid Layout */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {}
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={tool.action}
              whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.4)" }}
              className="group relative bg-slate-900/40 border border-slate-900 rounded-3xl p-6 cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Subtle background card hover shader */}
              <div className="absolute -right-10 -top-10 w-28 h-28 bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/10 transition-all duration-500 rounded-full pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-slate-950 border border-slate-800/80 shadow-inner flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    {tool.icon}
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-400 transition-colors duration-200">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>

              {/* Action Vector Link */}
              <div className="pt-4 border-t border-slate-900/60 mt-4 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-indigo-400 transition-colors duration-200">
                <span className="font-mono">INITIALIZE_NODE</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          ))}
        </motion.section>

        {}
        {/* Global Pipeline Map */}
        <section className="bg-slate-900/10 border border-slate-900 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Workflow className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                System Sequence Complete
              </h4>
              <p className="text-[11px] text-slate-500">
                Auto-inject tracking keywords directly into templates.
              </p>
            </div>
          </div>
          <div className="text-[10px] text-slate-600 font-mono">
            SECURE SHA256 ECOSYSTEM LOGS ACTIVE
          </div>
        </section>
      </div>
    </div>
  );
}

export default Builder;
