function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value )
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute("src", "crianca_h.png")
            } else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute("src", "jovem_h.png")
            } else if (idade < 50){             
                //Adulto
                img.setAttribute("src", "adulto_h.png")
            } else {
                //idoso
                img.setAttribute("src", "idoso_h.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute("src", "crianca_m.png")
            } else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute("src", "jovem_m.png")
            } else if (idade < 50){
                //Adulto
                img.setAttribute("src", "adulto_m.png")
            } else {
                //idoso
                img.setAttribute("src", "idoso_m.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}