/*
1 - Imprima a tabuada do 5 (5 x 1 até 5 x 10) utilizando um laço de repetição.
2 - Calcule a soma de todos os números de 1 a 100 utilizando um laço de repetição.
3 - Calcule a soma dos dígitos de um número fornecido pelo usuário utilizando um laço de repetição.
4 - Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.
5 - Implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.(desafio)
(todas as atividades acima deve ser feita no padrão de uma função)
6 - criar um menu de opções onde o usuario pode escolher entre 6 opções 
(1 - vai imprimir o resultado da primeira questão, 2 - vai imprimir o resultado da segunda questão, ..., 
6 opção vai fechar o menu)*/

/*----------------While--------------------------*/

/* 1- Imprima a tabuada do 5 (5 x 1 até 5 x 10) utilizando um laço de repetição.*/

function multiplicacao (num){ 
contador = 0
while (contador < 10){
    contador = contador + 1
     console.log (num,' x ',contador,'=',contador*num)     
}
}
  multiplicacao(5)

/* 2- Calcule a soma de todos os números de 1 a 100 utilizando um laço de repetição.*/

function somaTudo(){
contador = 0
resposta = 0
 
 while (contador < 100) {
    contador = contador + 1
    resposta = resposta + contador
    console.log (resposta)
 }
}
somaTudo()


/*3- Calcule a soma dos dígitos de um número fornecido pelo usuário utilizando um laço de repetição.*/

function Soma(){
  
    resultado = 0 
    numero_usuario = 0
      
    while(true){
      numero_usuario = prompt ("digite um numero: ")
      
      if (numero_usuario == 0){ 
        break 
      }
    console.log ("valor atual de resultado" + resultado)
    resultado = resultado + parseInt (numero_usuario)
    console.log("valor atual de resultado + numero_usuario: " + resultado)   
    }
  alert(resultado)
  }
  
  soma()
  

 /*4 - Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.*/

 function fibonacci (){ 
    contador = 0
    n1 = -1
    n2 = 1
    n3 = 0
    while (contador <= 10){
        n3 = n1 + n2
        contador = contador +1
        console.log (n3)
        n1 = n2
        n2 = n3
    }   
    }
    fibonacci ()
    

   /* 5 - Implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.(desafio)
(todas as atividades acima deve ser feita no padrão de uma função)*/


function reverse (){
  string1 = ("walmir")
  string2 = ""

  for ( i = string1.length - 1; i >= 0; i--) {
    string2 += string1[i]
}
console.log("string1 : " + string1 )
console.log("string2: " + string2)
  
}
  reverse()

 /* 6 - criar um menu de opções onde o usuario pode escolher entre 6 opções 
  (1 - vai imprimir o resultado da primeira questão, 2 - vai imprimir o resultado da segunda questão, ..., 
  6 opção vai fechar o menu)*/
  
numero = 0 
while (true){
numero = prompt ("Digite numero de 1 a 6")
  if (numero == 0){
    break
  }
else if (numero == 1){ 
tabuada ()
  break
}
  else if (numero == 2){
    soma()
    break
  }    
    else if (numero == 3){
      somaDigitosUsuario ()
      break
    }
      else if (numero == 4){ 
      fibonacci ()
        break
      }
      else if (numero == 5){ 
      reverse ()
        break
      }
      }
           
  