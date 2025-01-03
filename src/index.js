import "./styles.css";
import HomePage from "./home";
import MenuPage from "./menu";
import AboutPage from "./about";

const container = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", ()=> {
    container.innerHTML = "";
    HomePage();
});

menuBtn.addEventListener("click", ()=> {
    container.innerHTML = "";
    MenuPage();
});

aboutBtn.addEventListener("click", ()=> {
    container.innerHTML = "";
    AboutPage();
});

document.addEventListener("DOMContentLoaded", () => {
    container.innerHTML = "";
    HomePage();
});


