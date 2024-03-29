"use client"
import GeminiBody from "@/components/GeminiBody";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");
   const toggle =(val)=>{
    setTheme(val);
   }
  return (
   <div className={`flex contain ${theme}`}>
    <Sidebar toggle={toggle} theme={theme}/>
    <GeminiBody theme={theme}/>
   </div>
  );
}
