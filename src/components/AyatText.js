"use client";

export default function AyatText(props) {
  return (
    <div className="flex" dir="rtl">
      <span className="font-sans"> {props.text} </span>
      <div className="relative w-10">
        <img className="" src="/ayatmark.png" />
        <span
          className="absolute "
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "16px",
          }}
        >
          {props.ayat}
        </span>
      </div>
    </div>
  );
}
