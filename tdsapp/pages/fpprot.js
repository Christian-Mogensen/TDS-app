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
    <>
      <aside className="flex items-center justify-between h-12 capitalize border-t border-b dark:bg-gray-900 dark:border-gray-700 font-secondary">
        <div className="flex mx-3">
          <div className="flex items-center justify-center w-6 h-6 mr-2 overflow-hidden border-2 border-current rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-6 h-6 top-1"
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
        <button className="w-24 mx-3 text-current text-white bg-gray-200 border rounded dark:bg-gray-900 border-gray-50">
          login
        </button>
      </aside>
      <Main>
        <h1 className="py-3 mx-3 text-3xl capitalize font-secondary">
          welcome stoic
        </h1>
        <p className="inline pt-1 mx-3 text-xl border-t border-current font-secondary">
          Today is the
        </p>
        <div className="justify-center gap-3 py-2 mx-3 overflow-hidden">
          <Link href={`/book/${pageday}`}>
            <a>
              <motion.figure
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="relative w-full h-64 m-auto overflow-hidden border-white rounded-lg shadow-sm grid-container dark:border-gray-700 shadow-current"
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
                  <p className="text-[7rem] mx-3 leading-none">{day}</p>
                  <p className="m-3 text-2xl leading-none">{month}</p>
                  <div className="flex items-center justify-end gap-3 py-3 mx-3 text-sm border-t dark:border-current font-secondary">
                    view more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
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
    </>
  );
}
