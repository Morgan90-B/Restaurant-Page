export default function domSetup(){
    domSetupTop();
    domSetupMain();
}

function domSetupTop() {
    const content=document.getElementById("content");
    const top=document.createElement("div");
    top.classList.add("top");
    const links=document.createElement("ul");
    const heading=document.createElement("h1");
    heading.innerText="Steak Palace";
    
    const listContent=["Home","Menu","About"];
    for (let i = 0; i < listContent.length; i++) {
        var li=document.createElement("li");
        li.setAttribute("id",listContent[i]);
        li.innerText=listContent[i];
        links.appendChild(li);        
    }

    top.appendChild(heading);
    top.appendChild(links);
    content.appendChild(top);
}
export function domSetupMain(){
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
    const tester=document.getElementById("main");
    if (tester!==null) {
        return;
    }
    const mainpart=document.createElement("div");
    mainpart.classList.add("mainpart");
    mainpart.setAttribute("id","main");
    const statement=document.createElement("h3");
    statement.innerText="The Place Where Soul Food Is Born";
    const image=document.createElement("img");
    image.setAttribute("src","/images/steak.webp");

    mainpart.appendChild(statement);
    mainpart.appendChild(image);
    content.appendChild(mainpart);
}
