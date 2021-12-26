import React from "react";
import Header from "../components/Header";
import Tab1 from "../components/tab/tab1";
import Tab2 from "../components/tab/tab2";
import Tab3 from "../components/tab/Tab3";

const Tabs = () => {
  const tabArray = [
    <Tab1 />,
    <Tab2 tabArray={["aaa", "bbb", "ccc", "ddd"]} />,
    <Tab3 tabArray={["aaa", "bbb", "ccc", "ddd"]} />,
  ];
  return (
    <div>
      <Header />

      <div className="m-4 flex flex-col gap-3">
        {tabArray.map((tab) => {
          return (
            <div className="w-[800px] h-56 mx-auto flex justify-center items-center border shadow-md">
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
