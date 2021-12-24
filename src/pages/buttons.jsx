import { comment } from "postcss";
import React from "react";
import Button1 from "../components/bottun/Button1";
import Button2 from "../components/bottun/Button2";
import Button3 from "../components/bottun/Button3";
import Header from "../components/Header";

const Buttons = () => {
  const a = [<Button1 />, <Button2>ボタン</Button2>, <Button3>ボタン</Button3>];

  return (
    <div>
      <Header />
      <div className="m-4 flex gap-3 ">
        {a.map((button) => {
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
