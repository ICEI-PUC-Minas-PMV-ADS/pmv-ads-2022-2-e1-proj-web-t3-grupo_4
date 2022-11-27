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
    