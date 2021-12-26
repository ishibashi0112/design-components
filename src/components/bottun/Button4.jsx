import React from "react";

const Button4 = () => {
  return (
    <label className="flex w-12 my-auto relative ">
      <input type="checkbox" className="peer absolute left-[-100vw]  " />
      <p className="peer h-5 w-full my-auto  border rounded-3xl bg-gray-400 transition peer-checked:bg-gray-200 "></p>
      <p className="h-5 w-5 border shadow-xl rounded-full bg-gray-100 absolute left-0 peer-checked:left-7 transition peer-checked:transition  hover:shadow hover:opacity-90 peer-hover:shadow active:opacity-70 peer-active:opacity-70 "></p>
    </label>
  );
};

export default Button4;
