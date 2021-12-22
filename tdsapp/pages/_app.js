import "../styles/styles.css";
import "../styles/calendar.css";

import { useState } from "react";
import { UserContextProvider } from "../context/userContext";

function MyApp({ Component, pageProps, theme }) {
  const [user] = useState(false);
  // return <Component {...pageProps} />
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
