import { useState, useEffect } from "react";
import List from "./List";
import SunIcon from "./assets/images/icon-sun.svg";
import MoonIcon from "./assets/images/icon-moon.svg";
import NewItem from "./NewItem";

function App() {
  const [lists, setlists] = useState(JSON.parse(localStorage.getItem("Todos")));
  // console.log(lists);
  // const [allChecked, setAllChecked] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(lists));
  }, [lists]);

  const handleInCheck = () => {
    setChecked(!checked);
  };
  const handleCheck = (id) => {
    const checkedItems = lists.map((list) =>
      list.id == id ? { ...list, checked: !list.checked } : list
    );
    setlists(checkedItems);
    // const allItemsChecked = checkedItems.every((list) => list.checked);
    // setAllChecked(allItemsChecked);
    // console.log(allChecked);
  };

  const handleDelete = (id) => {
    const listsItems = lists.filter((list) => list.id != id);
    setlists(listsItems);
  };

  const handleClear = () => {
    let listItems = lists.filter((list) => list.checked != true);
    setlists(listItems);
  };

  const handleAll = () => {
    // const toggleCheckedState = !allChecked;
    const updatedLists = lists.map((list) => ({
      ...list,
      checked: !list.checked,
    }));
    setlists(updatedLists);
    // setAllChecked(toggleCheckedState);
    // console.log(allChecked);
  };

  const handleCompleted = () => {
    const updatedLists = lists.map((list) => {
      if (list.checked) {
        return { ...list, style: "line-through" };
      } else {
        return { ...list, style: "" };
      }
    });
    setlists(updatedLists);
  };

  const addNewItem = (item) => {
    const id = lists.length ? lists[lists.length - 1].id + 1 : lists;
    const addedItem = { id, checked, item };

    setlists([...lists, addedItem]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
    addNewItem(newItem);
    setNewItem("");
  };

  return (
    <div
      className={`min-h-screen w-full ${
        toggle ? "dark:bg-dark-bg" : "bg-light-bg"
      } relative`}
    >
      <div
        className={` ${
          toggle ? "bg-hero-dark" : " bg-hero-light" 
        }  w-full h-[250px]`}
      ></div>
      <div className=" max-w-sm sm:max-w-2xl md:max-w-3xl absolute top-[5.7rem]  left-0 right-0 mx-auto flex flex-col ">
        <div className="flex justify-between w-full items-center mb-5">
          <h1 className="text-3xl font-bold text-left tracking-widest uppercase text-light-bg font-sans  ">
            Todo
          </h1>
          <img
            src={toggle ? SunIcon : MoonIcon}
            alt="lightMode"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={handleToggle}
          />
        </div>

        <div className="flex flex-col w-full h-auto">
          <NewItem
            checked={checked}
            handleInCheck={handleInCheck}
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
            toggle={toggle}
          />
          <div
            className={`  ${
              toggle ? "dark:bg-item-dark-bg" : "bg-white"
            } w-full h-auto rounded-sm`}
          >
            <ul className=" w-full h-auto z-10 rounded-sm">
              {lists.length ? (
                lists.map((list) => (
                  <List
                    key={list.id}
                    list={list}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    // handleAll = {handleAll}
                    toggle={toggle}
                  />
                ))
              ) : (
                <h2 className={`capitalize text-center text-2xl text-light-bg`}>
                  You have no Todo s{" "}
                </h2>
              )}
            </ul>
            <div
              className={`  ${
                toggle
                  ? "dark:bg-item-dark-bg text-white/30"
                  : "bg-white text-black/40"
              } w-full h-10 bg-item-dark-bg flex justify-between items-center px-3  `}
            >
              <h2
                className={` cursor-pointer text-xs cursor-pointer font-semibold ${
                  toggle ? "hover:text-white/60" : "hover:text-black/60 "
                }`}
              >
                {lists.length} items left
              </h2>
              <div className="justify-between text-xs flex items-center gap-2 font-semibold">
                <h2
                  onClick={handleAll}
                  className=" cursor-pointer text-all-blue "
                >
                  All
                </h2>
                <h2
                  className={` cursor-pointer ${
                    toggle ? "hover:text-white/60" : "hover:text-black/60 "
                  }`}
                >
                  Active
                </h2>
                <h2
                  className={` cursor-pointer ${
                    toggle ? "hover:text-white/60" : "hover:text-black/60 "
                  }`}
                  onClick={handleCompleted}
                >
                  Completed
                </h2>
              </div>
              <h2
                className={` cursor-pointer  text-xs font-semibold hover:text-white/60 cursor-pointer" ${
                  toggle ? "hover:text-white/60" : "hover:text-black/60 "
                }`}
                onClick={handleClear}
              >
                Clear Completed
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
