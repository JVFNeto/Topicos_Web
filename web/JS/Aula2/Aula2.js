var dolar, real;

function melhor(){
    dolar= parseFloat(frDados.txDolar.value.replace(",","."));
    real= parseFloat(frDados.txReal.value.replace(",","."));
    if(dolar > (real * 5.40) ){
        document.getElementById("real").style.filter="grayscale(100%)";
        document.getElementById("dolar").style.filter="grayscale(0%)";
    }
    else{
        document.getElementById("dolar").style.filter="grayscale(100%)";
        document.getElementById("real").style.filter="grayscale(0%)";
    }
    
}

function limpar(){
    document.getElementById("dolar").style.filter="grayscale(0%)";
    document.getElementById("real").style.filter="grayscale(0%)";
}