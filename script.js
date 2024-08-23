


console.log("Importado! Funcionou!")


function executar() {
    console.log("=== INÍCIO FUNÇÃO EXECUTAR ===")

    // Entrada de dados
    // Buscar os values dos inputs no DOM

    // Capturando elementos da tela
    let elementoNumeroUm = document.getElementById("numeroUm")
    let elementoNumeroDois = document.getElementById("numeroDois")
    let elementoNumeroTres = document.getElementById("numeroTres")

    // Pegar values dos elementos capturas
    let valorNumeroUm = Number(elementoNumeroUm.value)
    let valorNumeroDois = Number(elementoNumeroDois.value)
    let valorNumeroTres = Number(elementoNumeroTres.value)

    // Processamento
    // Somar os valores dos inputs que pegamos da tela
    let resultadoSoma = valorNumeroUm + valorNumeroDois + valorNumeroTres

    // Saída de dados
    // Pegar o elemento do DOM que quero mudar o texto de exibição
    // Botar o valor do resultado do processamento no innerHTML
    // document.getElementById("resultado").innerHTML = resultadoSoma
    let elementoResultado = document.getElementById("resultado")
    elementoResultado.innerHTML = resultadoSoma

    console.log("=== FIM FUNÇÃO EXECUTAR ===")
}