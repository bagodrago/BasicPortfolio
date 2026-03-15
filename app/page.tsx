import ThemeProvider from "@/contexts/ThemeProvider";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {

  return (
    <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
    </ThemeProvider>
  );
}
