import "../styles/styles.css";
import "../styles/calendar.css";
import { useEffect, useState } from "react";
import { UserContextProvider } from "../context/userContext";
import { ThemeProvider } from "../context/ThemeToggle";

function MyApp({ Component, pageProps }) {
  const [user] = useState(false);

  return (
    <ThemeProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
