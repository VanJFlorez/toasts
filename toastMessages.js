var toastMessagesNames = [
    // ["tienda", "la tienda", "https://media.giphy.com/media/3oz8xF2tbONaIIy92M/giphy.gif"],
    // ["mensajes", "tus mensajes recibidos", "https://media.giphy.com/media/3oEdv0DUQOagqEI30k/giphy.gif"],
    // ["comercio", "el Comercio", "https://media.giphy.com/media/26xBzu2ogAunL19hS/giphy.gif"],
    // ["ventasYrentas", "las Ventas y Rentas disponibles", 'https://cdn.dribbble.com/users/31664/screenshots/1377335/coin-flip.gif'],
    // ["rutasCompartidas", "las nuevas rutas compartidas", 'https://media.giphy.com/media/4c6FN5RIzikwg/giphy.gif'],
    // ["muro", "el muro", 'https://media.giphy.com/media/l0ExpiMAygqjFWb84/giphy.gif'],
    // ["", "", "https://media.giphy.com/media/l3vQYlDPmoDoAW1wc/giphy.webp"]
]
  
var toastMessagesGreetings = [
/* 
    "Psssst!",
    "¡Boom!",
    "Hey!",
    "Hola!",
    "Cómo vas?",
*/
    "Saludos!",
    "No te lo puedes perder!",
    "No te lo puedo creer",
    "Oye!",
    "Hey!",
    "Espera un momento",
    "Psssst"
]


var toastMessagesPredicates = [
    // "No olvides pasarte por ",
    // "Ahora puedes revisar ",
    // "Recuerda que puedes visitar ",
    // "La comunidad tiene algo para tí pásate por ",
    // "Aprovecha ahora para ingresar a "
    ""
]


var toastMessagesTienda = [
    "La mejor vitrina la encuentras <a href='tienda'>aquí</a>",
    "Genera ingresos con <a href='tienda'>tus productos</a>",
    "<a href='tienda'>Sácale dinero</a> a lo que sabes",
    "<a href='tienda'>Sácale dinero</a> a eso que ya no usas",
    "Cansado de acumular?... <a href='tienda'>pasa por aquí</a>",
    "Conocimiento = <a href='tienda'>Dinero</a>",
    "<a href='tienda'>Regala</a> o <a href='tienda'>Intercambia</a>"
];

var toastMessagesComercio = [
    "Impulsa tu negocio y aumenta <a href='comercio'>tus ventas</a>",
    "Genera <a href='comercio'>ingresos</a> con tu negocio",
    "Genera <a href='comercio'>ingresos</a> con tu marca",
    "<a href='comercio'>Agrega tu marca</a> a los comercios de tu comunidad",
    "Quieres impulsar <a href='comercio'>tu negocio</a>?",
    "Cansado de esperar? El comercio que buscas lo encuentras <a href='comercio'>aquí</a>",
    "No salgas de casa, encuentra tu comercio <a href='comercio'>aquí</a>"
];

var toastMessagesVentasYRentas = [
    "Sacale provecho a <a href='ventasYrentas'>tus espacios</a>",
    "<a href='ventasYrentas'>Vende</a> o <a href='ventasYrentas'>arrienda</a>",
    "tu próximo apartamento en unos <a href='ventasYrentas'>clicks</a>",
    "¿No tienes a dónde llegar en <a href='ventasYrentas'>tu próximas vaciones</a>?",
    "<a href='ventasYrentas'>Vende</a> o <a href='ventasYrentas'>arrienda</a> seguro",
    "No tienes dónde dejar <a href='ventasYrentas'>tu vehículo</a>?",
    "<a href='ventasYrentas'>Renta</a> ese parqueadero que no usas"
];

var toastMessagesRutasCompartidas = [
    "Viaja seguro con <a href='rutasCompartidas'>rutas compartidas</a>",
    "Cansado de viajar solo? <a href='rutasCompartidas'>viaja acompañado.</a>",
    "Súmete a la ola verde... <a href='rutasCompartidas'>Comparte tu vehículo</a>",
    "<a href='rutasCompartidas'>¿Cansado</a> del transporte público?",
    "Cuida el medio ambiente... <a href='rutasCompartidas'>Comparte tu vehículo</a>",
    "Viaja con vecinos,  <a href='rutasCompartidas'>conoce amigos</a>",
    "No más <a href='rutasCompartidas'>llegadas tarde.</a>"
];

(function() {
    for(msj of toastMessagesComercio) 
        toastMessagesNames.push(["comercio", msj, "https://media.giphy.com/media/26xBzu2ogAunL19hS/giphy.gif"]);
    for(msj of toastMessagesTienda)
        toastMessagesNames.push(["tienda", msj, "https://media.giphy.com/media/3oz8xF2tbONaIIy92M/giphy.gif"]);
    for(msj of toastMessagesVentasYRentas)
        toastMessagesNames.push(["ventasYrentas", msj, "https://cdn.dribbble.com/users/31664/screenshots/1377335/coin-flip.gif"]);
    for(msj of toastMessagesRutasCompartidas)
        toastMessagesNames.push(["rutasCompartidas", msj, "https://media.giphy.com/media/4c6FN5RIzikwg/giphy.gif"]);
    toastMessagesNames.push(["", "", "https://media.giphy.com/media/l3vQYlDPmoDoAW1wc/giphy.webp"]);
}());


