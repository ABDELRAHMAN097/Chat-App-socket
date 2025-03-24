import { Contact } from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
