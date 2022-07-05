import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/EveryPageComp/Footer";
import Header from "../components/EveryPageComp/Header";
import Wrapper from "../components/EveryPageComp/Wrapper";
import { StateContextProvider, useStateContext } from "../context/stateContext";
import { ThemeProvider } from "../context/ThemeToggle";
import { UserContextProvider } from "../context/userContext";
import "../styles/calendar.css";
import "../styles/styles.css";
// import "dotenv/config";
function MyApp({ Component, pageProps }) {
  const [user] = useState(false);
  return (
    <ThemeProvider>
      <StateContextProvider>
        <UserContextProvider>
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </UserContextProvider>
      </StateContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
