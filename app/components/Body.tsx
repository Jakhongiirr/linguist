"use client";
import { useState } from "react";
import { Labels } from "../enums/sectionEnums";

interface Section {
  id: number;
  label: Labels;
}

const sections: Section[] = [
  { id: 2, label: Labels.DICT },
  { id: 3, label: Labels.THES },
  { id: 4, label: Labels.WIKI },
];

export function Body({ input }: { input: string }) {
  const [activeSection, setActiveSection] = useState<number[]>([1]);

  function handleSectionClick(ids: number[]) {
    setActiveSection(ids);
  }

  return (
    <div id="body">
      {/* <div className="text-center">
        {sections.map((section: Section) => {
          return (
            <div
              key={section.id}
              className={
                activeSection.indexOf(section.id) !== -1
                  ? "activeSection"
                  : "inactiveSection"
              }
              onClick={() =>
                handleSectionClick(
                  activeSection.indexOf(section.id) !== -1
                    ? activeSection.filter((id: number) => id !== section.id)
                    : [...activeSection, section.id]
                )
              }
            >
              {" "}
              <h1> {section.label} </h1>{" "}
            </div>
          );
        })}
      </div> */}
      { input }
    </div>
  );
}
