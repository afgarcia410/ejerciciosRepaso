const letras= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E'];
const calcularLetra=()=>{
    var num=document.getElementById("numero").value;
    if(isNaN(num)){
        alert("El valor introducido no es un numero")
    }else{
        if(num <10000000 || num >99999999){
            alert("numero fuera de rango");
            return 
        }
    const resto= num %23;
    const letra=letras[resto];
    alert("la letra es: "+letra);
    }
}