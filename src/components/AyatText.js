"use client";
import ReactDOM from "react-dom";
import {
  Rakkas,
  Harmattan,
  Noto_Kufi_Arabic,
  Reem_Kufi_Fun,
  Cairo,
  Tajawal,
  Almarai,
  Changa,
  Amiri,
  El_Messiri,
  Reem_Kufi,
  Aref_Ruqaa_Ink,
  Lemonada,
  Alkalami,
  Aref_Ruqaa,
  Cairo_Play,
  Qahiri,
  Amiri_Quran,
  Reem_Kufi_Ink,
} from "next/font/google";
import { useState } from "react";

const rakkas = Rakkas({ subsets: ["arabic"], weight: ["400"] });

const harmattan = Harmattan({ subsets: ["arabic"], weight: ["400"] });
const reem_Kufi_Fun = Reem_Kufi_Fun({ subsets: ["arabic"], weight: ["400"] });
const cairo = Cairo({ subsets: ["arabic"], weight: ["400"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400"] });
const amiri_Quran = Amiri_Quran({ subsets: ["arabic"], weight: ["400"] });
const reem_Kufi_Ink = Reem_Kufi_Ink({ subsets: ["arabic"], weight: ["400"] });
const qahiri = Qahiri({ subsets: ["arabic"], weight: ["400"] });
const cairo_Play = Cairo_Play({ subsets: ["arabic"], weight: ["400"] });
const almarai = Almarai({ subsets: ["arabic"], weight: ["400"] });
const alkalami = Alkalami({ subsets: ["arabic"], weight: ["400"] });
const lemonada = Lemonada({ subsets: ["arabic"], weight: ["400"] });
const aref_Ruqaa = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400"] });
const changa = Changa({ subsets: ["arabic"], weight: ["400"] });
const reem_Kufi = Reem_Kufi({ subsets: ["arabic"], weight: ["400"] });
const amiri = Amiri({ subsets: ["arabic"], weight: ["400"] });
const aref_Ruqaa_Ink = Aref_Ruqaa_Ink({ subsets: ["arabic"], weight: ["400"] });
const el_Messiri = El_Messiri({ subsets: ["arabic"], weight: ["400"] });
const noto_Kufi_Arabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400"],
});
export default function AyatText(props) {
  let text = props.text;
  let tarjome = props.tarjome;
  let coloredtext;
  const fonts = [
    amiri_Quran,
    rakkas,
    harmattan,
    noto_Kufi_Arabic,
    reem_Kufi_Fun,
    cairo,
    tajawal,
    almarai,
    changa,
    amiri,
    el_Messiri,
    reem_Kufi,
    aref_Ruqaa_Ink,
    lemonada,
    alkalami,
    aref_Ruqaa,
    cairo_Play,
    qahiri,
    reem_Kufi_Ink,
  ];

  // for (let i = 0; i < text.length; i++) {
  //   const element = text[i];
  //   if (element == "ُ") {
  //     ReactDOM.createRoot(document.getElementById("root")).render(
  //       <span class="red">element</span>
  //     );
  //   } else {
  //     ReactDOM.createRoot(document.getElementById("root")).render(
  //       <span class="red">element</span>
  //     );
  //   }
  // }
  return (
    <div
      className={`${
        props.dark
          ? props.ayat % 2 == 1
            ? "bg-gray-800 text-white"
            : "bg-gray-900 text-white"
          : "bg-white text-black border hover:bg-stone-100 hover:shadow-2xl hover:z-50 "
      } 
      transition
      py-3 ${
        props.chapter == 1 && props.ayat == 1 ? "hidden" : "block"
      }  md:px-2 shadow`}
      dir="rtl"
    >
      <div className="flex">
        <div className=" ">
          <div className="sticky top-0 my-auto " style={{ width: "56px" }}>
            <img
              className="items-center  justify-center "
              src="/ayatmark.png"
            />
            <span
              className="absolute  text-black"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {props.chapter == 1 ? props.ayat : props.ayat + 1}
            </span>
          </div>
        </div>
        <div className="p-2 md:p-3  ">
          <p
            style={{
              fontSize: props.fontsize,
              fontFamily:
                props.fontcode >= 0 || props.fontcode <= 18
                  ? fonts[props.fontcode].style.fontFamily
                  : fonts[0].style.fontFamily,
            }}
            id="root"
            className={`my-auto cursor-pointer p-2 w-fit transition ${
              !props.dark ? "hover:bg-amber-100" : "hover:bg-cyan-950"
            } p-0 md:p-2`}
          >
            {text}
          </p>

          <p
            style={{
              fontSize: props.fontsize,
              fontFamily:
                props.fontcode >= 0 || props.fontcode <= 18
                  ? fonts[props.fontcode].style.fontFamily
                  : fonts[0].style.fontFamily,
            }}
            className={`my-auto cursor-pointer p-2 w-fit transition ${
              !props.dark ? "hover:bg-amber-100" : "hover:bg-cyan-950"
            } p-0 md:p-2 `}
          >
            {tarjome}
          </p>
        </div>
      </div>
    </div>
  );
}
