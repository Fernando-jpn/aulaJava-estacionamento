function estacionamento(){
    var vcliente = document.getElementById("idndc").value;
    var vplaca = document.getElementById("idplaca").value;
    var vcarro = document.getElementById("idcarro").value;
    var vqtddias = parseInt(document.getElementById("idqddias").value);
    var vvdiaria = parseFloat( document.getElementById("idvdiaria").value);
}

var total = (parseFloat(vqtddias)*parseFloat(vvdiaria));

