import{j as a}from"./index-9d24a4f4.js";function d({name:s,status:r,species:e,type:c,gender:n,image:i,created:l}){return a.jsxs("div",{className:"characters-card-container",children:[a.jsx("img",{src:i,alt:s,className:"characters-card-container_img"}),a.jsxs("div",{className:"characters-card-container_info",children:[a.jsxs("span",{className:"characters-card-container_el",children:["Имя: ",s]}),a.jsxs("span",{className:"characters-card-container_el",children:["Статус: ",r]}),a.jsxs("span",{className:"characters-card-container_el",children:["Раса: ",e]}),a.jsxs("span",{className:"characters-card-container_el",children:["Тип: ",c||"--"]}),a.jsxs("span",{className:"characters-card-container_el",children:["Род: ",n]}),a.jsxs("span",{className:"characters-card-container_el",children:["Дата создания: ",l.slice(0,10).split("-").reverse().join("-")]})]})]})}export{d as CharactersCard};
