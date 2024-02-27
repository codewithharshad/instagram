import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import NoteCard from "../../components/notes/NoteCard";
import AddNote from "../../components/addNote/AddNote";
import TypewriterEffectSmooth from "../../components/ui/typewriter-effect.tsx";
import logo from "../../assets/logo.svg";
import "./Home.scss";
function Home() {
  const userid = JSON.parse(localStorage.getItem("user"))?.userId;
  const words = [
    {
      text: "Take",
      className: "text-slate-500 dark:text-slate-500",
    },
    {
      text: " Notes",
      className: "text-slate-500 dark:text-slate-500",
    },
    {
      text: "With",
      className: "text-slate-500 dark:text-slate-500",
    },
    {
      text: "SnapNotes.",
      className: "text-slate-900 dark:text-slate-900",
    },
  ];
  return (
    <Layout>
      {userid ? (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="  w-full shrink-0 items-center px-4 md:px-6">
            <AddNote />
            <NoteCard isTrash={false} />
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="flex flex-col items-center justify-center h-[40rem] relative">
            <img src={logo} width="50px" alt="" className="mb-1" />
            <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-5">
              Login / Signup to
            </p>
            <p className="h5-head block  text-lg font-bold text-slate-500 lg:text-3xl">
              Take Notes With{" "}
              <span className="text-slate-900">SnapeNotes.</span>
            </p>

            {/* <TypewriterEffectSmooth words={words} /> */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
              {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </button> */}
            </div>
          </div>
          <div className="custom-arrow absolute  ">
            <div className="graph__wrapper">
              <svg
                width="270px"
                height="117px"
                viewBox="0 0 315 107"
                version="1.1"
                style={{ overflow: "visible" }}
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  sketch:type="MSPage"
                >
                  <path
                    id="Path-1"
                    className="path"
                    fill="none"
                    stroke="#4b4b4b"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                  />

                  <path
                    className="dashed"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                  />

                  <polyline
                    id="arrow"
                    points="0,-9 18,0 0,9 5,0"
                    fill="#4b4b4b"
                  >
                    <animateMotion
                      rotate="auto"
                      begin="1s"
                      dur="1.6s"
                      repeatCount="1"
                      fill="freeze"
                    >
                      <mpath xlinkHref="#Path-1" />
                    </animateMotion>
                  </polyline>
                </g>
              </svg>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Home;
