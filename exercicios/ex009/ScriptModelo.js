function contar() {
    var inicioTxt = document.getElementById("iinicio")
    var inicioN = Number(inicioTxt.value)
    var fimTxt = document.getElementById("ifim")
    var fimN = Number(fimTxt.value)
    var passoTxt = document.getElementById("ipasso")
    var passoN = Number(passoTxt.value)
    var res = document.getElementById("res")
    if(inicioTxt.value.length == 0 || fimTxt.value.length == 0 || passoTxt.value.length == 0){
        alert('um ou mais campos precisam ser preenchidos')
    } else if(inicioN < 0 || fimN < 0 || passoN <= 0){
        alert('valores negativos ou passo nulo não são permitidos')
    } else if (inicioN < fimN) {
        res.innerHTML = ''
        for(var i = inicioN; i <= fimN; i+=passoN){
            res.innerHTML += `${i} \u{1F449}`
        }
        res.innerText += `\u{1F600}`
    } else {
        res.innerHTML = ''
        for(var i = inicioN; i >= fimN; i-=passoN){
            res.innerHTML += `${i} \u{1F449}`
        }
        res.innerText += `\u{1F600}`
    }
}