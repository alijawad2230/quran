import axios from "axios";
import AyatText from "@/components/AyatText";

export default async function Surahnumber(props) {
  const req =
    (await "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quransoosinonun/") +
    props.params.suratnumber +
    ".json";
  const data = await axios.get(req);
  // await axios.get`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-qurannastaleeqn/${props.params.suratnumber}.json`;

  return (
    <div className="leading-10	">
      {data.data.chapter?.map((i) => {
        {
          return <AyatText text={i.text} ayat={i.verse} />;
        }
      })}
    </div>
  );
}
