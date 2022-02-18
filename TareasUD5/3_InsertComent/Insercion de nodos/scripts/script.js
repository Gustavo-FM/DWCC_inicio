/*article>h4>p*/

const formulario=document.querySelector("form")

const textArea=document.querySelector("#textArea")
const check=document.getElementsByName("nodeAction")
const comentarios=document.querySelector("#comentarios")
const numeroComentario=document.querySelector("#grafCount")

articulos=[]
function pintarPantalla(){
    comentarios.innerHTML=""
    articulos.forEach((comentario, indice)=>{
        const h4=document.createElement("h4")
        h4.innerHTML=`COMENTARIO ${indice+1}`
        const p=document.createElement("p")
        p.textContent=comentario.texto
        
        const article=document.createElement("article")
        article.appendChild(h4)
        article.appendChild(p)
        comentarios.appendChild(article)
    })
}

function opciones(borrar) {
    if (!borrar) {
        const option=document.createElement("option")

        option.innerHTML=articulos.length
        numeroComentario.appendChild(option)
    } else {
         opcionesctl=numeroComentario.querySelectorAll("option")
         opcionesctl[opcionesctl.length-1].remove()
    }
}

function crearComentario(){
    const comentario={
        texto:textArea.value,
        estado:0
    }
    articulos.push(comentario)
    opciones(false)
    pintarPantalla()
}

function borrarComentario(){
    articulos.pop()
    opciones(true)
    pintarPantalla()
}

function insertarComentario(){
    const comentario={
        texto:textArea.value,
        estado:0
    }
    articulos.splice(numeroComentario.selectedIndex,0,comentario)
    opciones(false)
    pintarPantalla()
}

formulario.addEventListener("submit",evento=>{
    evento.preventDefault()
    check.forEach((elemento,indice)=>{
        if (elemento.checked) {
            switch(indice){
                case 0: crearComentario()
                        break
                case 1: borrarComentario()
                        break
                default: insertarComentario()
            }
        }
    })
})



