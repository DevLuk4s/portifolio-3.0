import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Newsletter />
      <Footer />
    </div>
  );
}
