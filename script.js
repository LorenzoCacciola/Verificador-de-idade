function verificar() {
    var data = new Date()//pegar a data atual
    var ano = data.getFullYear()//olhar dentro da data atual o ano
    var fano = document.getElementById('txtano')//chamar o input onde voce colocou o ano de nascimento
    var res = document.querySelector('div#res')//chamar a div res, que é onde vai aparecer o resultado final e a foto
    if (fano.value.length == 0 ||Number(fano.value) > ano) {
        window.alert('[ERRO] verifique se os dados estao corretos!')
    }else {
        var fsex = document.getElementsByName('radsex')//chamar a div onde dentro tem os input q decidem o sexo da pessoa
        var idade = ano - Number(fano.value)//define que idade é = o ano - o valor de fano, que é o ano digitado 
        var genero = ''
        var img = document.createElement('img')//criar imagem
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
          
            if(idade >= 0 && idade < 10){
                //crianças
                img.setAttribute('src', 'fotobebeh.png')
            
           
            } else if(idade > 10 && idade <= 21) {
                 //jovem
                 img.setAttribute('src', 'fotoadolescenteh.png')
                
                }else if (idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute('src','fotoadultohomem.png')
           
            }else if (idade > 50) {
                //idoso
                img.setAttribute('src','fotoidosoh.png')
            }
      
        }else if(fsex[1].checked) {
            genero ='Mulher'
           
           
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotobebem.png')
            
           
            } else if(idade > 10 && idade <= 21) {
                 //jovem
                 img.setAttribute('src', 'fotoadolescentem.png')
           
                }else if (idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute('src','fotoadultom.png')
          
            }else if (idade > 50) {
                //idoso
                img.setAttribute('src','fotoidosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos`
        res.appendChild(img)
            
    }
    }