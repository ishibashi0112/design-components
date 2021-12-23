import React from "react";
import Button1 from "../components/bottun/Button1";
import Button2 from "../components/bottun/Button2";
import Header from "../components/Header";

const Buttons = () => {
  return (
    <div>
      <Header />
      <div className="m-4 flex gap-3 ">
        <div className="flex justify-center w-40 h-40  border shadow-lg">
          <Button1 />
        </div>
        <div className="flex justify-center w-40 h-40 items-center border shadow-lg">
          <Button2>ボタン</Button2>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
