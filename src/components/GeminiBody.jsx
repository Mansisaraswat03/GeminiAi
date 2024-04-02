"use client";
import React from "react";
import { CircleUserRound, SendHorizontal } from "lucide-react";
import { cardData } from "@/data/data";
import Card from "./Card";

const GeminiBody = ({
  theme,
  submit,
  setInput,
  input,
  result,
  loading,
  displayResult,
  recentPrompts
}) => {
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between p-5 text-xl text-gray-400">
        <p>Gemini</p>
        <CircleUserRound size={40} className="text-softTextColor" />
      </div>
      <div className="max-w-[900px] mx-auto">
        {!displayResult ? (
          <>
            <div className="my-12 text-5xl font-medium p-5">
              <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 ">
                <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
                  Hello,
                </span>{" "}
                Mansi
              </p>
              <p className="text-5xl mt-2">How can I help you today?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
              {cardData.map((item) => (
                <Card key={item.id} desc={item.desc} icon={item.icon} theme={theme} />
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="my-10 flex items-center gap-5">
              <CircleUserRound size={40} className="text-softTextColor" />
              <p>{recentPrompts}</p>
            </div>
            <div className="flex items-start gap-5">
              <img src="/gemini.png" alt="icon" />
              <p className="text-md font-normal loading-6 text-gray-400" dangerouslySetInnerHTML={{ __html: result }}></p>
            </div>
          </div>
        )}
        <div className="fixed bottom-0 w-full max-w-[900px] px-10 mx-auto">
          <form action={submit}>
            <div className="flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-5 rounded-full">
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                placeholder="Enter a prompt here"
              />
              <div className="flex cursor-pointer">
                <SendHorizontal type="submit" onClick={submit} size={20} />
              </div>
            </div>
          </form>
          <p className="sm:text-xs text-sm text-gray-400 text-center p-2 bg-bgPrimaryColor">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
        </div>
      </div>
    </div>
  );
};

export default GeminiBody;
