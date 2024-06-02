"use client";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { language} from "./data.js";

export default function App({ selectedLanguage, setSelectedLanguage }) {

  const [lan2, setLan2] = useState("korean");
  const handleChange = (selected) => {
    setSelectedLanguage(selected)
  };
  console.log("lan2:",lan2)

  return (
    <div className="flex justify-center items-center md:py-0 ">
      <Select
        items={language}
        label="Language"
        placeholder="Select Language"
        className="w-1/2 md:w-1/4"
        defaultSelectedKeys={["korean"]}
        onChange={(e) => handleChange(e.target.value)}

      >
        {(language) => <SelectItem>{language.label}</SelectItem>}
      </Select>
    </div>
  );
}
