
const data = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

const maxValue = data.reduce(function(prev, current) { 	
	return prev.valor > current.valor ? prev : current; 
});

const minValue = data.reduce(function(prev, current) { 		
		return prev.valor < current.valor ? prev : current;		 
});

console.log(maxValue.valor);
console.log(minValue.valor);

/*
let dias = data.map(dia => dia.dia)
let valores = data.map(valores => valores.valor)

let maiorValor = 0


for (let i= 0; i < valores.length; i++){

    let valor = valores[i]

    if (valor > maiorValor ) {
        maiorValor = valor
    }
     
}

console.log(maiorValor);

*/
/*
let valores = data.map(valores => valores.valor)

let posicao_maior = 0
let posicao_menor = 0

for (let i =1; i < valores.length; i++ ) {
	if (valores[i] > valores[posicao_maior]) {
		posicao_maior = i
	}else if (valores[i] < valores[posicao_menor]) {
		posicao_menor = i 
	}
}

console.log(`Maior elemento: ${valores[posicao_maior]} (i: ${posicao_maior}) `)
console.log(`Menor elemento: ${valores[posicao_menor]} (i: ${posicao_menor}) `)
*/