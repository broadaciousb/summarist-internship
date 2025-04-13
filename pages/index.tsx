import Image from "next/image";
import Navbar from "../components/Navbar";
import LoginModal from "@/components/LoginModal";
import Landing from "@/components/Landing";


export default function Home() {
  return (
    <>
      <Navbar />
      <LoginModal />
      <Landing />
    </>
  );
}
