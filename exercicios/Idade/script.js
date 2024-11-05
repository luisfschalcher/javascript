function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    var alerta = document.getElementById('alerta')
    if (fano.value.length == 0 || fano.value > ano) {
        alerta.innerHTML = `Ano inválido`
        res.innerHTML = ``
    } else {
        alerta.innerHTML = ``
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = `homem`
            if (idade < 12) {
                img.setAttribute('src', 'Hyehehe.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'NinjaDragon.jpg')
            } else {

            }
        } else {
            genero = `mulher`
            if (idade < 12) {

            } else if (idade < 18) {

            } else {
                
            }
        }
        res.innerHTML = `${genero} com ${idade} anos`
        //res.style.textAlign = 'center'
        res.appendChild(img)
    }
}