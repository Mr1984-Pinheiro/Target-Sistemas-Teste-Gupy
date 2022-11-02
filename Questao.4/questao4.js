/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

// ********** Valor total mensal da distribuidora *******************

let data = [
    {
		"estado": "SP",
		"valor": 67836.43
	},
    {
		"estado": "RJ",
		"valor": 36678.66
	},
    {
		"estado": "MG",
		"valor": 29229.88
	},
    {
		"estado": "ES",
		"valor": 27165.48
	},
    {
		"estado": "Outros",
		"valor": 19849.53
	}
    
 ]

let valores = data.map(valores => valores.valor)
 console.log(valores)
let total = 0

for (let i = 0; i < valores.length; i++) {
	let valor = valores[i]
	total = total + valor
	console.log(total)
}

porcentagemSP = valores[0] / total
porcentagemRJ = valores[1] / total
porcentagemMG = valores[2] / total
porcentagemES = valores[3] / total
porcentagemOutros = valores[4] / total

console.log(`Percentual de São Paulo: ${porcentagemSP.toLocaleString('pt-BR', { style: 'percent' })}`);
console.log(`Percentual do Rio de Janeiro: ${porcentagemRJ.toLocaleString('pt-BR', { style: 'percent' })}`);
console.log(`Percentual de Minas Gerais: ${porcentagemMG.toLocaleString('pt-BR', { style: 'percent' })}`);
console.log(`Percentual do Espírito Santo: ${porcentagemES.toLocaleString('pt-BR', { style: 'percent' })}`);
console.log(`Percentual de Outros Estados: ${porcentagemOutros.toLocaleString('pt-BR', { style: 'percent' })}`);





