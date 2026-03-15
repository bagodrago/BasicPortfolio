import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeProvider from "@/contexts/ThemeProvider";

export default function Home() {

  return (
    <ThemeProvider>
        <Navbar />
        <Hero />
    </ThemeProvider>
  );
}
