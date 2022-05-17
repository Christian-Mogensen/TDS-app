import "../styles/styles.css";
import "../styles/calendar.css";
import { useEffect, useState } from "react";
import { UserContextProvider } from "../context/userContext";
import { ThemeProvider } from "../context/ThemeToggle";
import { StateContextProvider, useStateContext } from "../context/stateContext";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { AnimatePresence } from "framer-motion";
import Calendar from "../components/Calendar/Calendar";
function MyApp({ Component, pageProps }) {
  const [user] = useState(false);

  return (
    <ThemeProvider>
      <StateContextProvider>
        <UserContextProvider>
          <Wrapper>
            {/* <Header /> */}
            <Component {...pageProps} />
            <Footer />
          </Wrapper>
        </UserContextProvider>
      </StateContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
