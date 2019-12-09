function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(fano.value.length==0 || fano.value > ano){
        window.alert("ERRO, verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade<10){
                //crianca
                img.setAttribute("src", "img/foto-bebe-m.png")
            }else if (idade<21){
                //jovem
                img.setAttribute("src", "img/foto-jovem-m.png")
            }else if (idade<60){
                //adulto
                img.setAttribute("src", "img/foto-adulto-m.png")
            }else{
                //idoso
                img.setAttribute("src", "img/foto-idoso-m.png")
            }
        } else{
            genero = "Mulher"
            if (idade >=0 && idade<10){
                //crianca
                img.setAttribute("src", "img/foto-bebe-f.png")
            }else if (idade<21){
                //jovem
                img.setAttribute("src", "img/foto-jovem-f.png")
            }else if (idade<60){
                //adulto
                img.setAttribute("src", "img/foto-adulto-f.png")
            }else{
                //idoso
                img.setAttribute("src", "img/foto-idoso-f.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}