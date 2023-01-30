        function btn_copiar(frase){
            document.getElementById("cuadroDeTexto").select();

            document.execCommand("copy");

            document.getElementById("mensaje").focus();
           
        }
    
        function encriptarTexto(){
            let frase = document.getElementById("mensaje").value;
            frase = frase.toLowerCase();
                frase = frase.replaceAll("e","enter");
                frase = frase.replaceAll("i","imes");
                frase = frase.replaceAll("a","ai");
                frase = frase.replaceAll("o","ober");
                frase = frase.replaceAll("u","ufat");

                document.getElementById("cuadroDeTexto").innerHTML=frase;
                
        }
    
        function desencriptarTexto(){
            let frase = document.getElementById("mensaje").value;
            frase = frase.toLowerCase();
                frase = frase.replaceAll("enter","e");
                frase = frase.replaceAll("imes","i");
                frase = frase.replaceAll("ai","a");
                frase = frase.replaceAll("ober","o");
                frase = frase.replaceAll("ufat","u");

                document.getElementById("cuadroDeTexto").innerHTML=frase;
            
        }