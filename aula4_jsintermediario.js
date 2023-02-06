// Crie um arquivo chamado funcoes1_js.html, e vamos fazer um algoritmo:

// a. Receba do usuário através do comando prompt um CPF (apenas números), e atribua isso a uma variável.

// b. Crie uma função para verificar se o CPF digitado contém 11 dígitos, caso não contenha retorne false true caso retorne.

// c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

// d. Crie uma última função para exibir o CPF formatado através de um alert para o cliente caso a função de validação de dígitos retorne true.

// Dicas importantes:
// ● Leve suas dúvidas para as mentorias, é sempre uma boa oportunidade para aprender mais detalhes sobre a matéria.
// ● Utilize CPFs gerados através de geradores de CPF na internet.


let cpf = prompt("Digite seu CPF (apenas números)");

// Função para verificar se o CPF tem 11 dígitos
function validaCPF(cpf) {
  if (cpf.toString().length === 11) {
    return true;
  } else {
    return false;
  }
}

// Função para formatar o CPF
function formataCPF(cpf) {
  let formattedCPF = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);
  return formattedCPF;
}

// Verifica se o CPF é válido
if (validaCPF(cpf)) {
  let cpfFormatado = formataCPF(cpf);
  alert("Seu CPF é: " + cpfFormatado);
} else {
  alert("CPF inválido, por favor digite um CPF válido.");
}