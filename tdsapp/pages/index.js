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
    <Wrapper>
      <Header />

      <Main>
        <h1 className="text-5xl capitalize mx-3 py-3 font-secondary">
          <span className=""> welcome</span> stoic
        </h1>

        <div className="overflow-hidden mx-3 justify-center gap-3 py-2">
          <Link href={`/book/${pageday}`}>
            <a>
              <motion.figure
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="grid-container border-white w-full m-auto  dark:border-gray-700 h-64 rounded overflow-hidden shadow-sm shadow-current relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 3, zIndex: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="image-content-2 flex"
                >
                  <Image
                    className="object-cover img-obj"
                    height={500}
                    width={500}
                    src={pagePhiloPic}
                    alt={`${rng} image`}
                  />
                </motion.div>

                <figcaption className="z-10 text-white font-primary leading-none transition-all image-text w-full text-right bg-gradient-to-t h-4/5 from-gray-700 to-transparent flex flex-col justify-end">
                  <div className=" absolute left-0 top-0 py-2">
                    <p className="font-secondary mx-3 text-xl  text-left w-full flex items-end text-white">
                      Today is the
                    </p>
                  </div>
                  <div className="h-full flex justify-center flex-col">
                    <p className="text-5xl mx-3 leading-none ">{day}</p>
                    <p className="text-2xl m-3 leading-none ">{month}</p>
                  </div>
                  <div className="flex justify-end w-full">
                    <div className="border-t dark:border-current mx-3 flex justify-end py-1 font-secondary items-center gap-3 text-sm w-1/3">
                      view more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
  );
}
