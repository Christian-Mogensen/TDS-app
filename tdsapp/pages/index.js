import Header from "../components/Header";
import Main from "../components/Main";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ImageComponent from "../components/ImageComponent";
import Quote from "../components/Quote";
import Synopsis from "../components/Synopsis";
import MainHeader from "../components/MainHeader";
import IconWrapper from "../components/IconWrapper";

export default function Home({theme}) {
  const pageInfo = {
    page: {
      date: {
        day: 2,
        month: "July",
      },
      title: "ON DUTY AND CIRCUMSTANCE",
      img: {
        url: [
          require("../assets/img/marcus-aurelius.jpg"),
          require("../assets/img/Screen-Shot-2020-03-02-at-1.05.47-PM.webp"),
          require("../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg"),
        ],
        src: "Epictetus",
      },
      filosof: "Marcus Aurelius",
      quote: [
        {
          para: "Never shirk the proper dispatch of your duty, no matter if you are freezing or hot, groggy or well-rested, vilified or praised,",
        },
        {
          para: "not even if dying or pressed by other demands. Even dying is one of the important assignments of life and, in this as in all else,",
        },
        {
          para: "make the most of your resources to do well the duty at hand.",
        },
      ],
      reference: "—MARCUS AURELIUS, MEDITATIONS, 6.2",
      synopsis: [
        {
          para: "Will this make me rich? Will people be impressed? How hard do I need to try? How long will this take? What’s in it for me? Should I do this other thing instead? These are the questions we ask ourselves amid the day’s opportunities and obligations.",
        },
        {
          para: "Marcus Aurelius had many responsibilities, as those who hold executive power do. He judged cases, heard appeals, sent troops into battle, appointed administrators, approved budgets. A lot rode on his choices and actions. Should he do this or that? What about this concern or that concern? When would he get to enjoy himself? The simple reminder above was a way to cut through the Gordian knot of incentives, complaints, fears, and competing interests.",
        },
        {
          para: "It’s what we must use to decide what to do in each and every phase of life. Morality can be complicated—but the right thing is usually clear and intuitive enough to feel in our gut. Our duty is rarely easy, but it is important. It’s also usually the harder choice. But we must do it.",
        },
      ],
    },
  };
  const randomnumbergenerator = Math.floor(
    Math.random() * (pageInfo.page.img.url.length - 1)
  );

  const pageTitle = pageInfo.page.title;
  const pageDay = `${pageInfo.page.date.day} ${pageInfo.page.date.month}`;
  const pagePhiloPic = pageInfo.page.img.url[randomnumbergenerator];
  const pagePhiloSrc = pageInfo.page.img.src;
  const pageFilosof = pageInfo.page.filosof;
  const pageQuote = pageInfo.page.quote;
  const pageRef = pageInfo.page.reference;
  const pageSynopsis = pageInfo.page.synopsis;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      let theme;
      if (localStorage) {
        theme = localStorage.getItem("theme");
        root.classList.add(localStorage.theme);
      }
    }
  }, [theme]);
  return (
    <div className="">
      <div className="mainstyling  dark:bg-[var(--gradient-bg-right)]">
        <Header />
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
      </div>
    </div>
  );
}
