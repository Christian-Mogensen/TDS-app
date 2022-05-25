import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getDayOfYear,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useStateContext } from "../../context/stateContext";
import BookmarkIcon from "../Icons/BookmarkIcon";
import { CheckMark, LeftIcon, RightIcon } from "./Icons";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  const router = useRouter();
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });
  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const { setToggled } = useStateContext();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed z-40 w-full h-screen max-w-sm px-4 overflow-auto bg-gray-100 dark:bg-gray-900 md:max-w-full sm:mx-auto "
    >
      <div className="max-w-2xl m-auto mt-20 sm:p-4">
        <div className="flex items-center w-full">
          <h2 className="flex-auto font-semibold text-gray-900 dark:text-white">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </h2>
          <button
            type="button"
            onClick={previousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <LeftIcon />
          </button>
          <button
            onClick={nextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <RightIcon />
          </button>
        </div>
        <div className="grid w-full grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500 sm:text-2xl dark:text-white">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid w-full grid-cols-7 mt-2 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                "py-1.5"
              )}
            >
              <Link href={`/book/${getDayOfYear(day) + 1}`} prefetch={true}>
                <a>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDay(day);
                      setToggled(false);
                    }}
                    className={classNames(
                      isEqual(day, selectedDay) &&
                        "text-white  dark:text-gray-200 ",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-green-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900 dark:bg-gray-700 bg-gray-200 dark:text-white ",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-green-500 text-white",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto text-xs sm:text-xl relative flex h-8 w-8 sm:h-16 sm:w-16  items-center justify-center rounded-sm"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>

                    <CheckMark
                      className={
                        "absolute w-2 h-2 bottom-[2px] right-[2px] sm:w-3 sm:h-3"
                      }
                    />
                    <BookmarkIcon
                      fill="currentColor"
                      className={
                        "absolute w-1 h-1 top-[2px] right-[2px] sm:w-3 sm:h-3"
                      }
                    />
                  </button>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
