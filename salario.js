import entradaDeDados from 'readline-sync';

//input\inflacao.js \node salario.js  
let array_salarios = [
  { ano: 2010, salario: 510 },
  { ano: 2011, salario: 545 },
  { ano: 2012, salario: 622 },
  { ano: 2013, salario: 678 },
  { ano: 2014, salario: 724 },
  { ano: 2015, salario: 788 },
  { ano: 2016, salario: 880 },
  { ano: 2017, salario: 937 },
  { ano: 2018, salario: 954 },
  { ano: 2019, salario: 998 },
  { ano: 2020, salario: 1045 },
]
// coleção de dados que serão utilizados na aplicação.  =====>>>>>> SALARIOS   /// INFLACAO 

let array_inflacao = [

  { ano: 2010, inflacao: 5.91 },
  { ano: 2011, inflacao: 6.50 },
  { ano: 2012, inflacao: 5.84 },
  { ano: 2013, inflacao: 5.91 },
  { ano: 2014, inflacao: 6.41 },
  { ano: 2015, inflacao: 10.67 },
  { ano: 2016, inflacao: 6.29 },
  { ano: 2017, inflacao: 2.95 },
  { ano: 2018, inflacao: 3.75 },
  { ano: 2019, inflacao: 4.31 },
  { ano: 2020, inflacao: 4.52 },
]
console.log(" Escolha uma das Alternativas : \n");
console.log("1 - Listar os salários mínimos de 2010 à 2020\n");
console.log("2 - Listar o índice IPCA de 2010 à 2020\n");
console.log("3- Comparação entre o percentual de aumento salárial e o IPCA\n");



const opcao = entradaDeDados.question(" Digite o número da sua escolha: (1, 2 , 3  ) \n ");
// temos as estruturas de condição! Onde iremos escolher a opção

switch (opcao) {
  case '1':
    for (let i = 0; i < array_salarios.length; i++) {
      let AnoRecente = array_salarios[i].ano;
      let SalarioRecente = array_salarios[i].salario;


      console.log(" Ano :" + String(AnoRecente).padStart(35, '.') + "\n Salário Mínimo:" + String("R$ " + SalarioRecente).padStart(22, '.') + ",00\n\n")
    }
    break;
  case '2':              // estrutura de repetição WHILE FUNFANDO!!!!!!!

    let contador = 0;

    while (contador < array_inflacao.length) {
      let inflacaoAnual = array_inflacao[contador].inflacao;
      let AnoAtual = array_inflacao[contador].ano;
      let inflacaoAnual_Formatada = inflacaoAnual.toFixed(2).replace(".", ",");

      console.log(" Ano : " + String(AnoAtual).padStart(31, '.') + "\n Inflação IPCA:" + String(inflacaoAnual_Formatada).padStart(22, '.') + "%\n\n")

      contador = contador + 1;
    }
    break;


  case '3':

    for (let c = 0; c < array_inflacao.length; c++) {
      let anoCalculo = array_salarios[c].ano;
      let salarioCalculo = array_salarios[c].salario;
      let inflacaoCalculo = array_inflacao[c].inflacao


      let salarioAnterior = array_salarios[0].salario    /// CALCULOOOOO!  
      let diferenca = salarioCalculo - salarioAnterior
      let resultado = (diferenca / salarioAnterior) * 100


      let resultado_formatado = resultado.toFixed(2).replace(".", ","); // formatação de dados recebidossss!! 



      console.log("Ano:" + String(anoCalculo).padStart(36, '.') + "\nSalário Mínimo:" + String("R$ " + salarioCalculo).padStart(22, '.') + ",00 \nINFLAÇÃO IPCA:" + String(inflacaoCalculo).padStart(25, '.') + "%\nCrescimento Salarial:" + String(resultado_formatado).padStart(18, '.') + "%\n");


      // impressão de tudo já formatado! 

    }
    break;

  default:
    console.log("Número Inválido, tente novamente. Escolha uma opção válida (1,2,3) ");
    break
}


