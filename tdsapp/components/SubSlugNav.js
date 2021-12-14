import { motion } from "framer-motion";
import BookmarkIcon from "./BookmarkIcon";
import Link from "next/link";

const SubSlugNav = () => {
  return (
    <div className="flex justify-between">
      <Link href="/" exact>
        <a>
          <div className="sticky top-0 py-3 px-2">
            <motion.div
              initial={{ opacity: 0, x: -40, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 2 }}
              className=" h-10 w-10 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            </motion.div>
          </div>
        </a>
      </Link>

      <div className="sticky top-0 py-3 px-2">
        <motion.div
          initial={{ opacity: 0, x: 40, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 2 }}
          className=" h-10 w-10 flex justify-center items-center"
        >
          <BookmarkIcon />
        </motion.div>
      </div>
    </div>
  );
};

export default SubSlugNav;
