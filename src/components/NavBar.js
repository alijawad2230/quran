"use client";
import { useEffect, useState } from "react";
import "../app/globals.css";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  console.log("thissssssssssssssssss" + router.pathname);
  return (
    <nav
      className={`flex items-center justify-center bg-slate-800 text-gray-200 p-4`}
    >
      <div className="w-full mx-auto ">
        <div className="flex items-center justify-start">
          <img src={"logo.png"} style={{ width: "64px" }} />
          <span style={{ fontFamily: "Georgia" }} className="p-2">
            Al Quran
            {router.asPath}
          </span>
        </div>
      </div>
    </nav>
  );
}
