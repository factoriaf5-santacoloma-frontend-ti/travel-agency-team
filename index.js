
const noche = 60;
const paris = 180;
const boston = 600;
const londres = 120;

const pregunta =prompt("cuantas noches");
const preguntapais=prompt("que pais deseas paris, boston, londres");
function calcularCosteHotel(numeropornoche){
    const costedelhotel = "Tu precio total de noches es :"+ noche*numeropornoche +"€";
    return costedelhotel;
}
document.write(calcularCosteHotel(pregunta));


function calcularCosteAvion(ciudad){
    switch (ciudad) {
        case 'Paris':
            return paris;
             
            break;
    
        default:
            break;
    }
       
}
