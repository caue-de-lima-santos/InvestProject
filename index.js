const jurosSimples = ()=>{
    init = Number(document.getElementById("capitalinicial").value)
    taxa = Number(document.getElementById("taxa").value)
    time = Number(document.getElementById("tempo").value)
    resultado = (init*taxa*time)
    document.getElementById("resultado").textContent=`O juros simples é ${resultado}`
}
const MontanteSimples = ()=>{
    init = Number(document.getElementById("capitalinicial").value)
    taxa = Number(document.getElementById("taxa").value)
    time = Number(document.getElementById("tempo").value)
    resultado = init+(taxa*time*init)
    document.getElementById("resultado").textContent=`O montante simples é ${resultado}`
}
const MontanteCompostos = ()=>{
    init = Number(document.getElementById("capitalinicial").value)
    taxa = Number(document.getElementById("taxa").value)
    time = Number(document.getElementById("tempo").value)
    resultado = (init*((1+taxa)**time)).toFixed(2)
    document.getElementById("resultado").textContent=`O montante composto é ${resultado}`
}
const jurosCompostos = ()=>{
    init = Number(document.getElementById("capitalinicial").value)
    taxa = Number(document.getElementById("taxa").value)
    time = Number(document.getElementById("tempo").value)
    resultado = ((init*((1+taxa)**time))-init).toFixed(2)
    document.getElementById("resultado").textContent=`O juros composto é ${resultado}`
}
console.log(MontanteCompostos(250)(0.01, 1200))
console.log(MontanteSimples(250)(0.01, 1200))