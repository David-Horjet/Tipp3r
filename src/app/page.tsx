import Footer from "@/components/layout/home/Footer";
import Header from "@/components/layout/home/Header";
import CTA from "@/components/ui/home/CTA";
import Features from "@/components/ui/home/Features";
import Hero from "@/components/ui/home/Hero";
import HowItWorks from "@/components/ui/home/HowItWorks";
import Testimonials from "@/components/ui/home/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

