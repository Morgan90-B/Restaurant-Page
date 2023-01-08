export default function menuDisplay() {
    const toremove1=document.getElementsByClassName("mainpart");
    const toremove2=document.getElementsByClassName("menu");
    const toremove3=document.getElementsByClassName("details");
    if (toremove1[0]!==undefined) {
        toremove1[0].remove(); 
    } else if (toremove2[0]!==undefined) {
        toremove2[0].remove();
    } else if (toremove3[0]!==undefined) {
        toremove3[0].remove();
    }

    const content=document.getElementById("content");
    const menu=document.createElement("div");
    menu.classList.add("menu");

    const cont1=document.createElement("div");
    cont1.setAttribute("class","cont")
    const item1=document.createElement("img");
    item1.setAttribute("class","item");
    item1.setAttribute("src","images/meals/breadavo.jpg");
    const mincont1=document.createElement("div");
    mincont1.setAttribute("class","mincont");
    const text1=document.createElement("p");
    text1.innerText="ingredient1,ingredient1,ingredient1,ingredient1,ingredient1.";
    const h1=document.createElement("h4");
    h1.innerText="FOOD-1";

    mincont1.appendChild(h1);
    mincont1.appendChild(text1);
    cont1.appendChild(item1);
    cont1.appendChild(mincont1);

    const cont2=document.createElement("div");
    cont2.setAttribute("class","cont");
    const item2=document.createElement("img");
    item2.setAttribute("class","item");
    item2.setAttribute("src","images/meals/chees-greens.jpg");
    const mincont2=document.createElement("div");
    mincont2.setAttribute("class","mincont");
    const text2=document.createElement("p");
    text2.innerText="ingredient1,ingredient1,ingredient1,ingredient1,ingredient1.";
    const h2=document.createElement("h4");
    h2.innerText="FOOD-2";

    mincont2.appendChild(h2);
    mincont2.appendChild(text2);
    cont2.appendChild(item2);
    cont2.appendChild(mincont2);

    const cont3=document.createElement("div");
    cont3.setAttribute("class","cont");
    const item3=document.createElement("img");
    item3.setAttribute("class","item");
    item3.setAttribute("src","images/meals/meat-corn.jpg");
    const mincont3=document.createElement("div");
    mincont3.setAttribute("class","mincont");
    const text3=document.createElement("p");
    text3.innerText="ingredient1,ingredient1,ingredient1,ingredient1,ingredient1.";
    const h3=document.createElement("h4");
    h3.innerText="FOOD-3";

    mincont3.appendChild(h3);
    mincont3.appendChild(text3);
    cont3.appendChild(item3);
    cont3.appendChild(mincont3);

    const cont4=document.createElement("div");
    cont4.setAttribute("class","cont");
    const item4=document.createElement("img");
    item4.setAttribute("class","item");
    item4.setAttribute("src","images/meals/sticks.jpg");
    const mincont4=document.createElement("div");
    mincont4.setAttribute("class","mincont");
    const text4=document.createElement("p");
    text4.innerText="ingredient1,ingredient1,ingredient1,ingredient1,ingredient1.";
    const h4=document.createElement("h4");
    h4.innerText="FOOD-4";

    mincont4.appendChild(h4);
    mincont4.appendChild(text4);
    cont4.appendChild(item4);
    cont4.appendChild(mincont4);

    menu.appendChild(cont1);
    menu.appendChild(cont2);
    menu.appendChild(cont3);
    menu.appendChild(cont4);
    content.appendChild(menu);
}