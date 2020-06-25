var agora = new Date()
var diaSem = agora.getDay()
//domingo -2° - 3°- 4° - 5° - 6° - sabado 
// var acima é para deixar o dia atual da maquina, posso fazer com horas tmb mais ai no caso eu só mudo o que desejo

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}