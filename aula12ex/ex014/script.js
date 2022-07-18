function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas. `
    if (hora >= 0 && hora < 12) {
       img.src = 'Fotos/manha.png'
       document.body.style.background = '#fedb54' 
    }
    else if (hora >= 12 &&  hora < 18) {
        img.src = 'Fotos/tarde.png'
        document.body.style.background = '#eb6708' 
    }
    else {
        img.src = 'Fotos/noite.png'
        document.body.style.background = '#241a1b'  
    }
}