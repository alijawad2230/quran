import axios from "axios";
import AyatText from "@/components/AyatText";
import path from "path";
path.resolve("./next.config.js");
export default async function Surahnumber(props) {
  const req =
    (await "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransoosinonun/") +
    props.params.suratnumber +
    ".json";
  const data = await axios.get(req);
  // await axios.get`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurannastaleeqn/${props.params.suratnumber}.json`;

  return (
    <div className="leading-10	">
      <div
        className={`bg-gray-800 
         text-white py-3 ${props.params.suratnumber == 1 ? "hidden" : "block"}`}
        dir="rtl"
      >
        <div className="px-2 w-full flex content-center items-baseline flex-wrap">
          <p className="my-auto">
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
        </div>
      </div>
      {data.data.chapter?.map((i) => {
        {
          return (
            <AyatText
              key={i.text}
              text={i.text}
              ayat={i.verse}
              chapter={i.chapter}
            />
          );
        }
      })}
    </div>
  );
}
