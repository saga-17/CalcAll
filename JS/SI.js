    function cal(){

        P = document.getElementById("p").value;
        console.log("p")
        T = document.getElementById("t").value;
        R = document.getElementById("r").value;
        console.log(P*T*R)/100;
        result.innerHTML = "Interest amount is "+(P*T*R)/100;

    }