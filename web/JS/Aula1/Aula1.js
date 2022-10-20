var gas, eta;

function melhor(){
    eta= parseFloat(frDados.txEtanol.value.replace(",","."));
    gas= parseFloat(frDados.txGasolina.value.replace(",","."));
    if(eta < 0.7*gas){
        document.getElementById("eta").style.filter="grayscale(100%)";
        document.getElementById("gas").style.filter="grayscale(0%)";
    }
    else{
        document.getElementById("gas").style.filter="grayscale(100%)";
        document.getElementById("eta").style.filter="grayscale(0%)";
    }
    
}

function limpar(){
    document.getElementById("eta").style.filter="grayscale(0%)";
    document.getElementById("gas").style.filter="grayscale(0%)";
}