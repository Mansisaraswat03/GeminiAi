"use client";
import React, { useState } from "react";
import {
  Menu,
  Plus,
  CircleHelp,
  Activity,
  Settings,
  MessageSquare,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
const Sidebar = ({ toggle, theme, setDisplayResult, setInput,prevPrompts,setRecentPrompts, submit }) => {
  const [open, setOpen] = useState(true);
  const loadPrompt = (prompt) => {
    submit(prompt);
    setRecentPrompts(prompt);
  };
  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4">
      <div>
        <Menu
          size={25}
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-softTextColor"
        />
        <div
          className="mt-3 inline-flex items-center py-2 gap-3 px-4 bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer"
          onClick={() => {setDisplayResult(false); setInput(" ");}}
        >
          <Plus size={20} className="cursor-pointer text-softTextColor" />
          {open ? <p>New Chat</p> : null}
        </div>
        {open ? (
          <div className="flex flex-col">
            <p className="mt-8 text-gray-500">Recent</p>
            {prevPrompts?.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="my-2 flex items-center gap-2.5 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-slate-200 p-2 bg-bgPrimaryColor"
              >
                <MessageSquare
                  size={20}
                  className="cursor-pointer text-softTextColor"
                />
                <p>{item?.slice(0, 15)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-5">
        <div className="pr-2.5  cursor-pointer flex gap-2 text-gray-400 items-center">
          <CircleHelp size={20} className="text-softTextColor" />
          {open ? <p>Help</p> : null}
        </div>
        <div className="pr-2.5  cursor-pointer flex gap-2 text-gray-400 items-center">
          <Activity size={20} className="text-softTextColor" />
          {open ? <p>Activity</p> : null}
        </div>
        <div className="pr-2.5  cursor-pointer flex gap-2 text-gray-400 items-center">
          <Settings size={20} className="text-softTextColor" />
          {open ? <ThemeToggle toggle={toggle} theme={theme} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
