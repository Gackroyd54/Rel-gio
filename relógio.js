
let tmp;
let rel = document.getElementById("relogio")
let ligar = document.getElementById("botão")
let dt
//window.document.write(hora)
function atualizaHora(){
 dt = new Date();
var hora = dt.getHours()
var min = dt.getMinutes()
var seg= dt.getSeconds()
 //window.alert("relogio que não funciona")
 seg<10?seg = "0"+seg:seg
 min<10?min = "0"+min:min
 hora<10?hora = "0"+hora:hora

 rel.innerHTML =  `${hora}:${min}:${seg}`
 
}

//window.addEventListener("load",atualizaHora)
function tempo(){
tmp = setInterval(atualizaHora,1000)
}
window.addEventListener("load",tempo)

