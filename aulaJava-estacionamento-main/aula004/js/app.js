function calcular(){
    var nome = document.getElementById("idnome").value;
    var placa = document.getElementById("idplaca").value;
    var carro = document.getElementById("idcarro").value;
    var dias = parseInt(document.getElementById("iddias").value);
    var diaria = parseFloat( document.getElementById("iddiaria").value);
    var bruto = dias * diaria;  // Calcular o total sem desconto
    var valortotal;             // Variável para armazenar o valor final
    var desconto;               // Variável para armazenar o desconto

    // Verificar se o total ultrapassa 150 para aplicar desconto
    if(bruto > 150){
        desconto = bruto * 0.10; // Calcular 10% de desconto
        valortotal = bruto - desconto; // Calcular o valor final após o desconto
    }
    else{
        valortotal = bruto; // Sem desconto
        desconto = 0; // Sem desconto aplicado
    }
    // Exibir os resultados nos inputs
    document.getElementById("valortotal").value = valortotal.toFixed(2); //toFixed usado somente para números
    document.getElementById("desconto").value = desconto.toFixed(2);
    document.getElementById("nome").value = nome;
    document.getElementById("carro").value = carro;
}
function limpar(){
    // Limpar o carmpos de entrada
    document.getElementById("idnome").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("idplaca").value = "";
    document.getElementById("idcarro").value = "";
    document.getElementById("carro").value = "";
    document.getElementById("idplaca").value = "";
    document.getElementById("iddias").value = "";
    document.getElementById("iddiaria").value = "";
    document.getElementById("valortotal").value = "";
    document.getElementById("desconto").value = "";
}