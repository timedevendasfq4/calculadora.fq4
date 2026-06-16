function moeda(valor){
    return valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    });
}

function calcular(){

    let consumo = parseFloat(document.getElementById("consumo").value);

    // se vazio, não calcula
    if(!consumo){
        alert("Digite o consumo mensal de diesel");
        return;
    }

    const diesel = 7.00;
    const economiaPercentual = 3;
    const custoFQ4Litro = 165;
    const dosagem = 1;

    let litrosFQ4 = (consumo * dosagem) / 1000;

    let investimento = litrosFQ4 * custoFQ4Litro;

    let economia = consumo * diesel * (economiaPercentual / 100);

    let retorno = economia - investimento;

    let roi = (retorno / investimento) * 100;

    let anual = retorno * 12;

    document.getElementById("investimento").innerHTML = moeda(investimento);
    document.getElementById("economia").innerHTML = moeda(economia);
    document.getElementById("retorno").innerHTML = moeda(retorno);
    document.getElementById("roi").innerHTML = roi.toFixed(1) + "%";
    document.getElementById("anual").innerHTML = moeda(anual);
}
