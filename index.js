const noche = 60;


const pregunta =prompt("cuantas noches");
function calcularCosteHotel(numeropornoche){
    const costedelhotel = "Tu precio total de noches es :"+ noche*numeropornoche +"€";
    return costedelhotel;
}
document.write(calcularCosteHotel(pregunta));


function calcularCosteAvion(ciudad){

    switch (ciudad) {
        case "paris":
            return "    Escojiste PARIS :"+180+"€";
        case "boston":
            return "    Escojiste BOSTON :"+600+"€";
        case "londres":
            return "Escojiste LONDRES :"+120+"€";
        default:
            return "Ciudad no encontrada";
    }
}

const ciudad = prompt("escoje una de las siguientes ciudades Paris, Boston, Londres");

document.write(calcularCosteAvion(ciudad));


function calculateCarCost(dia){
    
}
