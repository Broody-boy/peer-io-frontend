import { useState } from "react";

export const Selector = ( { startChatting } ) => {
  const [selection, setSelection] = useState([
    {type: 'leetcode', select: false},
    {type: 'productivity', select: false},
    {type: 'project', select: false},
  ]);

  const toggleSelect = (e) => {
    console.log(e.target.id);
    const buttonId = e.target.id;
    let newList = [...selection]; 
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].type === buttonId) {
        newList[i].select = !newList[i].select;
      }
    }
    setSelection(prev => newList);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="button-wrapper flex flex-row items-center gap-4">
        {selection.map((item) => {
          return (
          <button
            id={item.type}
            className={`rounded-xl border-2 border-gray-400 px-4 py-2 transition ease-in-out duration-200 ${item.select ? "bg-primary scale-110" : "bg-secondary"}`}
            onClick={toggleSelect}
          >
            {item.type}
          </button>)
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <button className="rounded-xl border bg-accent px-4 py-2 text-white font-semibold hover:bg-accentdark transition ease-in-out duration-200 " onClick={startChatting}>
          Start Chatting
        </button>
      </div>
    </div>
  );
};
