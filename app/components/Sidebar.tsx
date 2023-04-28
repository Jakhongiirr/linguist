"use client";
import { useState } from "react";

interface Word {
  id: number;
  word: string;
}

export default function Sidebar() {
  const [activeWord, setActiveWord] = useState<number>(1);

  function handleWordClick(id: number) {
    setActiveWord(id);
  }

  // mock words
  // to do: get real words as param from state
  let words: Word[] = [];

  for (let i = 1; i <= 50; i++) {
    words.push({ id: i, word: "So'z" + i });
  }

  return (
    <div
      className="bg-sidebar text-white text-center min-h-full"
    >
      <ul className="pt-14">
        {words.map((word: Word) => (
          <li key={word.id} className="p-1">
            {" "}
            <button
              id={activeWord === word.id ? "activeWord" : ""}
              className={
                "px-10  rounded border-none " +
                (activeWord !== word.id ? "hover:bg-hover" : "")
              }
              onClick={() => handleWordClick(word.id)}
            >
              {" "}
              {word.word}{" "}
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
