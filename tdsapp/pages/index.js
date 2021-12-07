import Header from "../components/Header";
import Main from "../components/Main";
import { useState } from "react";
import Footer from "../components/Footer";
import Image from "next/image";

// import philoPic from "../assets/img/Screen-Shot-2020-03-02-at-1.05.47-PM.webp";
// const philoSrc = "Epictetus";

export default function Home() {
  const [value, onChange] = useState(new Date());
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
          require("../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg")
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
  const randomnumbergenerator = Math.floor(Math.random()*(pageInfo.page.img.url.length -1))
  console.log(randomnumbergenerator);
  const pageTitle = pageInfo.page.title;
  const pageDay = `${pageInfo.page.date.day} ${pageInfo.page.date.month}`;
  const pagePhiloPic = pageInfo.page.img.url[randomnumbergenerator];
  const pagePhiloSrc = pageInfo.page.img.src;
  const pageFilosof = pageInfo.page.filosof;
  const pageQuote = pageInfo.page.quote;
  const pageRef = pageInfo.page.reference;
  const pageSynopsis = pageInfo.page.synopsis;

  return (
    <div className="dark">
      <div className="max-w-[375px] min-h-screen flex flex-col justify-between w-full bg-gray-100 px-2 text-gray-700 dark:bg-black dark:bg-[var(--gradient-bg-right)] dark:text-white">
        <Header />
        <Main>
          <header className="flex flex-col-reverse text-center gap-3 pb-10 pt-5 border-b dark:border-gray-700">
            <h2 className="text-xl">{pageTitle}</h2>
            <h3 className="text-5xl text-left leading">{pageDay}</h3>
          </header>
          <figure className="relative">
            <Image
              className="img-styling"
              src={pagePhiloPic}
              alt={`${pagePhiloSrc} image`}
            />
            <figcaption className="absolute left-5 bottom-5 z-10 imgText">
              {pageFilosof}
            </figcaption>
          </figure>
          <h4 className="special-quote dark:bg-gray-900 dark:bg-[var(--gradient-bg-left)] p-5 text-lg rounded-2xl">
            {pageQuote.map((paragraf, index) => (
              <p className="italic text-xl" key={index}>
                {paragraf.para}
              </p>
            ))}
          </h4>
          <h5 className="text-right my-3">{pageRef}</h5>
          <div className="leading-loose">
            {pageSynopsis.map((paragraf, index) => (
              <p
                className="first-of-type:first-letter:text-4xl first-of-type:first-letter:font-bold first-of-type:first-letter:float-left first-of-type:first-letter:mr-2"
                key={index}
              >
                {paragraf.para}
              </p>
            ))}
          </div>
        </Main>
        <Footer />
      </div>
    </div>
  );
}
