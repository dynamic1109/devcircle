import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import CoreActivities from "@/components/core-activities"
import Programs from "@/components/programs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreActivities />
        <Programs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
