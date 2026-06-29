import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import CustomCursor from '@/components/CustomCursor';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
