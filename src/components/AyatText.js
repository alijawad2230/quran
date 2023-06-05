"use client";

export default function AyatText(props) {
  return (
    <div
      className={`${
        props.ayat % 2 == 0 ? "bg-gray-800" : "bg-gray-900"
      } text-white py-3`}
      dir="rtl"
    >
      <div className="px-2 w-full flex content-center items-baseline flex-wrap">
        <p className="my-auto">{props.text}</p>
        <div className="relative  my-auto " style={{ width: "56px" }}>
          <img className="items-center  justify-center " src="/ayatmark.png" />
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
    </div>
  );
}
