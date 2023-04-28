"use client";
import { useState } from "react";
import { Labels } from "../enums/sectionEnums";

interface Section {
  id: number;
  label: Labels;
}

const sections: Section[] = [
  { id: 1, label: Labels.ALL },
  { id: 2, label: Labels.DICT },
  { id: 3, label: Labels.THES },
  { id: 4, label: Labels.WIKI },
];

export function Body() {
  const [activeSection, setActiveSection] = useState<number>(1);

  return (
    <div id="body">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium odio
      eaque nostrum laborum similique quo temporibus sunt adipisci doloremque
      harum odit quam et recusandae, cumque accusantium praesentium deserunt
      neque voluptate beatae iste soluta nemo atque iure nulla. Mollitia
      provident praesentium quas, asperiores id cum, vel rerum corrupti
      consequuntur perspiciatis quia.
    </div>
  );
}
