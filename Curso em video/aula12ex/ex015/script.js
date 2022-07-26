function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            document.body.style.background = 'black'
            if(idade >= 0 && idade <10) {
                img.setAttribute('src', 'fotos/criancam.jpg.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'fotos/jovemm.jpeg')
            }
            else if (idade <50){
                img.setAttribute('src', 'fotos/adultom.jpg')
            }
            else{
                img.setAttribute('src', 'fotos/velhom.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            document.body.style.background = 'pink'
            if(idade >= 0 && idade <10) {
                img.setAttribute('src', 'fotos/criancaf.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'fotos/jovemf.jpg')
            }
            else if (idade <50){
                img.setAttribute('src', 'fotos/adultof.jpg')
            }
            else{
                img.setAttribute('src', 'fotos/velhaf.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos : ${genero} com a idade de ${idade} anos. `
        res.appendChild(img)
    }
}