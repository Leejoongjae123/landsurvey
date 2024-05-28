import React, { useState } from "react";
import { Input } from "@nextui-org/react";

const NumberChanger = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex">
      <Input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class=""
        placeholder="90210"
        required
      />
    </div>
  );
};

export default NumberChanger;
