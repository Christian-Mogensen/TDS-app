import { AnimatePresence } from "framer-motion";
import { useStateContext } from "../../context/stateContext";
import Calendar from "../Calendar/Calendar";
import Footer from "./Footer";
import Header from "./Header";
import FormV2 from "../FormV2";
const Wrapper = ({ children }) => {
  const { toggled, toggledForm } = useStateContext();
  return (
    <div className="min-h-screen overflow-hidden mainstyling bg-gradient-to-r from-gray-100 to-beige-50 dark:from-gray-900 dark:to-transparent">
      <Header />
      <AnimatePresence>{toggled && <Calendar />}</AnimatePresence>
      <AnimatePresence>{toggledForm && <FormV2 />}</AnimatePresence>
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
