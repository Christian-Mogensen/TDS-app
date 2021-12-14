import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from 'next/link';
import { getDate, getMonth, format, getDayOfYear } from "date-fns";

export default function hero() {
  const pageImg = [
    require("../assets/img/marcus-aurelius.jpg"),
    require("../assets/img/Screen-Shot-2020-03-02-at-1.05.47-PM.webp"),
    require("../assets/img/220px-Epicteti_Enchiridion_Latinis_versibus_adumbratum_(Oxford_1715)_frontispiece.jpg"),
  ];
  const randomnumbergenerator = Math.floor(
    Math.random() * (pageImg.length)
  );
  const pagePhiloPic = pageImg[randomnumbergenerator];
  const day = getDate(new Date());
  const month = format(new Date(), "MMMM");
  const gdy = getDayOfYear(new Date())+1;
  console.log(day);
  return (
    <Wrapper>
      <Header />
      <Main>
          <Link href={`/book/${gdy}`}><a>
        <figure className="grid-container border-white  dark:bg-gray-900 border w-1/2 m-auto  dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
         

            <div className="image-content-2 flex  ">
            <Image
              className=" object-cover"
              height={500}
              width={500}
              src={pagePhiloPic}
              alt={`${randomnumbergenerator} image`}
            />
          </div>
          <div className="color-bg  bg-gray-50 dark:bg-black dark:opacity-70 opacity-90"></div>
          <figcaption className="font-primary hover:bg-gray-200 hover:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white transition-all image-text flex flex-col text-gray-700 dark:text-gray-400">
              <p className=" text-[5rem] leading-none w-full text-center">{day}</p>
              <p className=" text-[1.5rem]   w-full text-center ">{month}</p>
            </figcaption>
        </figure>
        </a></Link>
      </Main>
      <Footer />
    </Wrapper>
  );
}
