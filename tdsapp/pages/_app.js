import "../styles/styles.css";
import "../styles/calendar.css";
import { useEffect, useState } from "react";
import { UserContextProvider } from "../context/userContext";

function MyApp({ Component, pageProps }) {
  const [user] = useState(false);
  let colorTheme
  useEffect(()=>{
    colorTheme = localStorage.theme
    console.log(colorTheme);
  })
  return (
    
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
