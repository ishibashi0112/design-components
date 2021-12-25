import React from "react";

const Button3 = (props) => {
  return (
    <button className="h-10 w-20  text-sm text-white border border-gray-500 bg-gray-500 shadow-lg  active:translate-y-0.5 active:shadow-inner active:opacity-70 ">
      {props.children}
    </button>
  );
};

export default Button3;
