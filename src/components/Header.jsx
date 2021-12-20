import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-10 flex justify-between px-4 border-b">
      <Link href="/">
        <a className="my-auto font-bold">design components</a>
      </Link>

      <input
        type="checkbox"
        id="button"
        className=" h-7 w-16 border rounded-3xl"
      />
      <label htmlFor="button">
        <p className="h-5 w-5 border rounded-full"></p>
      </label>
    </header>
  );
};

export default Header;
