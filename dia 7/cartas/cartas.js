window.onload = () => {
    const pintas = ["corazon", "picas", "trebol", "diamante"];
    let cartaAleatoria = () => {
        let carta = document.getElementById("carta");
        let numeroAzar = Math.floor(Math.random() * (14 - 1)) + 1;;

        if (numeroAzar == 1) {
            numeroAzar = "A"
        } else if (numeroAzar == 11) { numeroAzar = "J" }
        else if (numeroAzar == 12) { numeroAzar = "Q" }
        else if (numeroAzar == 13) { numeroAzar = "K" }

        let pintaNumero = Math.floor(Math.random() * (5 - 1));;
        console.log(pintaNumero);

        carta.innerText = numeroAzar;
        carta.classList.add(pintas[pintaNumero]);

        
    }
    cartaAleatoria();
}