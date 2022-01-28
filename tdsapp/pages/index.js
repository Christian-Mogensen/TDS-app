import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect } from "react";
import { getDate, format, getDayOfYear, isLeapYear } from "date-fns";
import { motion } from "framer-motion";
import LoginBar from "../components/LoginBar";
import { ThemeProvider } from "../context/themeToggle";

export default function Home({ theme, root }) {
  const pageImg = [
    require("../assets/img/marcus-aurelius.jpg"),
    require("../assets/img/Screen-Shot-2020-03-02-at-1.05.47-PM.webp"),
    require("../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg"),
    require("../assets/img/think1.webp"),
    require("../assets/img/think2.webp"),
    require("../assets/img/think3.webp"),
    require("../assets/img/think4.webp"),
  ];
  const rng = Math.floor(Math.random() * pageImg.length);
  const pagePhiloPic = pageImg[rng];
  const day = getDate(new Date());
  const month = format(new Date(), "MMMM");
  const gdy = getDayOfYear(new Date());
  const dayB = day - 1;
  const dayA = day + 1;
  const sly = isLeapYear(new Date());

  // logic that figures out which page should be shown in case year is 366 days
  const pageday = gdy > 120 && sly ? gdy + 1 : gdy;

  

  return (
    <ThemeProvider>

    <Wrapper>
      <Header />
      <Main>
        <h1 className="py-3 mx-3 text-5xl capitalize font-secondary">
          <span className=""> welcome</span> stoic
        </h1>

        <div className="justify-center gap-3 py-2 mx-3 overflow-hidden">
          <Link href={`/book/${pageday}`}>
            <a>
              <motion.figure
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="relative w-full h-64 m-auto overflow-hidden border-white rounded shadow-sm grid-container dark:border-gray-700 shadow-current"
                >
                <motion.div
                  initial={{ opacity: 0, scale: 3, zIndex: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="flex image-content-2"
                  >
                  <Image
                    className="object-cover img-obj"
                    height={500}
                    width={500}
                    src={pagePhiloPic}
                    alt={`${rng} image`}
                    />
                </motion.div>

                <figcaption className="z-10 flex flex-col justify-end w-full leading-none text-right text-white transition-all font-primary image-text bg-gradient-to-t h-4/5 from-gray-700 to-transparent">
                  <div className="absolute top-0 left-0 py-2 ">
                    <p className="flex items-end w-full mx-3 text-xl text-left text-white font-secondary">
                      Today is the
                    </p>
                  </div>
                  <div className="flex flex-col justify-center h-full">
                    <p className="mx-3 text-5xl leading-none ">{day}</p>
                    <p className="m-3 text-2xl leading-none ">{month}</p>
                  </div>
                  <div className="flex justify-end w-full">
                    <div className="flex items-center justify-end w-1/3 gap-3 py-1 mx-3 text-sm border-t dark:border-current font-secondary">
                      view more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M9 5l7 7-7 7"
                          />
                      </svg>
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </a>
          </Link>
        </div>
      </Main>
      <LoginBar />
      <Footer />
    </Wrapper>
                          </ThemeProvider>
  );
}
