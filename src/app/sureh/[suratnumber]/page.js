"use client";
import AyatText from "@/components/AyatText";
import path from "path";
import axios from "axios";

import { useState, useEffect } from "react";
path.resolve("./next.config.js");

// fonts

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
  Lalezar,
  Amiri_Quran,
  Reem_Kufi_Ink,
} from "next/font/google";

const rakkas = Rakkas({ subsets: ["arabic"], weight: ["400"] });
const harmattan = Harmattan({ subsets: ["arabic"], weight: ["400"] });
const reem_Kufi_Fun = Reem_Kufi_Fun({ subsets: ["arabic"], weight: ["400"] });
const cairo = Cairo({ subsets: ["arabic"], weight: ["400"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400"] });
const amiri_Quran = Amiri_Quran({ subsets: ["arabic"], weight: ["400"] });
const reem_Kufi_Ink = Reem_Kufi_Ink({ subsets: ["arabic"], weight: ["400"] });
const lalezar = Lalezar({ subsets: ["arabic"], weight: ["400"] });
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

export default function SurehShow(props) {
  // localStorage.setItem("font", aref_Ruqaa_Ink);
  // let getfont = localStorage.getItem("font");

  // درخاست اطلاعات از دیتابیس

  // تعریف دیتاها
  const req =
    // "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranqaloon/" +
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh/" +
    props.params.suratnumber +
    ".json";
  const reqtarjome =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fas-hussainansarian/" +
    props.params.suratnumber +
    ".json";
  // تعریف دیتاها
  const [data, setdata] = useState();
  const [tarjomedata, settarjomedata] = useState();
  // درصورت تغییر صفحه دوباره به دیتا بیس درخواست داده شود تا اطلاعات جدید گرفته شود
  useEffect(() => {
    axios.get(req).then((res) => {
      setdata(res);
    });
    axios.get(reqtarjome).then((res) => {
      settarjomedata(res);
    });
  }, []);
  // درصورت تغییر صفحه دوباره به دیتا بیس درخواست داده شود تا اطلاعات جدید گرفته شود

  // await axios.get`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurannastaleeqn/${props.params.suratnumber}.json`;
  // تنظیمات فنت
  const [fontsize, setfontsize] = useState(24);
  const [lineheight, setlineheight] = useState(3);
  const [fontcode, setfontcode] = useState(0);
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
    lalezar,
    reem_Kufi_Ink,
  ];
  const fontspersianname = [
    "قران امیری",
    "رکس",
    "هرماتان",
    "کوفی",
    "کوفی",
    "سایرو",
    "تجاول",
    "المرای",
    "چانگا",
    "امیری",
    "مصری",
    "کوفی",
    "روغا",
    "لمونادا",
    "الکلامی",
    "روکاع",
    "کایرو",
    "لاله زار",
    "کوفی",
  ];

  const [darkmode, setdarkmode] = useState(true);

  // بدنه اصلی و کدهای اچ تی ام ال
  return (
    <div className="leading-10	">
      {/* بخش تنظیمات فونت */}
      <div
        className={`bg-gray-800 
         text-white py-3 ${props.params.suratnumber == 1 ? "block" : "block"}`}
        dir="rtl"
      >
        <div className="w-full bg-cyan-900 px-2 py-1  sm:flex justify-around items-center">
          {/* انتخاب کردن فونت */}
          <div className="p-2 md:p-0">
            <select
              onChange={(event) => setfontcode(() => event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>فونت را انتخاب کنید</option>
              {fonts.map((value, index) => {
                console.log(value);
                return (
                  <option
                    style={{ fontFamily: fonts[index].style.fontFamily }}
                    key={index}
                    value={index}
                  >
                    {fontspersianname[index]}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex md:mr-3">
              <input
                className=" bg-cyan-800"
                style={{ paddingRight: "1px" }}
                type="number"
                id="font"
                max={72}
                min={8}
                value={fontsize}
                onChange={(i) => {
                  setfontsize(Number(i.target.value));
                }}
              />
              <span
                onClick={() => {
                  setfontsize((o) => (o += 1));
                }}
                className="pr-1"
              >
                : font size
              </span>
            </div>
            <div className="flex md:mr-3">
              <input
                style={{ paddingRight: "1px" }}
                className=" bg-cyan-800"
                type="number"
                id="font"
                max={10}
                min={1}
                value={lineheight}
                onChange={(i) => {
                  setlineheight(Number(i.target.value));
                }}
              />
              <span
                onClick={() => {
                  setlineheight((o) => (o += 1));
                }}
                className="pr-1"
              >
                : lineheight
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              setdarkmode((old) => !old);
            }}
            className=""
          >
            {darkmode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-moon-stars-fill m-auto"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
              </svg>
            )}
            {!darkmode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-brightness-high-fill m-auto"
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            )}
          </div>
        </div>
        {/* <div className="px-2 w-full flex content-center items-baseline flex-wrap">
          <p style={{ fontSize: fontsize }} className="my-auto">
            بِسۡمِ اِ۬للَّهِ اِ۬لرَّحۡمَٰنِ اِ۬لرَّحِيمِ
          </p>
          <div className="relative  my-auto " style={{ width: "56px" }}>
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
              1
            </span>
          </div>
        </div> */}
      </div>
      <div
        style={{
          lineHeight: lineheight,
        }}
        // onClick={() => setfontcode((i) => (i >= 18 ? 0 : i + 1))}
      >
        {/* رفع ایراد در برخی صفخات */}
        {
          <AyatText
            text={"بِسمِ اِ۬للَّهِ اِ۬لرَّحۡمَٰنِ اِ۬لرَّحِيمِ          "}
            ayat={0}
            fontsize={fontsize}
            tarjome={" به نام خداوند بخشنده و مهربان"}
            fontcode={fontcode}
            dark={darkmode}
          />
        }
        {/* فرستادن اطلاعات به کامپوننت برای نمایش دادن ایات */}
        {data?.data.chapter?.map((i) => {
          {
            return (
              <AyatText
                fontcode={fontcode}
                key={i.text}
                text={i.text}
                ayat={i.verse}
                chapter={i.chapter}
                fontsize={fontsize}
                tarjome={tarjomedata?.data.chapter[i.verse - 1]?.text}
                dark={darkmode}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
