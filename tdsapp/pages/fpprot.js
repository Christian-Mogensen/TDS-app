import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { getDate, format, getDayOfYear, isLeapYear } from "date-fns";
import { motion } from "framer-motion";

export default function Home({ theme }) {
  const pageImg = [
    require("../assets/img/marcus-aurelius.jpg"),
    require("../assets/img/Screen-Shot-2020-03-02-at-1.05.47-PM.webp"),
    // require("../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg"),
  ];
  const rng = Math.floor(Math.random() * pageImg.length);
  const pagePhiloPic = pageImg[rng];
  const day = getDate(new Date());
  const month = format(new Date(), "MMMM");
  const gdy = getDayOfYear(new Date()) + 1;
  const dayB = day - 1;
  const dayA = day + 1;
  const sly = isLeapYear(new Date());

  // logic that figures out which page should be shown in case year is 366 days
  const pageday = gdy > 120 && sly == true ? gdy + 1 : gdy;

  return (
    <Wrapper>
      <Header />
      <aside className="h-12 dark:bg-gray-900 border-t dark:border-gray-700 flex items-center justify-between font-secondary capitalize border-b">
        <div className="mx-3 flex">
          <div className=" w-6 h-6 rounded-full flex justify-center items-center border-2 border-current overflow-hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 top-1 relative"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>{" "}
          guest
        </div>
        <button className="mx-3 w-24 bg-gray-200 text-current dark:bg-gray-900 border border-gray-50  rounded text-white">
          login
        </button>
      </aside>
      <Main>
        <h1 className="text-3xl capitalize mx-3 py-3 font-secondary">
          welcome stoic
        </h1>
        <p className="font-secondary mx-3 text-xl border-t border-current inline pt-1">
          Today is the
        </p>
        <div className="overflow-hidden mx-3 justify-center gap-3 py-2">
          <Link href={`/book/${pageday}`}>
            <a>
              <motion.figure
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="grid-container border-white w-full m-auto  dark:border-gray-700 h-64 rounded-lg overflow-hidden shadow-sm shadow-current relative"
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
                  <p className="text-[7rem] mx-3 leading-none">{day}</p>
                  <p className="text-2xl m-3 leading-none">{month}</p>
                  <div className="border-t dark:border-current mx-3 flex justify-end py-3 font-secondary items-center gap-3 text-sm">
                    view more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
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
                </figcaption>
              </motion.figure>
            </a>
          </Link>
        </div>
      </Main>

      <Footer />
    </Wrapper>
  );
}
