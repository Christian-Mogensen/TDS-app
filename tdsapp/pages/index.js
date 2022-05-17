import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import { getDate, format, getDayOfYear, isLeapYear } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import LoginBar from "../components/LoginBar";
import { ThemeProvider } from "../context/ThemeToggle";
import Calendar from "../components/Calendar";
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
