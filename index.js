// testando com if, else if, else
let nickname = "Mohg"
let quantidadeExp = "x"
let nivel = ""

if(quantidadeExp === 0 || quantidadeExp <= 1000){
	nivel = "Ferro"
	//console.log("Ferro")
}
else if(quantidadeExp === 1001 || quantidadeExp <= 2000){
	nivel = "Bronze"
    //console.log("Bronze")
}
else if(quantidadeExp === 2001 || quantidadeExp <= 5000){
	nivel = "Prata"
    //console.log("Prata")
}
else if(quantidadeExp === 5001 || quantidadeExp <= 7000){
	nivel = "Ouro"
    //console.log("Ouro")
}
else if(quantidadeExp === 7001 || quantidadeExp <= 8000){
	nivel = "Platina"
    //console.log("Platina")
}
else if(quantidadeExp === 8001 || quantidadeExp <= 9000){
	nivel = "Ascendente"
    //console.log("Ascendente")
}
else if(quantidadeExp === 9001 || quantidadeExp <= 10000){
	nivel = "Imortal"
    //console.log("Imortal")
}
else if(quantidadeExp >= 10001){
	nivel = "Radiante"
    //console.log("Radiante")
}
else(quantidadeExp)
	nivel = "Sem patente"
	//console.log("Sem patente")

console.log ("O Héroi de nome " + nickname + " está no nível " + nivel)