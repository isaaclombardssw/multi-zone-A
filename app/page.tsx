import Link from "next/link";
import Header from "../components/Header";
import client from "../tina/__generated__/client";
import Homepage from "./homepage";

export default async function Home() {
  const data = await client.queries.content({
    relativePath: "index.md",
  });
  console.log("data", data);
  console.log(data);

  return (
    <div>
      <Header />
      <Homepage data={data} />
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">About us</Link>
      </div>
    </div>
  );
}
