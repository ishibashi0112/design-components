import Link from "next/link";
import React from "react";
import Button1 from "./bottun/Button1";

const Header = () => {
  return (
    <header className="h-10 flex justify-between px-4 border-b">
      <Link href="/">
        <a className="my-auto font-bold">design components</a>
      </Link>

      <Button1 />
    </header>
  );
};

export default Header;
