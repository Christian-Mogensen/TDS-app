import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { getDate, format, getDayOfYear } from "date-fns";
import { motion } from "framer-motion";


export default function Home({theme}) {
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
  return (
    <Wrapper>
      <Header />
      <Main>


        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute h-[207px] w-[207px] rounded-lg -left-32 bg-gray-400"
        >
          <div className="h-full font-primary   transition-all image-text flex flex-col text-gray-700 dark:text-gray-700">
            <h2 className=" text-[5rem] leading-none w-full text-center">
              {dayB}
            </h2>
            <p className=" text-[1.5rem]   w-full text-center ">{month}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          className="absolute h-[207px] w-[207px] rounded-lg -right-32 bg-gray-400"
        >
          <div className="h-full font-primary   transition-all image-text flex flex-col text-gray-700 dark:text-gray-470">
            <h2 className=" text-[5rem] leading-none w-full text-center">
              {dayA}
            </h2>
            <p className=" text-[1.5rem]   w-full text-center ">{month}</p>
          </div>
        </motion.div>
        <Link href={`/book/${gdy}`}>
          <a>
            <motion.figure
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="grid-container border-white w-1/2 m-auto  dark:border-gray-700 rounded-lg overflow-hidden shadow-sm relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 3,  zIndex: 1 }}
                animate={{ opacity: 1, scale: 1,  }}
                transition={{ duration: 1.5, delay: 1 }}
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
              <figcaption className="z-10 font-primary hover:text-gray-700 dark:hover:text-white transition-all image-text flex flex-col text-gray-400 dark:text-gray-400">
                <p className=" text-[5rem] leading-none w-full text-center">
                  {day}
                </p>
                <p className=" text-[1.5rem]   w-full text-center ">{month}</p>
              </figcaption>
            </motion.figure>
          </a>
        </Link>

      </Main>
      <Footer />
    </Wrapper>
  );
}
