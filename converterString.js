function inverterCaracteres(valor) {
	let novoValor = ""; // Apenas para armazenar o valor

	for (let i = valor.length - 1; i >= 0; i--) {
		novoValor += valor[i]; // Inverte as letras
		console.log(novoValor);
	}

	return novoValor;
}

let testeValor = "Olá, mundo!";

let stringInvertida = inverterCaracteres(testeValor);

console.log(stringInvertida);
