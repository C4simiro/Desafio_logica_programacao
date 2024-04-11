//testando com switch, case, default
let nickname = "Mohg"
let quantidadeExp = "x"

switch (true){
	case quantidadeExp === 1 || quantidadeExp <= 1000:
		nivel = "Ferro"
	break
	case quantidadeExp === 1001 || quantidadeExp <= 2000:
		nivel = "Bronze"
	break
    case quantidadeExp === 2001 || quantidadeExp <= 5000:
		nivel = "Prata"
	break
    case quantidadeExp === 5001 || quantidadeExp <= 7000:
		nivel = "Ouro"
	break
    case quantidadeExp === 7001 || quantidadeExp <= 8000:
		nivel = "Platina"
	break
    case quantidadeExp === 8001 || quantidadeExp <= 9000:
		nivel = "Ascendente"
	break
    case quantidadeExp === 9001 || quantidadeExp <= 10000:
		nivel = "Imortal"
	break
    case quantidadeExp >= 10001:
		nivel = "Radiante"
	break
    default:
        nivel = "Não calibrado"
    break
}
console.log("O nome do heroi é " + nickname + " e sua patente é " + nivel)