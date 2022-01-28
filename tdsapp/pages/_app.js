import "../styles/styles.css";
import "../styles/calendar.css";
import { useEffect, useState } from "react";
import { UserContextProvider } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  const [user] = useState(false);

  return (
    
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
