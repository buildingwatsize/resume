import TopicLayout from "components/Layout/TopicLayout";
import { useState } from "react";

const courseList = [
  {
    key: "training-1",
    time: "May 2022",
    name: "ITPE Certificate (IP Level)",
    organize: "Career for the Future Academy, NSTDA",
  }, {
    key: "training-2",
    time: "April 2022",
    name: "ISO/IEC 29110",
    organize: "ACIS Professional Center Co., Ltd.",
  }, {
    key: "training-3",
    time: "November 2021",
    name: "English Class (B1.2 Level)",
    organize: "Speexx",
  }, {
    key: "training-4",
    time: "September 2021",
    name: "UX/UI Design Bootcamp #1",
    organize: "Skooldio",
  }, {
    key: "training-5",
    time: "November 2020",
    name: "Ethereum Developer Zero to Hero #6",
    organize: "KULAP",
  }, {
    key: "training-6",
    time: "January 2020",
    name: "CodeCamp #4",
    organize: "Thai Programmer Association, Software Park Thailand",
  }, {
    key: "training-7",
    time: "July 2019",
    name: "Best Practice Secured Coding For Developer #2",
    organize: "Thai Programmer Association, Software Park Thailand",
  },
]

const Training = () => {
  const [scroll, setScroll] = useState(false)
  const scrollHandler = ({ target: { scrollLeft } }) => { setScroll(scrollLeft > 10) }
  return (
    <TopicLayout id="training" title='Training'>
      <ol onScroll={scrollHandler} className="relative flex overflow-x-scroll items-start p-4 bg-medium-blue/20 rounded-md px-4 sm:px-8 shadow-md">
        {!scroll && <div className="absolute right-8 bottom-[10%] -rotate-90">
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>}
        {courseList.map(el => {
          return (
            <li key={el.key} className="relative mb-6 pl-1">
              <div className="flex items-center pt-2">
                <div className="z-10 w-3 h-3 bg-lighter-blue rounded-full ring-4 ring-bold-blue shrink-0" />
                <div className="w-[47.5vw] sm:w-[18.5vw] h-0.5 bg-lighter-blue/60" />
              </div>
              <div className="mt-4 pr-8 w-full">
                <div className="block text-sm leading-none text-white/40 mb-0.5">{el.time}</div>
                <div className="text-lg mb-2 font-bold text-white">{el.name}</div>
                <div className="text-white/60">by {el.organize}</div>
              </div>
            </li>
          )
        })}
      </ol>
    </TopicLayout>
  )
}

export default Training