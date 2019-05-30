// <AVATAR>
import React from "react";
import { useFetch } from "./fetchHook";

function Avatar(prop) {
  const [data, loading] = useFetch("https://dog.ceo/api/breeds/image/random", prop.dat);

  return <>{loading ? "Loading..." : <img alt="Dog pic" src={data.message} width="150px" height="auto" />}</>;
}

export default Avatar;
