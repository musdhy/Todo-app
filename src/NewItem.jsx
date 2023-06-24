import React, { useState } from "react";
import CheckIcon from "./assets/images/icon-check.svg";

const NewItem = ({ checked, handleInCheck,newItem,setNewItem,handleSubmit,toggle }) => {
  
  return (
    <form action="" onSubmit={handleSubmit}>
      <div
        className={` w-full flex gap-1 h-10 justify-center items-center ${
          toggle ? "dark:bg-item-dark-bg text-white/90" : "bg-white"
        }  mb-6 px-1 py-4 rounded-sm`}
      >
        {checked ? (
          <img
            src={CheckIcon}
            alt="checkIcon"
            className="border rounded-full p-[1.5px] h-3 w-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 cursor-pointer"
            onClick={handleInCheck}
          />
        ) : (
          <div
            className="border h-3 w-3 rounded-full border-black/30"
            onClick={handleInCheck}
          ></div>
        )}
        <input
          placeholder="type here"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className={`rounded-sm h-full w-[90%] font-medium   px-3 py-3 ${
            toggle ? "dark:bg-item-dark-bg text-white/60" : "bg-white"
          } outline-none text-item-dark-bg  `}
        />
      </div>
    </form>
  );
};

export default NewItem;
