const rendimento = ()=>{
    init = Number(document.getElementById("capitalinicial").value)
    taxa = Number(document.getElementById("taxa").value)
    time = Number(document.getElementById("tempo").value)
    resultado2 = ((init*((1+taxa)**time))-init).toFixed(2)
    document.getElementById("resultado").textContent=`O rendimento nessas condições é ${resultado2}`
    const meses = []
    for (let i=0; i<time; i++){
        const mont = (init*((1+taxa)**i))
        meses.push(mont)
    }
    meses1 = meses.map(x=>{
        const posicao = (Number(meses.indexOf(x))+1) + "°"
        return `O montante no ${posicao} mês é ${(x).toFixed(2)}`
    })
    document.getElementById("evolu").textContent=`Crescimento mensal do montante: ${meses1}`
}