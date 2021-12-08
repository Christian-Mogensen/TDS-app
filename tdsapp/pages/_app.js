import '../styles/styles.css'


function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement
    let theme;
    if (localStorage) {
    theme = localStorage.getItem("theme")
    root.classList.add(localStorage.theme);
    }
    }
  return <Component {...pageProps} />
}

export default MyApp
