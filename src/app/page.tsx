"use client"
import Experience from "@/components/organisms/Experience/Experience";
import Footer from "@/components/organisms/Footer/Footer";
import Hero from "@/components/organisms/Hero/Hero";

export default function Page() {
  return (
    <div className="app">
      <Hero />
      <Experience />
      <Footer />
    </div>
  )
}
