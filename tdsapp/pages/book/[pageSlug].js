import { isLeapYear, format } from "date-fns";
import { onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../firebase/firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import Link from "next/link";

import ProgressBar from "react-scroll-progress-bar";

import Header from "../../components/Header";
import SubSlugNav from "../../components/SubSlugNav";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import ImageComponent from "../../components/ImageComponent";
import Quote from "../../components/Quote";
import Synopsis from "../../components/Synopsis";
import MainHeader from "../../components/MainHeader";
import IconWrapper from "../../components/IconWrapper";
import Wrapper from "../../components/Wrapper";
import { motion } from "framer-motion";

import BookmarkIcon from "../../components/BookmarkIcon";

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
  const monthDate = format(new Date(), "MMMM");
  const rng = Math.floor(Math.random() * (pageImg.length - 1));
  const pageTitle = currentPage.title;
  const pageDay = `${currentPage.date.day} ${monthDate}`;
  const pagePhiloPic = pageImg[rng];
  const pagePhiloSrc = currentPage.philosopher;
  const pageFilosof = currentPage.philosopher;
  const pageQuote = currentPage.quote;
  const pageRef = currentPage.reference;
  const pageSynopsis = currentPage.synopsis;



  return (
    <Wrapper>
      <Header />
      <SubSlugNav />

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
