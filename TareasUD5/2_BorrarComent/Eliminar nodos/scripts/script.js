/*
<section id="comentarios">
        <article>
            <h4>COMENTARIO </h4>
            <p>Esto como siempre a mano</p>
        </article>
    </section>
*/


const formulario=document.querySelector("form")
const comentarios=document.querySelector("#comentarios")
//const borrar=document.querySelector("#deleteNode")
const textArea=document.querySelector("#textArea")
const a=document.querySelector("a")
//const btn=formulario.querySelector("input")

const articles=[]  
//
function mostrarArticulos(){
    comentarios.textContent=""
    articles.forEach((article,indice) => {
        const articlectl=document.createElement("article")
        const h4=document.createElement("h4")
        const p=document.createElement("p")
        const cabecera=document.createTextNode(`Comentario ${indice+1}`)
        const texto=document.createTextNode(article.texto)
        
        h4.appendChild(cabecera)
        p.appendChild(texto)
        articlectl.appendChild(h4)
        articlectl.appendChild(p)
        comentarios.appendChild(articlectl)
     });
    console.log(articles)
    textArea.focus()
    formulario.reset()
}

formulario.addEventListener('submit', e=>{
    e.preventDefault()
    articulo={
        id:new Date().getTime(),
        texto: textArea.value,
    }
    articles.push(articulo)
    mostrarArticulos()
})

a.addEventListener("click", e=>{
    /*for(let i=contador; i>=0;i--){
    articleBorrar=document.querySelector("article")
    articleClass=articleBorrar.querySelector(".contador")
    
    //h4=articleBorrar.querySelector("h4")
    //cabecera=h4.querySelector(h4.value)
    //articles.pop()
    if(i==articleClass)
        articleBorrar.remove()
    contador--
    }*/
    articles.pop()
    mostrarArticulos()
 // for(let i=contador; i>=0;i--){
   //   document.write(articles[i])
 // }
    
console.log(articles)
})

