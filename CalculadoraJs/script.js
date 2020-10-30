function insereNumero(numero) {
   if (typeof valorVisor == 'undefined') {
      document.formuCalculadora.visor.value = '';
   }
   document.formuCalculadora.visor.value = document.formuCalculadora.visor.value + numero;
   valorVisor = 1;
}

// Função para limpar todos os calculos e variáveis.
function limpar() {
   document.formuCalculadora.visor.value = '';
   delete valorAtual;
   delete valorOperacao;
   delete valorVisor;
}

// Função para executar as operações.
function realizaOperacao(operacao, valor1, valor2) {
   switch (operacao){
      case 'somar': 
         var valor = parseFloat(valor1) + parseFloat(valor2);
         break;
      case 'subtrair':
         var valor = valor1 - valor2;
         break;
      case 'multiplicar':
         var valor = valor1 * valor2;
         break;
      case 'dividir':
         var valor = valor1 / valor2;
         break;
      default:
         var valor = 0;
         break;
   }

   return(valor);
}

// Função para controlar o fluxo
function controleFluxo(operacao) {
   var valor = document.formuCalculadora.visor.value;
   delete valorVisor;

   if (typeof valorOperacao != 'undefined' && operacao == 'resultado') {
      valorAtual = realizaOperacao(valorOperacao, valorAtual, valor);
      document.formuCalculadora.visor.value = valorAtual;
      delete operacao;
      delete valorAtual;
      return(0);
   }

   if (typeof valorAtual != 'undefined') {
      valorAtual = realizaOperacao(valorOperacao, valorAtual, valor);
      valorOperacao = operacao;
      document.formuCalculadora.visor.value = valorAtual;
   } else {
      valorAtual = valor;
      valorOperacao = operacao;
   }
}