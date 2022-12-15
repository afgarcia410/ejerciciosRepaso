class dni{
    letras= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E'];
    check(numeroDni, valorLetra){
        let comprobar = false;  
        if(numeroDni.length == 8){
                let resto = numeroDni%23;
                var resultLetra = this.letras[resto];
                if(resultLetra == valorLetra){
                    comprobar = true;
                }
            }
            return comprobar;
        };
    } 
export {dni};
