import { isLeapYear } from "date-fns";
import { onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import db from "../../firebase/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Link from 'next/link'

import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import ImageComponent from "../../components/ImageComponent";
import Quote from "../../components/Quote";
import Synopsis from "../../components/Synopsis";
import MainHeader from "../../components/MainHeader";
import IconWrapper from "../../components/IconWrapper";
import Wrapper from "../../components/Wrapper";
import {motion} from 'framer-motion'

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
  const pageTitle = currentPage.title;
  const pageDay = `${currentPage.date.day} ${currentPage.date.month}`;
  const pagePhiloPic = pageImg[rng];
  const pagePhiloSrc = currentPage.philosopher;
  const pageFilosof = currentPage.philosopher;
  const pageQuote = currentPage.quote;
  const pageRef = currentPage.reference;
  const pageSynopsis = currentPage.synopsis;

  return (
    <Wrapper>
      <Header />
      <Link href="/" exact>
      <a>
        <div className='sticky top-0 py-3 px-2'>
<motion.div initial={{opacity:0, x:-40, y:0}} animate={{opacity:1, x:0,y:0}} transition={{delay:2}} className=" h-10 w-10 flex justify-center items-center">
<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg>
</motion.div>
</div>
</a></Link>
      <Main>
        <MainHeader title={pageTitle} date={pageDay} />
        <ImageComponent
          source={pagePhiloPic}
          alt={pagePhiloSrc}
          filosof={pageFilosof}
        />
        <Quote quote={pageQuote} refer={pageRef} />
        <Synopsis para={pageSynopsis} />
        <IconWrapper />
      </Main>
      <Footer />
    </Wrapper>
  );
}
