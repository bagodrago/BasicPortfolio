import ThemeProvider from "@/contexts/theme_context/ThemeProvider";

import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/layout/hero/Hero";
import About from "@/components/layout/about/About";
import Projects from "@/components/layout/portfolio/Projects";
import Contact from "@/components/layout/contact/Contact";

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
