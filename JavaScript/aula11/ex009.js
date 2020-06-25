 
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nacionalidade</title>
</head>
<body>
    <h1>Testes de Nacionalidades</h1>
    Digite o nome de um país: <input type="text" name="txtnacio" id="txtnacio"> país de origem
    <input type="button" value="Verificar" onclick="calcular()">
    <div id="result">

    </div>
    <script>
        function calcular(){                                                                                                                
            var txtnacio = window.document.querySelcetor('input#txtnacio')
            var result   = window.document.querySelector('div#result')
            var pais = text(txtnacio.value)
            result.innerHTML  = `<p>Sua nacionalidade é <b>${pais}</b></p>`
            if(pais != 'Brasil'){
                result.innerHTML == `<p>Voce é <b>BRASILEIRO</b>`      

            }
                
            }
            
        
    </script>
    
</body>
</html>
*/

 var pais = 'Brasil'
 console.log(`Vivendo em ${pais}`)
 if (pais == 'Brasil'){
     console.log('Você é Brasileiro!')
 } else{
     console.log('Você é Estranjeiro!')
 }