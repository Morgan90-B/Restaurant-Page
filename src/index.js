import domSetup, { domSetupMain } from "./mainpage";
import menuDisplay from "./menu";
import detailsDisplay from "./about";
import './style.css';

domSetup();
function events() {
    const home=document.getElementById("Home");
    const Menu=document.getElementById("Menu");
    const About=document.getElementById("About");
    home.addEventListener("click",domSetupMain);
    Menu.addEventListener("click",menuDisplay);
    About.addEventListener("click",detailsDisplay);
}
events();