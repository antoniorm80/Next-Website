import { ArrowLeftIcon } from "@primer/octicons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Mundito!</span>
      { new Date().getMonth() + 1 + '/' +  new Date().getDate() + '/' + new Date().getFullYear()}
      <br/>
      { new Date().toLocaleString()}
      <Link href={"/about"}> <ArrowLeftIcon  className="size-10"/></Link>
    </main>
  );
}
