import Image from "next/image";
import Navbar from "../components/Navbar";
import LoginModal from "@/components/LoginModal";
import Landing from "@/components/Landing";
import Features from "@/components/Features";
import StoreProvider from "@/redux/StoreProvider";

export default function Home() {
  return (
    <>
      <StoreProvider>
        <Navbar />
        <Landing />
        <Features />
        <LoginModal />
      </StoreProvider>
    </>
  );
}
