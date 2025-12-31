import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import { ToastProvider } from "./components/provider/toast-provider";
import Skills from "./components/skills/skills";

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-200 h-200 blob-cyan opacity-40 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-150 h-150 blob-purple opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      </div>
      <div className="flex flex-col">
        <ToastProvider>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact/>
        <Footer />
        </ToastProvider>
      </div>
    </div>
  );
}
