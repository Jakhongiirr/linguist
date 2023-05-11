"use client"
import { useEffect, useState } from "react";
import { Body } from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default async function Home() {
  // const fetched = 
  const [input, setInput] = useState<string>('a');

  function handleInput(_input: string) {
    setInput(_input)
  }

  return (
    <div className="">
      <div className="fixed top-0 right-0 w-header z-10">
        <Header handleInput={handleInput}/>
      </div>

      <div className="relative">
        <div className="fixed w-sidebar h-screen top-0 left-0 overflow-scroll border-r-2 border-black">
          <Sidebar words={[]}/>
        </div>
        <div className="absolute w-body top-24 right-0 p-5 bg-body h-screen text-white z-0">
          <Body input={input}/>
        </div>
      </div>
    </div>
  );
}
