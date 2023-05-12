"use client";

export default function AyatText(props) {
  return (
    <div className="" dir="rtl">
      <div className="px-2">
        {" "}
        {props.text}{" "}
        <div className="relative w-16 my-auto">
          <img className="items-center justify-center " src="/ayatmark.png" />
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
    </div>
  );
}
