var agora = new Date()
var diaSem = agora.getDay()
/*
Para o JS os dias da semana sao representados por numeros
0 = Domingo
1 = Segunda-Feira
2 = Terça-Feira
3 = Quarta-Feira
4 = Quinta-Feira
5 = Sexta-Feira
6 = Sabádo
*/
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO], Dia invalido')
}