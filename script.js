function calcular(){

    let consumo =
    parseFloat(document.getElementById("consumo").value);

    let diesel = 7.00;
    let economiaPercentual = 3;
    let custoFQ4Litro = 165;
    let dosagem = 1;

    let litrosFQ4 =
    (consumo * dosagem) / 1000;

    let investimento =
    litrosFQ4 * custoFQ4Litro;

    let economia =
    consumo * diesel * (economiaPercentual / 100);

    let retorno =
    economia - investimento;

    let anual =
    retorno * 12;

    document.getElementById("investimento").innerHTML =
    moeda(investimento);

    document.getElementById("economia").innerHTML =
    moeda(economia);

    document.getElementById("retorno").innerHTML =
    moeda(retorno);

    document.getElementById("anual").innerHTML =
    moeda(anual);
}
