import { AnimatePresence } from "framer-motion";
import Calendar from "../components/Calendar/Calendar";
import Header from "../components/EveryPageComp/Header";
import { useStateContext } from "../context/stateContext";
import LandingPage from "./landingpage";

export default function Home({ theme, root }) {
  const { toggled } = useStateContext();
  return (
    <>
      <Header />

      <AnimatePresence>{toggled && <Calendar />}</AnimatePresence>
      <AnimatePresence>{!toggled && <LandingPage />}</AnimatePresence>
    </>
  );
}
