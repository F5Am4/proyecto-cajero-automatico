
function formula() {
    var saldoOriginal=parseInt(document.getElementById('C1').value);
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);


    if(Cantidad1 >= '10' && Cantidad1 <= '1000'){
        var resultadoResta = document.getElementById('C1').value=(Cantidad1 - CantidadT);
        if((resultadoResta <= '10') && (resultadoResta <= '1000')){
            alert("La operación es incorrecta.");
            document.getElementById('C1').value = saldoOriginal; 
            document.getElementById('Cant').value = '0';
        }else{
            document.getElementById('C2').value=(Cantidad2 + CantidadT);
        }
    }
}

function formula2() {
    var saldoOriginal=parseInt(document.getElementById('C1').value);
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);


    if(Cantidad2 => '10' && Cantidad2 <= '1000'){
        var resultadoResta = document.getElementById('C2').value=(Cantidad2 - CantidadT);
        if((resultadoResta <= '10') && (resultadoResta <= '1000')){
            alert("La operación es incorrecta.");
            document.getElementById('C2').value = Cantidad2; 
            document.getElementById('Cant').value = '0';
        }else{
            document.getElementById('C1').value=(Cantidad1 + CantidadT);
        }
    }
}

function formula3() {
    var saldoOriginal=parseInt(document.getElementById('C1').value);
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    

    if(Cantidad1 >= '10' && Cantidad1 <= '1000'){
        var resultadoSuma = document.getElementById('C1').value=(Cantidad1 + CantidadT);
        if((resultadoSuma >= '10') && (resultadoSuma >= '1000')){
            alert("La operación es incorrecta.");
            document.getElementById('C1').value = saldoOriginal; 
            document.getElementById('Cant').value = '0';
        }
    }
}

function formula4() {
    var saldoOriginal=parseInt(document.getElementById('C1').value);
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    

    if(Cantidad2 => '10' && Cantidad2 <= '1000'){
        var resultadoSuma = document.getElementById('C2').value=(CantidadT + Cantidad2);
        if((resultadoSuma >= '10') && (resultadoSuma >= '1000')){
            alert("La operación es incorrecta.");
            document.getElementById('C2').value = Cantidad2; 
            document.getElementById('Cant').value = '0';
        }
    }
}

function formula5() {
    var saldoOriginal=parseInt(document.getElementById('C1').value);
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);

    if(Cantidad1 => '10' && Cantidad1 <= '1000'){
        var resultadoResta = document.getElementById('C1').value=(Cantidad1 - CantidadT);
        if((resultadoResta <= '10') && (resultadoResta <= '1000')){
            alert("La operación es incorrecta.");
            document.getElementById('C1').value = saldoOriginal; 
            document.getElementById('Cant').value = '0';
        }
    }   
}

function formula6() {
    var saldoOriginal=parseInt(document.getElementById('C1').value);
    var CantidadT=parseInt(document.getElementById('Cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    
    if(Cantidad2 => '10' && Cantidad2 <= '1000'){
        var resultadoResta = document.getElementById('C2').value=(Cantidad2 - CantidadT);
        if((resultadoResta <= '10') && (resultadoResta <= '1000')){
            alert("La operación es incorrecta.");
            document.getElementById('C2').value = Cantidad2; 
            document.getElementById('Cant').value = '0';
        }
    }
}