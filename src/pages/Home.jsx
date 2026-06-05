import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Activities from "../components/Home/Activities";
import Stats from "../components/Home/Stats";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Activities />
      <Stats />
      <Footer />
    </>
  );
}