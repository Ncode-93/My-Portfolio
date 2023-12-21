import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";
import Work from "./Work";

const Home = () => {
  // const workElement = document.getElementById("Work");
  // const handleClick = () => {
  //   if (workElement !== null) {
  //     window.scrollTo(workElement.offsetTop, {
  //       duration: 500,
  //       smooth: true,
  //     });
  //   } else {
  //     console.log("error");
  //   }
  // };
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Nimish Bhardwaj
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className="mr-2">I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("MERN Stack Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Front-end Web Developer")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
          Passionate MERN Stack maestro, sculpting seamless user experiences
          with React's finesse and MongoDB's resilience, poised to elevate your
          web applications to extraordinary heights!
        </p>
        <div>
          <button
            // onClick={handleClick}
            onClick={() =>
              window.scrollTo(document.getElementById("work").offSetTop, {
                duration: 500,
                smooth: true,
              })
            }
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
          >
            View Work{" "}
            <span className="group-hover:translate-x-1 duration-300">
              {" "}
              {/* <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]"> */}
              {/* <Link to="work" smooth={true} duration={500}> */}
              {/* Work */}
              {/* </Link> */}
              {/* </li> */}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
