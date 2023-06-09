/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let arrayNumeriRandom = []

console.log(arrayNumeriRandom)

let arrayNumeriUtente = []

let arrayNumCorretti = []

const div = document.getElementById("numeriTemporanei")

let span = document.createElement("span")

div.append(span)


function generatoriNumeri(){

    for(i = 0; i < 5; i++){

       let numero = Math.floor(Math.random() * 100) + 1

       arrayNumeriRandom.push(numero)
    }
}

function inizia(){

    generatoriNumeri()

    const tempoSpan = setTimeout(scomparsaSpan, 5000)

    const tempoPrompt = setTimeout(comparsaPrompt, 6000)

    span.innerText = `Memorizza i seguenti numeri ${arrayNumeriRandom} hai cinque secondi!`
    
    function scomparsaSpan(){
    
        span.classList.add("d-none")
    }

    function comparsaPrompt(){

        for(i = 0; i < 5; i++){

            let numeriUtente = parseInt(prompt(`Scrivi i numeri visualizzati!`))

            arrayNumeriUtente.push(numeriUtente)

        } 

        verificaRisultato() 
    }

}

function verificaRisultato(){

    for(i = 0; i < arrayNumeriRandom.length; i++){

        if(arrayNumeriRandom.includes(arrayNumeriUtente[i])){

            arrayNumCorretti.push(arrayNumeriUtente[i])
    
        }

    }

    document.getElementById("numeriCorretti").innerText =`i numeri visualizzati sono : ${arrayNumCorretti}`

    document.getElementById("totaleNumeriCorretti").innerText = `totale numeri indovinati = ${arrayNumCorretti.length}`

}