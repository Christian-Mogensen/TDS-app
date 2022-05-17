import { useState } from "react";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import { StateContextProvider } from "../context/stateContext";
import { ThemeProvider } from "../context/ThemeToggle";
import { UserContextProvider } from "../context/userContext";
import "../styles/calendar.css";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  const [user] = useState(false);

  return (
    <ThemeProvider>
      <StateContextProvider>
        <UserContextProvider>
          <Wrapper>
            <Component {...pageProps} />
            <Footer />
          </Wrapper>
        </UserContextProvider>
      </StateContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
