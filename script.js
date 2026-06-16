function moeda(valor){
    return valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    });
}

function calcular(){

    let diesel =
        parseFloat(document.getElementById('diesel').value);

    let volume =
        parseFloat(document.getElementById('volume').value);

    let economia =
        parseFloat(document.getElementById('economia').value);

    let dosagem =
        parseFloat(document.getElementById('dosagem').value);

    let bombona =
        parseFloat(document.getElementById('bombona').value);

    let litrosFQ4 =
        (volume * dosagem) / 1000;

    let custoLitroFQ4 =
        bombona / 20;

    let investimento =
        litrosFQ4 * custoLitroFQ4;

    let economiaTotal =
        volume * diesel * (economia / 100);

    let retorno =
        economiaTotal - investimento;

    document.getElementById('fq4').innerHTML =
        litrosFQ4.toFixed(2) + " L";

    document.getElementById('investimento').innerHTML =
        moeda(investimento);

    document.getElementById('economiaTotal').innerHTML =
        moeda(economiaTotal);

    document.getElementById('retorno').innerHTML =
        moeda(retorno);
}

calcular();
