"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { Labels } from "../enums/sectionEnums";

interface Button {
  id: number;
  label: Labels;
}

const buttons: Button[] = [
  { id: 1, label: Labels.ALL },
  { id: 2, label: Labels.DICT },
  { id: 3, label: Labels.THES },
  { id: 4, label: Labels.WIKI },
];

export default function Header({ handleInput }: { handleInput: Function }) {
  const [activeButton, setActiveButton] = useState<number>(1);

  function handleButtonClick(buttonId: number) {
    setActiveButton(buttonId);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    handleInput(e.target.value)
  }

  return (
    <div className="p-3 bg-header-default text-white w-full">
      <div id="header" className="flex justify-around">
        <div className="font-bold">
          {" "}
          <h1 className="text-2xl">Izohli lugʻat</h1>
          <h5 className="text-xs text-header-text">1000 ta soʻz topildi</h5>
        </div>
        <div></div>
        <div>
          {" "}
          <form onSubmit={(e) => e.preventDefault()} method="GET">
            <div className="relative text-white">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                onChange={(e) => handleInputChange(e)}
                className="py-1 text-sm text-white rounded-md pl-10 bg-header-default border-2 border-line focus:outline-none"
                placeholder="qidiruv..."
              />
            </div>
          </form>{" "}
        </div>
      </div>
        <hr className="border-line border-1 mt-1" />
      <div id="header-buttons" className="flex flex-row pt-1 text-header-text">
        {buttons.map((button) => (
          <button
            id={activeButton === button.id ? "activeBtn" : ""}
            className="mx-1 px-2 rounded hover:bg-hover hover:text-white"
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
          >
            {" "}
            {button.label}{" "}
          </button>
        ))}
      </div>
    </div>
  );
}
