function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        img.src = 'Sem título3.png'
        document.body.style.background = '#E78B4C'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'Sem título2.png'
        document.body.style.background = '#FFAD09'
    } else {
        img.src = 'Sem título.png'
        document.body.style.background = '#564064'
    }
}