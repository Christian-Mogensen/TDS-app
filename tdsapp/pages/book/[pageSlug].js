import { format } from "date-fns";
import Head from "next/head";
import { useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IconWrapper from "../../components/IconWrapper";
import ImageComponent from "../../components/ImageComponent";
import Main from "../../components/Main";
import MainHeader from "../../components/MainHeader";
import Quote from "../../components/Quote";
import SubSlugNav from "../../components/SubSlugNav";
import Synopsis from "../../components/Synopsis";
import Wrapper from "../../components/Wrapper";
import db from "../../firebase/firebase";
import { useStateContext } from "../../context/stateContext";
import { AnimatePresence } from "framer-motion";
import Calendar from "../../components/Calendar";

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
  const [pageData, setPageData] = useState(currentPage);

  const pageDate = `${pageData.date.day} ${pageData.date.month}`;
  const pageTitle = pageData.title;
  const pagePhiloPic = pageImg[rng];
  const pagePhiloSrc = pageData.philosopher;
  const pageFilosof = pageData.philosopher;
  const pageQuote = pageData.quote;
  const pageRef = pageData.reference;
  const pageSynopsis = pageData.synopsis;

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
      {/* <SubSlugNav /> */}
      <Header />
      <AnimatePresence>{toggled && <Calendar />}</AnimatePresence>
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
