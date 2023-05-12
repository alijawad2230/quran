"use client";

export default function AyatText(props) {
  return (
    <div className="flex" dir="rtl">
      <span className="font-sans"> {props.text} </span>
      <div className="relative w-10 items-center justify-center">
        <img className="items-center justify-center" src="/ayatmark.png" />
        <span
          className="absolute "
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {props.ayat}
        </span>
      </div>
    </div>
  );
}
