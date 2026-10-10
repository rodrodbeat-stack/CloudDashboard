const data={
integracion:{icon:"⌘",title:"Integración · controles activos",text:"Build automatizado, pruebas unitarias, análisis de secretos y validación de dependencias.",tags:["Build","Unit tests","Secret scan"]},
certificacion:{icon:"⛨",title:"Certificación · validación de seguridad",text:"Verificación de SAST/SCA, escaneo de infraestructura como código, cumplimiento de políticas y evidencias de certificación.",tags:["SAST / SCA","IaC scan","Compliance"]},
qa:{icon:"◉",title:"QA · calidad antes del release",text:"Pruebas funcionales y de integración, DAST, validación UAT y comprobación de criterios de aceptación.",tags:["DAST","Integration tests","UAT"]},
prod:{icon:"⬆",title:"Prod · despliegue controlado",text:"Promoción con aprobación, estrategia de despliegue gradual, monitoreo de salud y rollback preparado.",tags:["Approval gate","Monitoring","Rollback"]}
};
const cards=document.querySelectorAll(".env"),detail=document.getElementById("env-detail");
cards.forEach(card=>card.addEventListener("click",()=>{
 cards.forEach(c=>c.classList.remove("selected"));card.classList.add("selected");
 const d=data[card.dataset.env];detail.querySelector(".detail-icon").textContent=d.icon;
 detail.querySelector(".detail-text b").textContent=d.title;detail.querySelector(".detail-text p").textContent=d.text;
 detail.querySelector(".detail-tags").innerHTML=d.tags.map(t=>`<i>● ${t}</i>`).join("");
}));
