let skill=document.querySelector(".skill1")

function openmenu1(){
    skill.style.display="block"
}

function closemenu1(){
    skill.style.display="none"
}

let menu=document.querySelector(".menu")
function openmenu(){
    menu.style.right="0"
}

function closemenu(){
    menu.style.right="-200px"
}

let resume=document.querySelectorAll("#resume")
resume.forEach(button=>button.addEventListener("mouseover",()=>{
    document.querySelector("#info").style.display="block"
}))

resume.forEach(button=>button.addEventListener("mouseout",()=>{
    document.querySelector("#info").style.display="none"
}))

let gitgub=document.querySelectorAll("#github")
gitgub.forEach(button=>button.addEventListener("mouseover",()=>{
    document.querySelector("#info2").style.display="block"
}))

gitgub.forEach(button=>button.addEventListener("mouseout",()=>{
    document.querySelector("#info2").style.display="none"
}))