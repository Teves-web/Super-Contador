function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = doccument.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.lengh == 0) {
        window.alert('[ERRO] Faltam dados!!!')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c}`
        }
    }
}