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
    require("../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg"),
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

  console.log(sly);

  return (
    <Wrapper>
      <Header />
      <Main>
      <motion.div 
      initial={{opacity:0, y:-150}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.1,delay:0.3,type: "spring",
      stiffness: 30}}
      className="border-b border-gray-300 dark:border-gray-700 flex flex-col justify-end h-[23vh] dark:bg-gradient-to-t  dark:from-gray-900 dark:to-transparent">
        <h2 className="text-center font-bold font-secondary text-4xl mt-6 mb-2 ">
          Welcome stoic
        </h2>
        <p className="text-center pb-6 font-primary text-xl">Today is the</p>
      </motion.div>
        <div className="overflow-hidden bg-gray-600 dark:bg-black grid grid-cols-[repeat(3,1fr)] justify-center gap-3 py-2 ">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 0.3 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="h-[207px] w-[207px] rounded-lg bg-gray-400 bg-gradient-to-r from-white via-white dark:from-black dark:via-black to-transparent"
          >
            <div className="h-full font-primary   transition-all image-text flex flex-col text-gray-700 dark:text-gray-700">
              <h2 className=" text-[5rem] leading-none w-full text-center">
                {dayB}
              </h2>
              <p className=" text-[1.5rem]   w-full text-center ">{month}</p>
            </div>
          </motion.div>

          <Link href={`/book/${pageday}`}>
            <a>
              <motion.figure
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="grid-container border-white w-[207px] m-auto  dark:border-gray-700 rounded-lg overflow-hidden shadow-sm relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 3, zIndex: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  onHoverStart={{ scale: 2 }}
                  className="image-content-2 flex  "
                >
                  <Image
                    className="object-cover"
                    height={500}
                    width={500}
                    src={pagePhiloPic}
                    alt={`${rng} image`}
                  />
                </motion.div>
                <div className="color-bg  bg-gray-50 dark:bg-black dark:opacity-60 opacity-90"></div>
                <figcaption className="z-10 font-primary hover:text-gray-900 dark:hover:text-white transition-all image-text flex flex-col text-gray-400 dark:text-gray-400">
                  <p className=" text-[5rem] leading-none w-full text-center">
                    {day}
                  </p>
                  <p className=" text-[1.5rem]   w-full text-center ">
                    {month}
                  </p>
                </figcaption>
              </motion.figure>
            </a>
          </Link>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 0.3 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="h-[207px] w-[207px] rounded-lg bg-gray-400 bg-gradient-to-l from-white via-white dark:from-black dark:via-black to-transparent"
          >
            <div className="h-full font-primary   transition-all image-text flex flex-col text-gray-700 dark:text-gray-470">
              <h2 className=" text-[5rem] leading-none w-full text-center">
                {dayA}
              </h2>
              <p className=" text-[1.5rem]   w-full text-center ">{month}</p>
            </div>
          </motion.div>
        </div>
        <motion.div 
              initial={{opacity:0, y:'33vh'}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.1,delay:0.2, type: "spring",
              stiffness: 30}}
        className="z-20 mb-2 border-t border-gray-300 dark:border-gray-700 flex flex-col pt-3 h-[23vh] dark:bg-gradient-to-b dark:from-gray-900 dark:to-transparent">

        <p className="text-center font-secondary ">
          Click to see what todays topic is
        </p>
        </motion.div>
      </Main>
      <Footer />
    </Wrapper>
  );
}
