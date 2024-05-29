"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { language } from "./data.js";

export default function App() {
  return (
    <div className="flex justify-center items-center py-10 md:py-0 ">
      <Select
        items={language}
        label="Language"
        placeholder="Select Language"
        className="w-1/2 md:w-1/4"
        defaultSelectedKeys={["korean"]}
      >
        {(language) => <SelectItem>{language.label}</SelectItem>}
      </Select>
    </div>
  );
}
