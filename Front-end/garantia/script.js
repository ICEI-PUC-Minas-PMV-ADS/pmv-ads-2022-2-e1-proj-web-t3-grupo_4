//copiado de https://horadecodar.com.br/2022/02/04/calcular-a-diferenca-de-dias-entre-duas-datas-em-javascript/

function imprimeDiasGarantia(data){
    const hoje  = new Date();

    const diferencaEmMs   = new Date(data) - new Date(hoje)
    const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);

    if (diferencaEmDias < 0) {
        document.write('Garantia expirada');
    } else {
        document.write(Math.trunc(diferencaEmDias));
    }
}
    