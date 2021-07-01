import { createContext,useContext } from "react";

// Portfolio Component
const projectArray=[{name:"Escape Room",img:"escae project.jpeg",id:1},
{name:"Cars",img:"cars project.jpeg",id:2},
{name:"News",img:"news project.jpeg",id:3},
{name:"Movies",img:"movies project.jpeg"}]
export const projectContext=createContext(projectArray);
export const ContextProjectProvider = projectContext.Provider;
export function useContextGlobal(){
    return useContext(projectContext)
}


// Home Component
const cardsArray=[{header:"Tec Career",img:"כנרת הרצאה 2.jpeg",date:"24.5.21"},
{header:"Tec Career",img:"first day.jpeg",date:"24.5.21"},
{header:"Tec Career",img:"",date:"24.5.21"},
{header:"Tec Career",img:"כנרת הרצאה.jpeg",date:"24.5.21"},
];

export const hometContext=createContext(cardsArray);
export const ContextHomeProvider = hometContext.Provider;
export function useContextGlobal2(){
    return useContext(hometContext)
}

//theme 
export const theme="black";
export const themeContext=createContext();
export const ThemeContextProvider=themeContext.Provider;

