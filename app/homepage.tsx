"use client";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Homepage = (props: { data: any }) => {
  const liveData = useTina(props.data);
  console.log("liveData", liveData);
  return <div><TinaMarkdown content={(liveData.data as any).content.body} /></div>;
};

export default Homepage;