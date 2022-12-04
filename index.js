<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array e seus metodos</title>
</head>
<body>
    
 <script>

function inicio_Array(){

let opcao = parseInt(prompt("Selecione a opcão de desejada: \n 1). Listagem \n 2). Triagem de Nº < 50 e > 50 \n 3). Inventário Drofo e Topper \n 4). Sair"));

switch(opcao){

    case 1:

        leituraListagem_array();
        inicio_Array();

    case 2:

        triagem_array();
        inicio_Array();

    case 3:

        inventario_drofoTopper();
        inicio_Array()

    case 4:

        sair_funcao();
        break;
    
    default:

        alert("Opção inválida! Selecione uma opção de 1 a 4");
        inicio_Array();

}

function leituraListagem_array(){

let listagemArray = [];
    if(listagemArray.length > 20){

        alert("Limite atingido");

    }else{

        let contador = 0;
            while(contador < 20){
                
                contador++;
                listagemArray.push(contador);

            }
    }

alert(listagemArray);
}

function triagem_array(){

let menoresCinquenta = [];
let maioresCinquenta = [];
let contador = 12;

while(contador > 0){

    let numero = parseInt(prompt("Insira um número: "));
        if(numero == "" || numero == NaN){
            alert("Numero invalido. Tente novamente!");
            leituraListagem_array();
        }

    if(numero > 50){

        maioresCinquenta.push(numero);

    }else{

        menoresCinquenta.push(numero);

    }
    contador--;
}

alert(`Número maiores que 50 --> ${maioresCinquenta} \n Números menores que 50 --> ${menoresCinquenta}`);

}

function inventario_drofoTopper(){

alert("Finalize o Programa e verá o resultado em sua tela");

let drofoInventario = ["Anel da Invisibilidade", "Botas Mágicas(2)", "Poção do Sono", "Poção da Inocência(2)"];

let tropperInventario = ["Capa da Invisibilidade", "Pedra do Dispertar", "Varinha das Varinhas", "Poção da Inocência", "Poção da Mentira(2)", "Poção de Anti-Inteligência"];

document.write("Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do sono e duas poções da inocência em seu inventário e nessa ordem. <br> Torper terá uma capa da invisibilidade, uma pedra do despertar,  uma varinha das varinhas, uma poção da inocência e duas poções da mentira, poção anti-inteligência e nessa ordem. <br> No meio de sua jornada, Torper consumiu uma das poções da mentira, perdeu sua pedra e ganhou um par de botar mágicas do Drofo, achou um escudo mágico e uma espada mágica.<br>");
document.write("No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do sono e consumiu a poção anti-inteligência do Torper, encontrou um ovo de dragão e uma coxinha.");
document.write("<br><br> Fim da Jornada de Drofo e Tropper <br><br> Listando Itens do Inventário: <br>" + "Tropper --> " + tropperInventario + "<br> Drofo -->" + drofoInventario);

tropperInventario[4] = "Poção da Mentira"; //Consome Poção
delete tropperInventario[1];    //Perde a Pedra
tropperInventario[1] = "Bota Mágica"; //Tropper recebe o par de botas de Drofo
tropperInventario.pop(); //Drofo consome Poção de Anti - Inteligência do Tropper
tropperInventario.push("Escudo Mágico", "Espada Mágica"); //Tropper acha Escudo e Espada Mágica
drofoInventario[1] = "Botas Mágicas(2)"; //Drofo encontra mais uma bota mágica
delete drofoInventario[3]; //Drofo consumiu Poção do Sono
drofoInventario[1] = "Coxinha"; //Drofo encontrou uma coxinha
drofoInventario.push("Ovo de Dragão");  //Drofo encontrou um Ovo de Dragão

}

function sair_funcao(){

let confirma_saida = confirm("Deseja sair do programa?");
    if(confirma_saida){
        alert("Obrigado! Volte sempre!");
        window.close();
    }else{
        inicio_Array();
    }
}
}
inicio_Array()
 </script>
</body>
</html>
