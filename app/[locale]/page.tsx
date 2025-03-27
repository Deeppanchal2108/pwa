import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import AboutSection from '@/components/AboutSection'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection' 
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer' 
import { DraggableCommand } from '@/components/command/Command'
export default function CoffeeShopLanding() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
<DraggableCommand />
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Newsletter />
      <Footer />
    </div>
  )
}