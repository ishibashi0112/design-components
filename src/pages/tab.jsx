import React from "react";
import Tab1 from "../components/tab/tab1";

const Tab = () => {
  return (
    <div>
      <header className="h-10 flex justify-between px-4 border-b">
        <h1 className="my-auto">design components</h1>
        <button className="border">maru</button>
      </header>
      <div className="mt-4 flex flex-col">
        <Tab1 />
        <Tab1 />
      </div>
    </div>
  );
};

export default Tab;
