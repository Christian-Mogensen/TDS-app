// components
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import LoginBar from "../components/LoginBar";
import Footer from "../components/Footer";
// hooks
import Auth from "../components/auth";
import Online from "../components/Online";
import { useUserContext } from "../context/userContext";

export default function signuptutorial() {
    const {loading, error, user} = useUserContext()
  return (
      <Wrapper>
        <Header />
        <Main>
            {error && <p>{error}</p>}
            {loading ? <h2>loading...</h2> : <>{user ? <Online />:<Auth />}</>}
        </Main>
        <LoginBar state={user ? "Online":"Guest"} />
        <Footer />
      </Wrapper>
  );
}
