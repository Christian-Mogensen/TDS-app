import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Main from "../components/Main";
import Image from "next/image";
import Footer from "../components/Footer";
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
} from "date-fns";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";


export default function calendar() {
  const day = getDate(new Date());
  const month = format(new Date(), "MMMM");

  const dayResult = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });
  const monthResult = eachMonthOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });
  const dayArr = [];
  const periodDate = [];
  let d;
  dayResult.map((day) => ((d = format(day, "d")), dayArr.push(d)));
  periodDate.push({ month: month, day: dayArr });


  const [activeDate, setActiveDate] = useState()
  const date = periodDate[0].day;
  let today;
useEffect(() => {
  setActiveDate(()=>{
    today = date.find( item => item == day)
    if(today === true){
    document.querySelector('button').classList.add('bg-red-300')
   }} )
}, [day])
  return (
    <Wrapper>
      {/* <Header /> */}
      <Main>
        <div className="p-3 bg-black border-t border-b border-gray-700">
          <div className="grid w-full grid-cols-7 gap-3">
            {periodDate[0].day.map((date, index) => (
              <button
                className="flex items-center justify-center w-full py-3 transition-all rounded-md opacity-50 hover:opacity-100 active:bg-green-500"
                key={index}
                onLoadStart={setActiveDate}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      </Main>
      <Footer />
    </Wrapper>
  );
}
