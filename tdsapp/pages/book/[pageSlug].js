import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Calendar from "../../components/Calendar/Calendar";
import Header from "../../components/EveryPageComp/Header";
import Main from "../../components/EveryPageComp/Main";
import ImageComponent from "../../components/PageElement/ImageComponent";
import MainHeader from "../../components/PageElement/MainHeader";
import Quote from "../../components/PageElement/Quote";
import Synopsis from "../../components/PageElement/Synopsis";
import { useStateContext } from "../../context/stateContext";
import db from "../../firebase/firebase";
import FormV2 from "../../components/FormV2";
export const getStaticProps = async ({ params }) => {
  const currentPage = doc(db, `book/${params?.pageSlug}`);
  const page = await (await getDoc(currentPage)).data();
  return {
    props: {
      currentPage: page,
    },
  };
};
export const getStaticPaths = async () => {
  const querySnapshot = await getDocs(collection(db, "book"));
  const pages = [];
  querySnapshot.forEach((page) => pages.push(page.id));
  const paths = pages.map((page) => ({
    params: { pageSlug: page },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default function page({ currentPage }) {
  const pageImg = [
    require("../../assets/img/marcus-aurelius.jpg"),
    require("../../assets/img/Screen-Shot-2020-03-02-at-1.05.47-PM.webp"),
    require("../../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg"),
  ];
  const rng = Math.floor(Math.random() * (pageImg.length - 1));
  const pageDate = `${currentPage.date.day} ${currentPage.date.month}`;
  const pageTitle = currentPage.title;
  const pagePhiloPic = pageImg[rng];
  const pagePhiloSrc = currentPage.philosopher;
  const pageFilosof = currentPage.philosopher;
  const pageQuote = currentPage.quote;
  const pageRef = currentPage.reference;
  const pageSynopsis = currentPage.synopsis;

  const { toggled } = useStateContext();
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`The daily Stoic, ${pageFilosof}, ${pageQuote[0]}...`}
        />
        <title>{pageTitle}</title>
      </Head>
      {/* <Header /> */}
      {/* <AnimatePresence>{toggled && <Calendar />}</AnimatePresence>
      <AnimatePresence>{toggled && <FormV2 />}</AnimatePresence> */}
      <AnimatePresence>
        {!toggled && (
          <Main>
            <MainHeader title={pageTitle} date={pageDate} />
            <ImageComponent
              source={pagePhiloPic}
              alt={pagePhiloSrc}
              filosof={pageFilosof}
            />
            <Quote quote={pageQuote} refer={pageRef} />
            <Synopsis para={pageSynopsis} />
          </Main>
        )}
      </AnimatePresence>
    </>
  );
}
