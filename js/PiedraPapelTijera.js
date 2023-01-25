function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function eleccion(jugada){
    let resultado=""
    if (jugada == 1){
        resultado = "Piedra 🥌" 
    } else if (jugada == 2){
        resultado = "Papel 🗞"
    } else if (jugada == 3){
        resultado = "Tijera ✂"
    } else {
       resultado = "MAL ELEGIDO"
    }
    return resultado
}
//Combate
let jugador = 0; 
let pc = 0;
let perdidas = 0;
let victorias = 0;
let empates = 0;
while (perdidas < 3 && victorias < 3) {
    pc = aleatorio (1,3);
    jugador = prompt ("Elige: 1 para piedra, 2 para papel, 3 para tijera");
    
    alert("El computador elige: "+ eleccion(pc));
    alert("Tú eliges: "+eleccion(jugador));

    if (pc == jugador){
    alert ("Empate😶");
    empates = empates+1;
    } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
        alert ("GANASTE!🤗")
        victorias = victorias+1
    } else {
        alert ("PERDISTE😔")
        perdidas = perdidas+1
    }
}
alert("Ganaste "+victorias+ " veces, perdiste "+ perdidas+" veces contra el pc y hubo "+empates+ " empates.")