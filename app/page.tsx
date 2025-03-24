import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoffeeShopLanding() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-amber-900/90 text-amber-50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-amber-600"></div>
            <span className="text-xl font-bold">Brew Haven</span>
          </div>

          {/* Mobile menu button */}
          <button className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href="#home" className="hover:text-amber-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-amber-300">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Coffee shop ambiance"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Where Every Sip Tells a <span className="text-amber-400">Story</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-amber-50/90 md:text-xl">
            Artisanal coffee, cozy atmosphere, and unforgettable moments. Experience the perfect blend at Brew Haven.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="rounded-full bg-amber-600 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-700"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Signature Brews</h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              Carefully selected beans, expertly roasted and brewed to perfection. Discover your new favorite.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Coffee Card 1 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Espresso"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Classic Espresso</h3>
                  <span className="text-lg font-medium text-amber-700">$3.50</span>
                </div>
                <p className="mb-4 text-stone-600">
                  Rich and intense, our signature espresso is the perfect pick-me-up any time of day.
                </p>
                <button className="w-full rounded-full border-2 border-amber-700 py-2 font-medium text-amber-700 transition-colors hover:bg-amber-700 hover:text-white">
                  Order Now
                </button>
              </div>
            </div>

            {/* Coffee Card 2 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cappuccino"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Creamy Cappuccino</h3>
                  <span className="text-lg font-medium text-amber-700">$4.25</span>
                </div>
                <p className="mb-4 text-stone-600">
                  The perfect balance of espresso, steamed milk, and velvety foam for a luxurious experience.
                </p>
                <button className="w-full rounded-full border-2 border-amber-700 py-2 font-medium text-amber-700 transition-colors hover:bg-amber-700 hover:text-white">
                  Order Now
                </button>
              </div>
            </div>

            {/* Coffee Card 3 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cold Brew"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Smooth Cold Brew</h3>
                  <span className="text-lg font-medium text-amber-700">$4.75</span>
                </div>
                <p className="mb-4 text-stone-600">
                  Steeped for 24 hours, our cold brew offers a smooth, low-acidity coffee experience.
                </p>
                <button className="w-full rounded-full border-2 border-amber-700 py-2 font-medium text-amber-700 transition-colors hover:bg-amber-700 hover:text-white">
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded-full bg-amber-800 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-900"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-amber-900 py-20 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="mb-4 text-amber-100/90">
                Founded in 2010, Brew Haven began as a small cart in the local farmers market. Our passion for
                exceptional coffee and community connection quickly earned us a loyal following.
              </p>
              <p className="mb-6 text-amber-100/90">
                Today, we source our beans directly from sustainable farms around the world, roast them in small
                batches, and serve them with care and expertise. Every cup represents our commitment to quality and our
                love for the craft.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-lg bg-amber-800 p-4 text-center">
                  <p className="text-3xl font-bold text-amber-300">12+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
                <div className="rounded-lg bg-amber-800 p-4 text-center">
                  <p className="text-3xl font-bold text-amber-300">15</p>
                  <p className="text-sm">Coffee Varieties</p>
                </div>
                <div className="rounded-lg bg-amber-800 p-4 text-center">
                  <p className="text-3xl font-bold text-amber-300">5</p>
                  <p className="text-sm">Locations</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl md:h-auto">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Coffee shop interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              Dont just take our word for it. Heres what coffee lovers have to say about their Brew Haven experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-amber-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
           
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-200"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-stone-500">Regular Customer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-amber-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-200"></div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-stone-500">Freelancer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-amber-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-200"></div>
                <div>
                  <p className="font-medium">Emily Rodriguez</p>
                  <p className="text-sm text-stone-500">Coffee Blogger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="bg-stone-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Visit Us</h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              Wed love to see you! Stop by for a cup, a chat, or just to enjoy the atmosphere.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-amber-700" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-stone-600">123 Coffee Street, Brewville, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-amber-700" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-stone-600">Monday - Friday: 7am - 8pm</p>
                    <p className="text-stone-600">Saturday - Sunday: 8am - 9pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-amber-700" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-stone-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-amber-700" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-stone-600">hello@brewhaven.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 font-medium">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="rounded-full bg-amber-100 p-2 text-amber-800 transition-colors hover:bg-amber-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-amber-100 p-2 text-amber-800 transition-colors hover:bg-amber-200"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-full bg-amber-100 p-2 text-amber-800 transition-colors hover:bg-amber-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-xl md:h-auto">
              {/* This would be a map in a real implementation */}
              <div className="absolute inset-0 bg-amber-200 flex items-center justify-center">
                <p className="text-amber-800 text-lg font-medium">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-amber-800 py-16 text-amber-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Stay Connected</h2>
            <p className="mb-8 text-amber-100/90">
              Subscribe to our newsletter for updates on new coffee arrivals, special promotions, and upcoming events.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full bg-amber-700 px-6 py-3 text-amber-50 placeholder:text-amber-200/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="rounded-full bg-amber-500 px-8 py-3 font-medium text-amber-900 transition-colors hover:bg-amber-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 py-10 text-amber-200">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-600"></div>
                <span className="text-lg font-bold text-amber-50">Brew Haven</span>
              </div>
              <p className="text-sm text-amber-300/80">Crafting exceptional coffee experiences since 2010.</p>
            </div>

            <div>
              <h4 className="mb-4 font-medium text-amber-50">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-amber-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-amber-300">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-medium text-amber-50">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-300">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-medium text-amber-50">Contact</h4>
              <address className="not-italic">
                <p className="mb-2 text-sm">123 Coffee Street</p>
                <p className="mb-2 text-sm">Brewville, CA 90210</p>
                <p className="mb-2 text-sm">hello@brewhaven.com</p>
                <p className="text-sm">(555) 123-4567</p>
              </address>
            </div>
          </div>

          <div className="mt-10 border-t border-amber-800 pt-6 text-center text-sm text-amber-300/70">
            <p>&copy; {new Date().getFullYear()} Brew Haven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

