function fibonacci(num) {
	let n1 = 0;
	let n2 = 1;
	let nextTerm = null;

	// Verifica se o número fornecido é igual a 0 ou 1
	if (num === n1 || num === n2) {
		return `${num}  pertence à sequência de Fibonacci.`;
	}

	// Calcula a sequência de Fibonacci até que o próximo número seja maior que o número fornecido
	nextTerm = n1 + n2;
	while (nextTerm <= num) {
		if (nextTerm === num) {
			return `${num}  pertence à sequência de Fibonacci.`;
		}
		n1 = n2;
		n2 = nextTerm;
		nextTerm = n1 + n2;
	}
	return num + " não pertence à sequência de Fibonacci.";
}
console.log(fibonacci(3));
