import React, { useState } from "react";
import Head from "next/head";

const Tab1 = () => {
  const tabArray = ["aaa", "bbb", "ccc", "ddd"];
  const [tab, setTab] = useState(tabArray[0]);

  const handleClickTab = (e) => {
    console.log(e.target.innerHTML);
    setTab(e.target.innerHTML);
  };

  return (
    <div>
      <div className="h-[200px] w-[600px]">
        <div className="w-full ">
          <div className="border-b">
            {tabArray.map((tabName) => (
              <button
                className={
                  tabName === tab
                    ? "w-[70px] mr-1 text-lg hover:text-blue-300 transition text-blue-500  border-b-2 border-blue-500 "
                    : "w-[70px] mr-1 text-lg  hover:text-blue-300 transition"
                }
                onClick={handleClickTab}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className={"aaa" === tab ? "" : "hidden"}>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className={"bbb" === tab ? "" : "hidden"}>
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            <br />
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          </div>
          <div className={"ccc" === tab ? "" : "hidden"}>
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            <br />
            cccccccccccccccccccccccccccccccccccccccccccccccccc
          </div>
          <div className={"ddd" === tab ? "" : "hidden"}>
            dddddddddddddddddddddddddddddddddddddddddddddddddd
            <br />
            dddddddddddddddddddddddddddddddddddddddddddddddddd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
