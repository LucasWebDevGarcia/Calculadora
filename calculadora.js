function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function apagar(){
    document.getElementById('resultado').innerHTML = " ";
}

function deletar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function igual(){
    var igual = document.getElementById('resultado').innerHTML;

    if(resultado){
        document.getElementById('resultado').innerHTML = eval(igual);
    }
}