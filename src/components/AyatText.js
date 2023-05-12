"use client";

export default function AyatText(props) {
  return (
    <div
      className={`bg-gray-${
        props.ayat % 2 == 0 ? "800" : "900"
      } text-white py-10`}
      dir="rtl"
    >
      <div className="px-2 inline-block">
        <p>{props.text}</p>
        <div className="relative w-16 my-auto whitespace-nowrap">
          <img className="items-center justify-center " src="/ayatmark.png" />
          <span
            className="absolute  text-black"
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
