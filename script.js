//seletores
let teclaDo = document.querySelector("#Dó");
let tecla1 = document.querySelector("#tecla1");

let teclaRe = document.querySelector("#Ré");
let tecla2 = document.querySelector("#tecla2");

let teclaMi = document.querySelector("#Mi");
let tecla3 = document.querySelector("#tecla3");

let teclaFa = document.querySelector("#Fá");
let tecla4 = document.querySelector("#tecla4");

let teclaSol = document.querySelector("#Sol");
let tecla5 = document.querySelector("#tecla5");

let teclaLa = document.querySelector("#Lá");
let tecla6 = document.querySelector("#tecla6");

let teclaSi = document.querySelector("#Si");
let tecla7 = document.querySelector("#tecla7");

let menorDo = document.querySelector("#menorDó");
let tecla8 = document.querySelector("#tecla8");











//events
teclaDo.addEventListener('click', ()=>{
    tecla1.play();
})

teclaRe.addEventListener('click', ()=>{
    tecla2.play();
})

teclaMi.addEventListener('click', ()=>{
    tecla3.play();
})

teclaFa.addEventListener('click', ()=>{
    tecla4.play();
})

teclaSol.addEventListener('click', ()=>{
    tecla5.play();
})
teclaLa.addEventListener('click', ()=>{
    tecla6.play();
})
teclaSi.addEventListener('click', ()=>{
    tecla7.play();
})
menorDo.addEventListener('click', ()=>{
    tecla8.play();
})