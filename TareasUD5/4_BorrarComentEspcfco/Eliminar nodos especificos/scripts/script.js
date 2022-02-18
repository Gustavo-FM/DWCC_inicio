

const formulario=document.querySelector("form")
const textArea=document.querySelector("#textArea")
const check=document.getElementsByName("nodeAction")
const numeroComentario=document.querySelector("#grafCount")
const temp=document.querySelectorAll("#template").content
const comentarios=document.querySelectorAll("#comentarios")

const articulos=[]
const contador=1

function pintarPantalla(){
    comentarios.innerHTML=""
    const article=temp.cloneNode(true)
    h4=article.querySelector("h4")
    h4.innerHTML=`Comentario ${contador}`
    p=article.querySelector("p")
    p.textContent=textArea.value 

}


formulario.addEventListener("submit",e=>{
    e.preventDefault()
    pintarPantalla()
})