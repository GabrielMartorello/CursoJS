function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('ERRO Faltam dados')
        res.innerHTML = "ERRO"
    }
    else {
        res.innerHTML = 'Contando : <br>'
        var ini2 = Number(ini.value)
        var fim2 = Number(fim.value)
        var pas2 = Number(pas.value)
        if (pas2 <= 0) {
            alert('passo invalido ! Considerando PASSO 1')
            pas2 = 1
        }
        if (ini2 < fim2) {
            for (var a = ini2; a <= fim2; a += pas2) {
                res.innerHTML += ` ${a} \u{1F449}`
            }
            
        }
        else {
            for (var a = ini2; a >= fim2; a -= pas2) {
                res.innerHTML += ` ${a} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F919}`
    }
}