// REACT
import { useEffect } from "react";
// REDUX
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { startLoading, stopLoading } from "@/redux/LoadingSlice";
// COMPONENTS
import Navbar from "../components/Navbar";
import Landing from "@/components/Landing";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Statistics from "@/components/Statistics";
import Numbers from "@/components/Numbers";
import Footer from "@/components/Footer";
import LoadScreen from "@/components/LoadScreen";

export default function Home() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.loading);
  

  useEffect(() => {
    dispatch(stopLoading());
  }, [dispatch]);

  return (
    <>
      {loading && <LoadScreen />}
      <Navbar />
      <Landing />
      <Features />
      <Statistics />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
