function moeda(valor){
    return valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    });
}

function calcular(){

    let consumo = parseFloat(document.getElementById("consumo").value);

    if(!consumo){
        alert("Informe o consumo mensal de diesel");
        return;
    }

    const diesel = 7.00;
    const economiaPercentual = 3;
    const custoFQ4Litro = 165;

    // =========================
    // DOSAGEM
    // =========================

    const dosagemContinuo = 1;
    const dosagemChoque = 2;

    let fq4_continuo = (consumo * dosagemContinuo) / 1000;
    let fq4_choque = (consumo * dosagemChoque) / 1000;

    // investimento baseado no contínuo (mensal)
    let investimento = fq4_continuo * custoFQ4Litro;

    let economia = consumo * diesel * (economiaPercentual / 100);

    let retorno = economia - investimento;

    let roi = (retorno / investimento) * 100;

    let anual = retorno * 12;

    document.getElementById("fq4").innerHTML =
        fq4_continuo.toFixed(2) + " L";

    document.getElementById("fq4choque").innerHTML =
        fq4_choque.toFixed(2) + " L";

    document.getElementById("investimento").innerHTML =
        moeda(investimento);

    document.getElementById("economia").innerHTML =
        moeda(economia);

    document.getElementById("retorno").innerHTML =
        moeda(retorno);

    document.getElementById("roi").innerHTML =
        roi.toFixed(1) + "%";

    document.getElementById("anual").innerHTML =
        moeda(anual);
}
