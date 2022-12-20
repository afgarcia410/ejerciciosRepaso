class calculadora{
    init(){
        let clear=document.getElementById("clear");
        clear.onclick = function(){
            alert("has pinchado el clear");
        }
        let num1=document.getElementById("div1");
        num1.onclick = function(){
            document.getElementById('result').value += 1;
        }
        let num2=document.getElementById("div2");
        num2.onclick = function(){
            document.getElementById('result').value += 2;
        }
        let num3=document.getElementById("div3");
        num3.onclick = function(){
            document.getElementById('result').value += 3;
        }
        let num4=document.getElementById("div4");
        num4.onclick = function(){
            document.getElementById('result').value += 4;
        }
        let num5=document.getElementById("div5");
        num5.onclick = function(){
            document.getElementById('result').value += 5;
        }
        let num6=document.getElementById("div6");
        num6.onclick = function(){
            document.getElementById('result').value += 6;
        }
        let num7=document.getElementById("div7");
        num7.onclick = function(){
            document.getElementById('result').value += 7;
        }
        let num8=document.getElementById("div8");
        num8.onclick = function(){
            document.getElementById('result').value += 8;
        }
        let num9=document.getElementById("div9");
        num9.onclick = function(){
            document.getElementById('result').value += 9;
        }
        let num0=document.getElementById("div0");
        num0.onclick = function(){
            document.getElementById('result').value += 0;
        }
        let suma=document.getElementById("suma");
        suma.onclick = function(){
            document.getElementById('result').value += '+';
        }
        let resta=document.getElementById("resta");
        resta.onclick = function(){
            document.getElementById('result').value += '-';
        }
        let igual=document.getElementById("igual");
        igual.onclick = function(){
            let primerNum = document.getElementById('result').value

            let segundoNum = eval(primerNum);
        
            document.getElementById('result').value = segundoNum
        
            return segundoNum
        }
    }
}
export{calculadora};