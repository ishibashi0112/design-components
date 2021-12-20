import React from "react";
import Header from "../components/Header";
import Tab1 from "../components/tab/tab1";

const Tabs = () => {
  return (
    <div>
      <Header />

      <div className="mt-4 flex flex-col gap-3">
        <Tab1 />
        <hr className="w-2/3 mx-auto border-b border-gray-600" />
        <Tab1 />
        <hr className="w-2/3 mx-auto border-b border-gray-600" />
      </div>
    </div>
  );
};

export default Tabs;
