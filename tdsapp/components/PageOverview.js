
import Link from "next/link";
import {
  lightFormat,
  getDate,
  getMonth,
  format,
  getYear,
  getDayOfYear,
  isLeapYear,
  eachDayOfInterval,
  startOfYear,
  endOfYear,
  startOfMonth,
  endOfMonth,
  eachMonthOfInterval,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { motion, useReducedMotion } from "framer-motion";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import CheckMark from "./CheckMark";
import PageDocument from "./PageDocument";

export default function PageOverview({isOpen}) {
  const [isRead, setIsRead] = useState(false);
  const [activeDate, setActiveDate] = useState(false);
  const day = getDate(new Date());
  const month = format(new Date(), "MMMM");

  const dayResult = eachDayOfInterval({
    start: startOfYear(new Date()),
    end: endOfYear(new Date()),
  });
  let d;
  const dayArr = [];
  const dayOfYearArr = dayResult.map(
    (day) => ((d = format(day, "d")), dayArr.push(d))
  );

  // const periodDate = [];
  // dayResult.map((day) => ((d = format(day, "d")), dayArr.push(d)));
  // periodDate.push({ month: month, day: dayArr });

  //   const date = periodDate[0].day;
     let today = getDayOfYear(new Date());
  //   const parsedDate = periodDate[0].day.map(d => parseInt(d));
  // 
  useEffect(() => {
      if(today){
      document.querySelector(`#btn${today}`).classList.add(
        'bg-green-500',
        'dark:bg-green-500'
        )
     }
  }, [day])
  const shouldReduceMotion = useReducedMotion()
  const closedY = shouldReduceMotion ? 0 : "-100%"
  return (

    <>
        <motion.div
        initial={{y:'-120%'}} 
        animate={{
          y: isOpen ? 0 : closedY}}
          transition={{duration:0.2}}
        className={`bg-gray-200 overflow-y-auto dark:bg-gray-900 fixed top-14 h-full w-[414px] left-0 z-30 heightContainer`}>
         <h2 className="py-6 text-xl text-center">Page overview</h2>
        <div className="grid grid-cols-5 gap-3 p-3">
          {dayOfYearArr.map((printDate, index) => (
            <Link key={index} href={`/book/${printDate}`}>
              <a>
                <button
                  id={`btn${printDate}`}
                  className="relative rounded flex-col text-xs flex justify-center items-center w-full h-20 hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                  <PageDocument />
                  <span className="absolute top-0 right-0 text-end z-10 pr-2">{printDate}</span>
                </button>
              </a>
            </Link>
          ))}
        </div>
        
        </motion.div>
        {isOpen&&<div className=" bg-gradient-to-b from-gray-300 dark:from-gray-900 z-40 to-transparent w-[414px] h-14 top-14 left-0 fixed"></div>}
        {isOpen&&<motion.div initial={{y:60}} animate={{y:0}} transition={{delay:0.1, ease: "easeInOut"}} className=" bg-gradient-to-t from-gray-300 dark:from-gray-900 z-40 to-transparent w-[414px] h-14 bottom-0 left-0 fixed"></motion.div>}
        </>
        

  );
  //     <Wrapper>
  //       <Main>
  //         <div className="p-3">
  //           <div className="grid w-full grid-cols-7 gap-3 ">
  //             {periodDate[0].day.map((date, index) => (
  //               <Link key={index} href={`book/${date}`}><a>
  //               <button
  //                 className={`${!isRead && activeDate ?'bg-red-200':''} relative grid place-self-center w-full py-3 transition-all rounded-md `}

  //                 id={`btn${date}`}
  //                 >
  //                 {isRead &&<CheckMark />}
  //                 {date}
  //               </button>
  //               </a></Link>
  //             ))}
  //           </div>
  //         </div>
  //       </Main>
  //     </Wrapper>
  //   );
}
