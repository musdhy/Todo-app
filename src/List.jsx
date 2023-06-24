import React, { useState } from "react";
import crossIcon from "./assets/images/icon-cross.svg";
import CheckIcon from "./assets/images/icon-check.svg";

const List = ({ list,handleCheck,handleDelete,handleCompleted,toggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <li
      // key={list.id}
      className={`h-10 border-b ${""}w-full bg-item-dark-bg px-3  ${
        toggle
          ? "dark:bg-item-dark-bg  border-white/20 "
          : " bg-white  border-black/20  "
      } `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full flex flex-row items-center py-4 justify-between">
        <div className="h-full flex flex-row gap-3 items-center">
          {/* <input type="checkbox" checked={list.checked} /> */}
          {list.checked ? (
            <img
              src={CheckIcon}
              alt="checkIcon"
              className="border rounded-full p-[1.5px] h-3 w-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 cursor-pointer"
              onClick={() => handleCheck(list.id)}
            />
          ) : isHovered ? (
            <div
              className="border border-gradient-to-r from-cyan-500 to-fuchsia-500  h-3 w-3 rounded-full cursor-pointer "
              onClick={() => handleCheck(list.id)}
            ></div>
          ) : (
            <div
              className={`border h-3 w-3 rounded-full ${
                toggle ? "border-white/20" : "border-black/20"
              } `}
            ></div>
          )}
          <p
            className={`text-sm font-semibold   ${
              toggle ? "text-items-light-bg/60" : "text-black/70 "
            } ${list.style}`}
          >
            {list.item.length > 40 ? `${list.item.slice(0, 40)}...` : list.item}
          </p>
        </div>
        {isHovered && (
          <img
            src={crossIcon}
            className="w-3 h-3 cursor-pointer"
            alt="delete"
            onClick={() => handleDelete(list.id)}
          />
        )}
      </div>
    </li>
  );
};

export default List;
