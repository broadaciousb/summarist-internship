import Image from "next/image";
import Navbar from "../components/Navbar";
import Landing from "@/components/Landing";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Statistics from "@/components/Statistics";
import Numbers from "@/components/Numbers";
import Footer from "@/components/Footer";
import StoreProvider from "@/redux/StoreProvider";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

export default function Home() {
  

  return (
    <>
      <StoreProvider>
        <Navbar />
        <Landing />
        <Features />
        <Statistics />
        <Reviews />
        <Numbers />
        <Footer />
      </StoreProvider>
    </>
  );
}
