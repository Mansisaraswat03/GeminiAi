import {
    Compass,
    Lightbulb,
    Youtube,
    Code,
  } from "lucide-react";

export const cardData =[
    {
        id:1,
        desc : "Write code for a specific task, including edge cases",
        icon : <Code size={35} className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"/>,
    },
    {
        id:2,
        desc : "Find hotels in Recoleta in Buenos Aires, and things to do",
        icon : <Compass size={35} className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"/>,
    },
    {
        id:3,
        desc : "Brainstorm presentation ideas about a topic",
        icon : <Lightbulb size={35} className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"/>,
    },{
        id:4,
        desc : "Help me find the latest trends",
        icon : <Youtube size={35} className="p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full"/>,
    }
]