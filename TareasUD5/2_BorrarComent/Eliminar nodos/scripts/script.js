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
const textArea=formulario.querySelector("#textArea")
//const btn=formulario.querySelector("input")

contador=1
formulario.addEventListener('submit', e=>{
    e.preventDefault()
    const article=document.createElement("article")
    const h4=document.createElement("h4")
    const p=document.createElement("p")
    const cabecera=document.createTextNode(`Comentario ${contador}`)
    const texto=document.createTextNode(textArea.value)
    contador++
    h4.appendChild(cabecera)
    p.appendChild(texto)
    article.appendChild(h4)
    article.appendChild(p)
    comentarios.appendChild(article)
})