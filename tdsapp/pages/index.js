import { AnimatePresence } from "framer-motion";
import Calendar from "../components/Calendar/Calendar";
import Header from "../components/EveryPageComp/Header";
import { useStateContext } from "../context/stateContext";
import LandingPage from "./landingpage";
import FormV2 from "../components/FormV2";

export default function Home({ theme, root }) {
  const { toggled, toggledForm } = useStateContext();

  return (
    <>
      <Header />

      <AnimatePresence>{toggled && <Calendar />}</AnimatePresence>
      <AnimatePresence>{!toggledForm && <FormV2 />}</AnimatePresence>
      <AnimatePresence>
        {(!toggled || !toggledForm) && <LandingPage />}
      </AnimatePresence>
    </>
  );
}
