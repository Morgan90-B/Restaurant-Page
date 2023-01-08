export default function detailsDisplay() {
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
    
    const details=document.createElement("div");
    details.setAttribute("class","details");

    const address=document.createElement("div");
    address.setAttribute("id","address");
    const addh=document.createElement("div");
    addh.setAttribute("class","detailsheading");
    addh.innerText="ADDRESS";
    const addc=document.createElement("div");
    addc.innerText="40 Park Ln Huntsville Texas 77342";

    details.appendChild(address);
    address.appendChild(addh);
    address.appendChild(addc);

    const hours=document.createElement("div");
    hours.setAttribute("id","hours");
    const hourh=document.createElement("div");
    hourh.innerText="HOURS";
    hourh.setAttribute("class","detailsheading");
    const hourc=document.createElement("div");
    hourc.innerText="Tuesday: 12:00 - 22:00 \n Wednesday: 12:00 - 22:00 \n Thursday: 12:00 - 22:00 \n Friday: 12:00 - 23:30 \n Saturday: 12:00 - 23:30 \n Sunday: 12:00 - 23:30";

    details.appendChild(hours);
    hours.appendChild(hourh);
    hours.appendChild(hourc);

    const contact=document.createElement("div");
    contact.setAttribute("id","contact");
    const conth=document.createElement("div");
    conth.innerText="CONTACT";
    conth.setAttribute("class","detailsheading");
    const contc=document.createElement("div");
    contc.innerText="telephone - 000-0000-000 \n email: restuarant@odin.com";

    details.appendChild(contact);
    contact.appendChild(conth);
    contact.appendChild(contc);

    const content=document.getElementById("content");
    content.appendChild(details);
}