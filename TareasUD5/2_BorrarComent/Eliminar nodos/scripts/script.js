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
const borrar=document.querySelector("#deleteNode")
const a=document.querySelector("a")
//const btn=formulario.querySelector("input")

contador=1
const articles=[]
formulario.addEventListener('submit', e=>{
    e.preventDefault()
    const article=document.createElement("article")
    article.className=contador
    const h4=document.createElement("h4")
    const p=document.createElement("p")
    const cabecera=document.createTextNode(`Comentario ${contador}`)
    const texto=document.createTextNode(textArea.value)
    contador++
    h4.appendChild(cabecera)
    p.appendChild(texto)
    article.appendChild(h4)
    article.appendChild(p)
    const conjunto=comentarios.appendChild(article)
    articles.push(conjunto)
    console.log(articles)
})

a.addEventListener("click", e=>{
    for(let i=contador; i>=0;i--){
    articleBorrar=document.querySelector("article")
    articleClass=articleBorrar.querySelector(".contador")
    console.log(articleClass)
    //h4=articleBorrar.querySelector("h4")
    //cabecera=h4.querySelector(h4.value)
    //articles.pop()
    if(i==articleClass)
        articleBorrar.remove()
    contador--
    }

})

