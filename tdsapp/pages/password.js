import Main from "../components/Main"
import Wrapper from "../components/Wrapper"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FormInput from "../components/FormInput"



export default function Password({pw}) {
    return (
        <Wrapper>
            <Header />
            <Main>
            <FormInput attr={pw} />
            </Main>
            <Footer />
        </Wrapper>
    )


}