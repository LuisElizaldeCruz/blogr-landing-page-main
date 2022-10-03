const iconHamburguer = document.querySelector('.icono-hamburguesa');
iconHamburguer.addEventListener('click', (e)=>{
   document.querySelector(".menu").classList.toggle("menuActive")
});

document.querySelector(".lista>li").addEventListener("click", (e)=>{
   console.log("se presiono un elemento de la lista");}
   );