var TOAST_MESSAGES
  
var TOAST_GREETINGS = [
    "Psssst!",
    "¡Boom!",
    "Hola!",
    "No te lo puedes perder!",
    "No te lo puedo creer",
    "Oye!",
    "Hey!",
    "Espera un momento",
    "Psssst!"
]

var TOAST_PREDICATES = [
    // "No olvides pasarte por ",
    // "Ahora puedes revisar ",
    // "Recuerda que puedes visitar ",
    // "La comunidad tiene algo para tí pásate por ",
    // "Aprovecha ahora para ingresar a "
    ""
]

function getSessionMessages(permissions) {
    let thisSessionMessages = [];
    let messageBank = {
        tienda :  [
            "La mejor vitrina la encuentras <a href='tienda'>aquí</a>",
            "Genera ingresos con <a href='tienda'>tus productos</a>",
            "<a href='tienda'>Sácale dinero</a> a lo que sabes",
            "<a href='tienda'>Sácale dinero</a> a eso que ya no usas",
            "Cansado de acumular?... <a href='tienda'>pasa por aquí</a>",
            "Conocimiento = <a href='tienda'>Dinero</a>",
            "<a href='tienda'>Regala</a> o <a href='tienda'>Intercambia</a>"
        ],
        comercio: [
            "Impulsa tu negocio y aumenta <a href='comercio'>tus ventas</a>",
            "Genera <a href='comercio'>ingresos</a> con tu negocio",
            "Genera <a href='comercio'>ingresos</a> con tu marca",
            "<a href='comercio'>Agrega tu marca</a> a los comercios de tu comunidad",
            "Quieres impulsar <a href='comercio'>tu negocio</a>?",
            "Cansado de esperar? El comercio que buscas lo encuentras <a href='comercio'>aquí</a>",
            "No salgas de casa, encuentra tu comercio <a href='comercio'>aquí</a>"
        ],
        ventasYrentas: [
            "Sacale provecho a <a href='ventasYrentas'>tus espacios</a>",
            "<a href='ventasYrentas'>Vende</a> o <a href='ventasYrentas'>arrienda</a>",
            "tu próximo apartamento en unos <a href='ventasYrentas'>clicks</a>",
            "¿No tienes a dónde llegar en <a href='ventasYrentas'>tu próximas vaciones</a>?",
            "<a href='ventasYrentas'>Vende</a> o <a href='ventasYrentas'>arrienda</a> seguro",
            "No tienes dónde dejar <a href='ventasYrentas'>tu vehículo</a>?",
            "<a href='ventasYrentas'>Renta</a> ese parqueadero que no usas"
        ],
        rutasCompartidas: [
            "Viaja seguro con <a href='rutasCompartidas'>rutas compartidas</a>",
            "Cansado de viajar solo? <a href='rutasCompartidas'>viaja acompañado.</a>",
            "Súmete a la ola verde... <a href='rutasCompartidas'>Comparte tu vehículo</a>",
            "<a href='rutasCompartidas'>¿Cansado</a> del transporte público?",
            "Cuida el medio ambiente... <a href='rutasCompartidas'>Comparte tu vehículo</a>",
            "Viaja con vecinos,  <a href='rutasCompartidas'>conoce amigos</a>",
            "No más <a href='rutasCompartidas'>llegadas tarde.</a>"
        ]
    }
    
    let urlgif = [
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/1.gif",
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/2.gif",
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/3.gif",
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/4.gif",
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/5.gif",
      //"https://miedificio.co/cdn/davivienda/static/core/notigifs/6.gif",
      //"https://miedificio.co/cdn/davivienda/static/core/notigifs/7.gif",
      //"https://miedificio.co/cdn/davivienda/static/core/notigifs/8.gif",
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/9.gif",
      //"https://miedificio.co/cdn/davivienda/static/core/notigifs/a.gif",
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/b.gif",
      //"https://miedificio.co/cdn/davivienda/static/core/notigifs/c.gif",
        "https://miedificio.co/cdn/davivienda/static/core/notigifs/d.gif"
    ];


    let sz = urlgif.length;
    for(p in permissions) 
        if(permissions[p])
            for(msj of messageBank[p])
                thisSessionMessages.push([p, msj, urlgif[ Math.floor(Math.random() * Math.floor(sz))]]);
    // thisSessionMessages.push(["", "", urlgif[ Math.floor(Math.random() * Math.floor(sz))]]);

    return thisSessionMessages;
}



