"use client"
// import Header from "@/components/organisms/Header/Header";
// import Footer from "@/components/organisms/Footer/Footer";
// import Skills from "@/components/organisms/Skills/Skills";
// import Testimonial from "@/components/organisms/Testimonial/Testimonial";
// import Experience from "@/components/organisms/Experience/Experience";
// import Work from "@/components/organisms/Work/Work";

import Navbar from "@/components/molecules/Navbar/Navbar";
import { Hero, Work, Skills, Experience, Footer } from "@/components/organisms";
import { useEffect, useState } from "react";
import '../assets/styles/App.scss';
import '../assets/styles/index.css';

export default function Page() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const cursorMovement = (e: any) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', cursorMovement);
    return () => {
      window.removeEventListener('mousemove', cursorMovement)
    }
  }, [])

  // const cursorVariants = {
  //   default: {
  //     x: cursorPosition.x - 8,
  //     y: cursorPosition.y - 8
  //   }
  // }


  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      {/* <div className="cursor"></div> */}

      {/* <Experience /> */}
      {/* <Footer /> */}
    </div>
  )
}