"use client";
export default function MiniSurat(props) {
  const movetosurat = () => {};
  return (
    <div
      onClick={movetosurat}
      class="cursor-pointer flex flex-row rounded-lg bg-white  dark:bg-neutral-700 w-full font-sans"
    >
      <div className="relative w-40 flex items-center justify-center">
        <img src="surat.png " className="" />
        <span
          style={{
            left: "50%",
            transform: "translate(-50%, 0)",
            fontSize: "28px",
          }}
          className="absolute   text-cyan-800 font-semibold "
        >
          {props.data.chapter}
        </span>
      </div>
      <div dir="rtl" class="flex flex-col justify-start p-6 w-full">
        <span class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          نام : <span>{props.data.arabicname}</span>
          <span className="hidden md:block">
            {props.data.name} ({props.data.englishname})
          </span>
        </span>
        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          تعداد ایات : {props.data.verses.length}
        </p>
        <p class="text-xs text-neutral-500 dark:text-neutral-300">
          نازل شده در : {props.data.revelation}
        </p>
      </div>
    </div>
  );
}
