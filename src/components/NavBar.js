"use client";
import { useEffect, useState } from "react";
import "../app/globals.css";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function NavBar() {
  const [data, setdata] = useState(null);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json")
      .then((res) => {
        setdata(res);
      });
    console.log(data);
  }, []);
  const [navshowing, setnavshowing] = useState(true);
  return (
    <nav className={` bg-slate-800 text-gray-200 p-4`}>
      <div className="w-full mx-auto flex">
        <div
          onClick={() => router.replace("/")}
          className="flex items-center justify-start "
        >
          <img
            src={"/logo.png"}
            style={{ width: "64px" }}
            className="cursor-pointer"
          />
          <span
            style={{ fontFamily: "Georgia" }}
            className="p-2 cursor-pointer"
          >
            Al Quran
          </span>
        </div>
        <div className="ms-auto my-auto">
          <button onClick={() => setnavshowing((old) => !old)}>
            {navshowing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-x-diamond"
                viewBox="0 0 16 16"
              >
                <path d="M7.987 16a1.526 1.526 0 0 1-1.07-.448L.45 9.082a1.531 1.531 0 0 1 0-2.165L6.917.45a1.531 1.531 0 0 1 2.166 0l6.469 6.468A1.526 1.526 0 0 1 16 8.013a1.526 1.526 0 0 1-.448 1.07l-6.47 6.469A1.526 1.526 0 0 1 7.988 16zM7.639 1.17 4.766 4.044 8 7.278l3.234-3.234L8.361 1.17a.51.51 0 0 0-.722 0zM8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873L8.722 8zM8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873L8 8.722zM7.278 8 4.044 4.766 1.17 7.639a.511.511 0 0 0 0 .722l2.874 2.873L7.278 8z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        dir="rtl"
        className={`${
          navshowing ? "" : ""
        }  grid md:grid-cols-8  xl:grid-cols-10 sm:grid-cols-5 grid-cols-2 gap-4 relative `}
        style={{
          transform: navshowing
            ? "translate(0, -3000px)"
            : " translate(0 ,0px)",
          height: navshowing ? " 0px" : "fit-content",
          transition: "all .2s",
        }}
      >
        {data?.data.chapters?.map((i, index) => {
          return (
            <div
              key={index}
              className={`font-sans font-light border-r-2 text-right border-teal-500 hover:border-teal-600 hover:scale-110 relative hover:-translate-x-3 transition cursor-pointer`}
              onClick={() => {
                router.replace(`/sureh/${i.chapter}`);
                setnavshowing(true);
              }}
            >
              <span className="px-2 "> {i.arabicname}</span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
