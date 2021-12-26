import React from "react";
import Button1 from "../components/bottun/Button1";
import Button2 from "../components/bottun/Button2";
import Button3 from "../components/bottun/Button3";
import Button4 from "../components/bottun/Button4";
import Header from "../components/Header";

const Buttons = () => {
  const buttonArray = [
    <Button1 />,
    <Button2>ボタン</Button2>,
    <Button3>ボタン</Button3>,
    <Button4>ボタン</Button4>,
  ];

  return (
    <div>
      <Header />
      <div className="m-4 flex gap-3 ">
        {buttonArray.map((button) => {
          return (
            <div className="flex justify-center w-40 h-40 items-center border shadow-lg">
              {button}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Buttons;
