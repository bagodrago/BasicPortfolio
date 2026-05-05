import ThemeProvider from "@/src/contexts/theme_context/ThemeProvider";

import Navbar from "@/src/components/layout/navbar/Navbar";
import Hero from "@/src/components/layout/hero/Hero";
import About from "@/src/components/layout/about/About";
import Projects from "@/src/components/layout/portfolio/Projects";
import Contact from "@/src/components/layout/contact/Contact";

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
