import Main from "../components/EveryPageComp/Main";
import Wrapper from "../components/EveryPageComp/Wrapper";
import Header from "../components/EveryPageComp/Header";
import Footer from "../components/EveryPageComp/Footer";
import FormInput from "../components/FormComp/FormRelated/FormInput";

export default function Signin() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <FormInput pw="email" />
      </Main>
      <Footer />
    </Wrapper>
  );
}
