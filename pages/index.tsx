import Image from "next/image";
import Navbar from "../components/Navbar";
import LoginModal from "@/components/LoginModal";
import Landing from "@/components/Landing";
import Features from "@/components/Features";


export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <LoginModal />
    </>
  );
}
