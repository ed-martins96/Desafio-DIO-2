//Saldo de Partidas = 100 .
//
let saldoDeVitorias = 80
let saldoDeDerrotas = 20

let resultado = calcular (80, 20)
console.log("Herói com saldo de: " + resultado + " Vitórias .")

function calcular(vitorias, derrotas){
    let subtrair = vitorias - derrotas
    return subtrair
}

if (resultado <= 10){
    console.log("Herói está no Elo: Ferro .")
}   else if (resultado <= 20){
        console.log("Herói está no Elo: Bronze .")
}       else if (resultado <= 50){
            console.log("Herói está no Elo: Prata .")
}           else if (resultado <= 80){
                console.log("Herói está no Elo: Ouro .")
}               else if (resultado <= 90){
                    console.log("Herói está no Elo: Diamante .")
}                   else if (resultado <= 100){
                        console.log("Herói está no Elo: Lendário .")
}                       else{
                            console.log("Herói está no Elo: Imortal .")
}
//
