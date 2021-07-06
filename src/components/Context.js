import { createContext, useContext } from "react";
//Portfolio Component
const projectArray = [{ name: "Escape Room", img: "/Portfolio/escae project.jpeg" , url: "https://github.com/kineretasiyahan/escape-room-project.git", web: "https://kineretasiyahan.github.io/escape-room-project/", id: 1 },
{ name: "Cars", img: "/Portfolio/cars project.jpeg", url: "https://github.com/kineretasiyahan/Cars-Project.git", web: "https://kineretasiyahan.github.io/Cars-Project/", id: 2 },
{ name: "KNews", img: "/Portfolio/news project.jpeg", url: "https://github.com/kineretasiyahan/NEWSPROJECT.git", web: "https://kineretasiyahan.github.io/NEWSPROJECT/", id: 3 },
{ name: "Movies", img: "/Portfolio/movies project.jpeg", url: "https://github.com/kineretasiyahan/Cinema-Movie.git", web: "https://kineretasiyahan.github.io/Cinema-Movie/", id: 4 }]
export const projectContext = createContext(projectArray);
export const ContextProjectProvider = projectContext.Provider;
export function useContextGlobal() {
    return useContext(projectContext)
}
// Home Component
const cardsArray = [{ header: "THE FIRST DAY IN TEC CAREER", img: "/Portfolio/first day.jpeg", date: "28.12.20" },
{ header: "LECTURE ABOUT EVENT LOOP", img: "/Portfolio/kineret lecture.jpeg", date: "2.6.21" },
{ header: "PRESENTATION ABOUT WIX", img: "/Portfolio/prezentaition.jpeg", date: "12.4.21" },
{ header: "LECTURE", img: "/Portfolio/kineret more lecture.jpeg", date: "2.6.21" },
];
export const hometContext = createContext(cardsArray);
export const ContextHomeProvider = hometContext.Provider;
export function useContextGlobal2() {
    return useContext(hometContext)
}
//theme 
export const themeContext = createContext({});
export const ThemeContextProvider = themeContext.Provider;
export function useContextTheme() {
    return useContext(themeContext)
}
