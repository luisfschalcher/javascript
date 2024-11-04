//console.log('O console funcionou corretamente') //F8 pra rodar

var agr = new Date()
var hora = agr.getHours()//getDay...
console.log(`${hora}`)

switch(hora) {
    case 1:
        console.log(`madrugada`)
        break
    case 2:
        console.log(`vai dormir`)
        break
    case 3:
        console.log(`pq tu ainda tá acordado?`)
        break
    case 4:
        console.log(`vai pegar a estrada?`)
        break
    case 5:
        console.log(`acordar cedo pra trabalhar`)
        break
    case 6:
        console.log(`acordar pra ir pra escola`)
        break
    case 9:
        console.log(`ainda com sono`)
        break
    case 10:
        console.log(`boa tarde (contém ironia)`)
        break
    case 12:
        console.log(`ao mossar`)
        break
    default:
        console.log(`deu preguiça, esse aqui vai ser o default`)
}

var vel = 31
console.log(`a velocidade é ${vel}`)
if(vel > 60) {
    console.log(`Multado`)
} else if (vel >= 30) {
    console.log(`tá certo`)
} else {
    console.log(`multado tbm`)
}