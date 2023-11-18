import About from "@/components/About.component";
import Contact from "@/components/Contact.compomemnt";
import Footer from "@/components/Footer.component";
import HeroSection from "@/components/HeroSection.component";
import Project from "@/components/Project.component";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
