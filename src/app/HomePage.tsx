import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Results } from "./components/Results";
import { RecentExperience } from "./components/RecentExperience";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { FooterCTA } from "./components/FooterCTA";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Results />
      <RecentExperience />
      <Projects />
      <Testimonials />
      <FooterCTA />
      <Footer />
    </div>
  );
}
