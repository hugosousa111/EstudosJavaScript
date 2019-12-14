function contar(){
    let ini = document.getElementById("txtini")
    let fim = document.getElementById("txtfim")
    let passo = document.getElementById("txtpas")
    
    let cont = document.querySelector("div#cont")

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length == 0){
        cont.innerHTML = `Impossível contar`
    }else{
        cont.innerHTML = `<p>Contando..</p>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo inválido, considerando passo 1")
            p = 1
        }
        if(i<f){
            for(let c = i; c<=f; c+=p){
                cont.innerHTML += `${c} \u{1F449} `
            }
            cont.innerHTML += ` \u{1F3C1} `
        }else{
            for(let c = i; c>=f; c-=p){
                cont.innerHTML += `${c} \u{1F449} `
            }
            cont.innerHTML += ` \u{1F3C1} `
        }
 
    }     
}