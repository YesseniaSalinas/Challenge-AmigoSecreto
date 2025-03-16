// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let guardarIndiceUsado = [];
let ulListaAmigo = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    let textAmigo = document.getElementById('amigo').value;
    if(textAmigo.length == 0){
        alert('Por favor, inserte un nombre.')
        limpiarTexto();
    }else{
        listaAmigos.push(textAmigo);
        ulListaAmigo.innerHTML += `<li>${textAmigo}</li>`;
        limpiarTexto();
    } 
    
}

function limpiarTexto(){
    texto = document.querySelector('#amigo').value  = '';
}


function sortearAmigo(){
    if (listaAmigos.length == 0){
        alert('Ingrese nombres de amigos para el sorteo');
    }else{
        let nombreAmigo = generarAmigoAleatorio();
        ulResultado.innerHTML+=`<li>${nombreAmigo}</li>`;
    }
}

function asignarTexto(elem,texto){
    let elentoHTML = document.querySelector(elem);
    elentoHTML.innerHTML = texto;
}

function generarAmigoAleatorio(){
    let numeroMaximo = listaAmigos.length;
    let i = Math.floor(Math.random()*numeroMaximo);
    console.log(i)
    
    //crear una segunda lista donde se guarden los nombres q ya salieron y validar que no se repitan 
    if(guardarIndiceUsado.length == numeroMaximo){
        
        alert('Ya se sortearon todos los Amigos Secretos.');
        document.querySelector('#sortear').setAttribute('disabled','true');
    }else{
        if(guardarIndiceUsado.includes(i)){
            return generarAmigoAleatorio();
        }
        else{
            guardarIndiceUsado.push(i);
            //console.log(i);
            return listaAmigos[i];
        }
    }


}




