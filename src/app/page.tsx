"use client"

import Navbar from "@/components/molecules/Navbar/Navbar";
import { Hero, Work, Experience, Footer } from "@/components/organisms";

export default function Page() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Experience />
      <Work />
      <Footer />
    </div>
  )
}