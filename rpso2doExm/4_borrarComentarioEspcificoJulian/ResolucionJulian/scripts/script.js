document.addEventListener("DOMContentLoaded",eventoDoc=>{
    const formulario=document.querySelector("form")
    const textArea=document.querySelector("#textArea")
    const elecciones=document.getElementsByName("nodeAction")
    const select=document.querySelector("select")
    const comentarios=document.querySelector("#comentarios")
    const templateComentario=document.querySelector("#template-comentario").content
    
    seleccionados=[]
    
    const renderComentarios=()=>{
        comentarios.innerHTML=""
        const fragmentoComentarios=document.createDocumentFragment()
        //Donde se definió comments??
        comments.forEach((comment,indice)=>{
            const article=templateComentario.cloneNode(true)
            h4=article.querySelector("h4")
            h4.innerHTML=`Comentario ${indice+1}`
            h4.setAttribute("data-id",comment.id)
            p=article.querySelector("p")
            p.textContent=comment.texto
            p.setAttribute("data-id",comment.id)
            if (comment.estado) {
                h4.classList.add("seleccionado")
                p.classList.add("seleccionado")
            }
            else {
                h4.classList.remove("seleccionado")
                p.classList.remove("seleccionado")
            }
    
            fragmentoComentarios.appendChild(article)
        })
        comentarios.appendChild(fragmentoComentarios)
         //No sé que hace. Eso es para CONVERTIR al formato JSON que tiene almacenado
        // EN comments pero, Cuando lo almacenó?? 
        localStorage.setItem("comments",JSON.stringify(comments))
        formulario.reset()
        textArea.focus()
    }
    
    const actualizarOpciones=(opcion)=>{
        if (opcion) {
            opcionCtrl=document.createElement("option")
            opcionCtrl.textContent=comments.length
            select.appendChild(opcionCtrl)
        } else {
             //Esto da un booleano?? Julián lo puso pero...
           // if (select.lastChild){
               //no sé porque le pone el if.Esto da un boleano?
                //le agrego esta linea para probar
                console.log(select.lastChild)
                // Esto es lo que puso 
                //Julian: select.lastChild.remove()
                // Esto tambine furula: 
                select.removeChild(select.lastChild)
                
                
           // }//le agregue las {} por ser + de 1 linea
        }
    }
    
    const addComentario=()=>{
        comment={
            id:new Date().getTime(),
            estado:false,
            texto:textArea.value
        }
        comments.push(comment)
        actualizarOpciones(true)
        renderComentarios()
    }
    
    const deleteComentario=()=>{
        const indice=select.selectedIndex
        comments.splice(indice,1)
        actualizarOpciones(false)
        renderComentarios()
    }
    
    const insertComentario=()=>{
        const indice=select.selectedIndex
        comment={
            id:new Date().getTime(),
            estado:false,
            texto:textArea.value
        }
        comments.splice(indice,0,comment)
        actualizarOpciones(true)
        renderComentarios()
    }
    
    const replaceComentario=()=>{
        const indice=select.selectedIndex
        comment={
            id:new Date().getTime(),
            estado:false,
            texto:textArea.value
        }
        comments[indice]=comment
        renderComentarios()
    }
    
    formulario.addEventListener("submit",evento=>{
        evento.preventDefault()
        elecciones.forEach((element,indice) => {
            if (element.checked) {
                switch (indice) {
                    case 0: addComentario()
                            break
                    case 1: deleteComentario()
                            break
                    case 2: insertComentario()
                            break
                    case 3: replaceComentario()
                }
            }
        });
    })
    
    comentarios.addEventListener("click",e=>{
        if (e.target.dataset.id) {
            const article=comments.find(comment=>comment.id==e.target.dataset.id)
            console.log(article)
            article.estado=!article.estado
            if (article.estado) 
                seleccionados.push(e.target.dataset.id)
            else 
                seleccionados.splice(seleccionados.indexOf(e.target.dataset.id),1)
            renderComentarios()
        }
    })
    
    document.addEventListener("keydown",e=>{
        if (e.key=="Delete") {
            if (seleccionados.length) {
                seleccionados.forEach(sel=>{
                    comments.splice(comments.findIndex(el=>el.id==sel),1)
                    actualizarOpciones(false)
                })
                seleccionados=[]
                renderComentarios()
            }
        }
    })

//no veo dondo ha creado comments.
    //Aparece en renderComentarios() pero no veo donde se creó
    //Creo que esto es para almacenar la pagina pero no sé que hace
    //¿qué es lo que se hace aquí? ¿Para que es esto?
    if (localStorage.getItem("comments")) {
        comments=JSON.parse(localStorage.getItem("comments"))
        comments.forEach(el=>{
            actualizarOpciones(1)
            if (el.estado)
                seleccionados.push(el.id)
        })
        renderComentarios()
    } else
        comments=[]
})