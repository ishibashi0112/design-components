import React from "react";

const Button3 = (props) => {
  return (
    <button className="h-10 w-20  text-sm border text-white border-gray-500 bg-gray-500 transition hover:bg-white hover:text-gray-500 hover:transition active:opacity-60 active:border-blue-200 active:text-blue-200  ">
      {props.children}
    </button>
  );
};

export default Button3;
