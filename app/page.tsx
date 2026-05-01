import ThemeProvider from "@/contexts/ThemeProvider";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// TODO: Implement transitions for all components
// TODO: Add fonts
export default function Home() {

  return (
    <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </ThemeProvider>
  );
}
