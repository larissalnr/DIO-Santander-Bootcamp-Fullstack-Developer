function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const animal = {
	nome: 'Fiona',
	idade: 5,
    raca: 'Pug',
};

console.log(calculaIdade.call(pessoa2, 40));
console.log(calculaIdade.apply(animal, [7]));
// A diferença em call e aplly está no uso de colchetes
// O valor 'raca' não foi declarado na funcao, portanto não terá retorno