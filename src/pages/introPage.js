import { creatIntroPage } from "../views/introPage.js";
import { initHomePage } from "./homePage.js";
export const initIntroPage=()=>{
    const userInterface=document.getElementById('userInterface');
    userInterface.innerHTML='';
    const introPageView=creatIntroPage();
    userInterface.appendChild(introPageView);
    const startButton=document.getElementById('startBtn');
    startButton.addEventListener('click',()=>{
        initHomePage();
    });


}