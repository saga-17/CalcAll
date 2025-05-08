    function cal(){

        P = document.getElementById("p").value;
        console.log("p")
        T = document.getElementById("t").value;
        R = document.getElementById("r").value;
        N = document.getElementById("n").value;
        console.log((P*(1+(R/N))**(N*T))-P);
        result.innerHTML = "Interest amount is "+((P*(1+(R/N))**(N*T))-P);

    }