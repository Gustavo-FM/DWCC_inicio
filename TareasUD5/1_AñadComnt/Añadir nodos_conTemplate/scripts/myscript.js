/*
<section id="formulario">
<h1>Añade tus comentarios</h1>
<form action="#">
    <p><label for="comentario">Comentario<textarea id="textArea" rows="5"></textarea></label></p>

    <input type="submit" value="Añadir un comentario">
</form>
</section>
<section id="comentarios"></section>
*/

const formulario=document.querySelector("form")
const comentarios=document.querySelector("#comentarios")
//const textArea=document.querySelector("#textArea") VALE IGUAL
const textArea=formulario.querySelector("#textArea")
//const btn=formulario.querySelector("input")


contador=1
formulario.addEventListener('submit', e=>{
    const templateArticle=document.querySelector('#prueba').content 
    const article=templateArticle.cloneNode(true)
    //const article=document.createElement("article")
   // const h4=document.createElement("h4")
   const cabecera = document.createTextNode("COMENTARIO "+contador)
   const p=article.querySelector("p")
   const h4=article.querySelector("h4")
   const texto=document.createTextNode(textArea.value)
    p.appendChild(texto)
    h4.appendChild(cabecera)
   // article.appendChild(h4)
    //article.appendChild(p)
    comentarios.appendChild(article)
    contador++
    //textArea.value="" ESTO ES LO MISMO
    formulario.reset()
    textArea.focus()




})

