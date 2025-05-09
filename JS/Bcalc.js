        function cal(){
            A=document.getElementById("a").value;
            B=document.getElementById("b").value;
            OP=document.getElementById("op").value;
            console.log(OP)
            switch(OP){
                case 'ADDITION' : C=(+A + +B);
                result.innerHTML = "Addition of A+B is "+C;
                break;
                case 'SUBTRACTION' : C=(A-B);
                result.innerHTML = "subtraction of A-B is "+C;
                break;
                case 'MULTIPLICATION' : C=(A*B);
                result.innerHTML = "multiplication of A*B is "+C;
                break;
                case 'DIVISION' : C=(A/B);
                result.innerHTML = "A divided by B is "+C;
                break;
                case 'POWER' : C=(A**B);
                result.innerHTML = "A to the power B is "+C;
                break;
                case 'MOD' : C=(A%B);
                result.innerHTML = "A modulo B is "+C;
                break;
            }
        }