"use server";
import axios from "axios";

import SurehShow from "@/components/SurehShow";

// fonts

export default async function Surahnumber(props) {
  const data = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranwarsh/pages/${props.params.suratnumber}.json`
  );
  const tarjomedata = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/fas-hussainansarian/pages/${props.params.suratnumber}.json`
  );

  return (
    <SurehShow
      data={data}
      tarjomedata={tarjomedata}
      page={props.params.suratnumber}
    ></SurehShow>
  );
}
