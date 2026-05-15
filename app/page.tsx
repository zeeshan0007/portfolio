import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="my-10" />
      <Projects />
      <hr className="my-10" />
      <Experience />
      <hr className="my-10" />
      <Contact />
      <hr className="mt-10" />
      <Footer />
    </>
  );
}
