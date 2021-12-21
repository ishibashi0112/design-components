import React from "react";
import Button1 from "../components/bottun/Button1";
import Header from "../components/Header";

const Buttons = () => {
  return (
    <div>
      <Header />
      <div className="mt-4 flex flex-col gap-3">
        <div className="mx-auto">
          <Button1 />
        </div>

        <hr className="w-2/3 mx-auto border-b border-gray-600" />
      </div>
    </div>
  );
};

export default Buttons;
