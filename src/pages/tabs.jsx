import React from "react";
import Header from "../components/Header";
import Tab1 from "../components/tab/tab1";
import Tab2 from "../components/tab/tab2";

const Tabs = () => {
  const tabArray = [<Tab1 />, <Tab2 tabArray={["aaa", "bbb", "ccc", "ddd"]} />];
  return (
    <div>
      <Header />

      <div className="mt-4 flex flex-col gap-3">
        {tabArray.map((tab) => {
          return (
            <div className="w-[800px] h-56 mx-auto flex justify-center items-center border shadow-lg">
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
