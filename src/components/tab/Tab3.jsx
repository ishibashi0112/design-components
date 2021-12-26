import React, { useEffect, useState } from "react";

const Tab3 = (props) => {
  const tabArray = props.tabArray;
  const [tab, setTab] = useState(tabArray[0]);

  const handleClickTab = (e) => {
    setTab(e.target.innerHTML);
  };

  const [displayContents, setDisplayContens] = useState();
  const displayChange = () => {
    switch (tab) {
      case "aaa":
        setDisplayContens(
          <div>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        );
        break;

      case "bbb":
        setDisplayContens(
          <div>
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            <br />
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
          </div>
        );
        break;

      case "ccc":
        setDisplayContens(
          <div>
            cccccccccccccccccccccccccccccccccccccccccccccccccc
            <br />
            cccccccccccccccccccccccccccccccccccccccccccccccccc
          </div>
        );
        break;
      case "ddd":
        setDisplayContens(
          <div>
            dddddddddddddddddddddddddddddddddddddddddddddddddd
            <br />
            dddddddddddddddddddddddddddddddddddddddddddddddddd
          </div>
        );
        break;
    }
  };

  useEffect(() => {
    displayChange();
    console.log(displayContents);
  }, [tab]);

  return (
    <div>
      <div className="h-[200px] w-[600px] border rounded-md shadow-md">
        <div className="mx-auto m-2 w-full ">
          <div className="w-full  border rounded-lg bg-gray-100">
            {tabArray.map((tabName) => (
              <button
                key={tabName}
                className={
                  tab === tabName
                    ? // ? `w-[calc(100%/${tabArray.length})] mr-1 rounded-3xl text-lg text-white  bg-gray-400  transition hover:opacity-80  `
                      `w-1/${tabArray.length} rounded-3xl text-lg text-white  bg-gray-400  transition hover:opacity-80  `
                    : `w-1/${tabArray.length} rounded-3xl text-lg   transition active:opacity-70  hover:bg-gray-200  `
                }
                onClick={handleClickTab}
              >
                {tabName}
              </button>
            ))}
          </div>
          <div className="w-full flex justify-center">{displayContents}</div>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
