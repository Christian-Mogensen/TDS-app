import { AnimatePresence } from "framer-motion";
import Calendar from "../components/Calendar/Calendar";
import Header from "../components/EveryPageComp/Header";
import { useStateContext } from "../context/stateContext";
import LandingPage from "./landingpage";
import FormV2 from "../components/FormV2";
// import "dotenv/config";
export default function Home({ theme, root }) {
  const { toggled, toggledForm } = useStateContext();

  return (
    <>
      <AnimatePresence>
        {(!toggled || !toggledForm) && <LandingPage />}
      </AnimatePresence>
    </>
  );
}
