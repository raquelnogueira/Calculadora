import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'Calculadora Angular';

   public numeroAdicionado: string = '';
   public valorAtual: number;
   public valorOperacao: string;
   public valorVisor: any = '';


   constructor() { }

   ngOnInit() {
   }

   limpar() {
      this.valorAtual;
      this.valorOperacao;
      this.valorVisor = '';
   }

   insereNumero(numero) {
      this.valorVisor = this.valorVisor + numero;
   }

   // Função para executar as operações.
   realizaOperacao(operacao, valor1, valor2) {
      switch (operacao) {
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
      return (valor);
   }

   // Função para controlar o fluxo
   controleFluxo(operacao) {
      var valor = this.valorVisor;
      
      // Realiza o calculo final
      if (this.valorOperacao !== 'undefined' && operacao === 'resultado') {
         this.valorAtual = this.realizaOperacao(this.valorOperacao, this.valorAtual, valor);
         this.valorVisor = this.valorAtual;
         delete this.valorAtual;
         return (0);
      }

      // Realiza a acumulação dos calculos
      if (!isNullOrUndefined(this.valorAtual)) {
         this.valorAtual = this.realizaOperacao(this.valorOperacao, this.valorAtual, valor);
         this.valorOperacao = operacao;
         this.valorVisor = this.valorAtual;
      } else {
         this.valorAtual = valor;
         this.valorOperacao = operacao;
      }

      this.valorVisor = '';
   }
}