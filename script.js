document.addEventListener('DOMContentLoaded', () => {

    // --- VARIABLES GLOBALES ---
    const numeroTotalDeRetos = 5; 
    
    // --- GUION DEL JUEGO ---
    const guion = [
        /* 0 */ { texto: "Hola Andrea" },
        /* 1 */ { texto: "Un año más<br>¡te toca trabajar!" },
        /* 2 */ { texto: "Igual pensabas que éste año te tocaba algo fácil..." },
        /* 3 */ { texto: "pues me temo que no..." },
        /* 4 */ { texto: "¡pero al menos éste año no tienes que luchar con una cajita!" },
        /* 5 */ { texto: "Este año, te va a tocar usar el coco... y el corazón." },
        /* 6 */ { texto: `Tienes por delante ${numeroTotalDeRetos} retos que completar si quieres recibir tu regalo.` },
        /* 7 */ { texto: "Algunos pondrán a prueba tus conocimientos..." },
        /* 8 */ { texto: "otros tu memoria..." },
        /* 9 */ { texto: "¡otros tu honestidad!" },
        /* 10 */ { texto: "¿Estás lista para tu primer reto?" },
        
        /* 11 */ { texto: "Vamos a empezar con uno fácil" },
        /* 12 */ { texto: "Sin ayuda de los presentes, deberás indicar quién regalo a quién el año pasado" },
        /* 13 */ { texto: "Coloca los nombres en sus posiciones y pulsa Validar" },
        /* 14 */ { texto: "Sólo tienes 3 intentos... si no lo consigues:" },
        /* 15 */ { texto: "¡TE QUEDAS SIN REGALO!", boton: "Avanzar" },
        
        /* 16 */ { tipo: "trigger", reto: 1 },
        
        /* 17 */ { texto: "Memoria de elefante<br>¡maravilloso!" }, 
        /* 18 */ { texto: "Sólo 1 tropiezo<br>Parece que de memoria no vas mal" },
        /* 19 */ { texto: "Bueno, no es el mejor de los comienzos, pero podría ser peor" },
        /* 20 */ { texto: "Ponte las pilas que te veo que te quedas sin regalo" },
        
        /* 21 */ { texto: "¿Qué te parece si vamos a por un test para ver cuánto conoces a la gente?", boton: "Avanzar" },
        /* 22 */ { texto: "En éste reto tendrás 8 preguntas que deberás ir completando en orden." },
        /* 23 */ { texto: "Podrás leer la pregunta primero.<br>Después, deberás elegir a uno de los presentes." },
        /* 24 */ { texto: "¡Ten cuidado porque no podrás repetir persona!" },
        /* 25 */ { texto: "Una vez que hayas elegido a alguien, le pasarás el dispositivo para que responda primero<br>SIN QUE TÚ MIRES" },
        /* 26 */ { texto: "Después tendrás que responder tú e intentar acertar lo que esa persona ha respondido." },
        /* 27 */ { texto: "Necesitarás acertar al menos 5 de 8 para continuar en tu búsqueda del regalo<br>¿Lista?", boton: "Avanzar" },
        
        /* 28 */ { tipo: "trigger", reto: 2 },
        
        /* 29 */ { texto: "¡INCREÍBLE!<br>PLENO DE ACIERTOS<br><span class='icon-diana'>🎯</span>" },
        /* 30 */ { texto: "¡Bastante bien!<br>Sólo has perdido {X} vidas", boton: "Avanzar" }, 
        /* 31 */ { texto: "Veeeeenga....<br>Sólo has perdido {X} vidas y cumplido {Y} castigos para conseguirlo 😂", boton: "Avanzar" },
        
        /* 32 */ { texto: "Ahora que sabemos que conoces a la gente, vamos a ver cuánto te conocen ellos" },
        /* 33 */ { texto: "En el Reto 3, tendrás que conseguir que cada uno de los demás acierte tu elección" },
        /* 34 */ { texto: "Verás la pregunta y elegirás a una persona. Después, elegirás tu respuesta en secreto y le pasarás el móvil." },
        /* 35 */ { texto: "Esa persona verá las opciones y podrá pedirte un 'Joker' (¡si le dejas!)" },
        /* 36 */ { texto: "Si no lo tienen claro y les das permiso, podrán utilizar un Joker." },
        /* 37 */ { texto: "Deberás conseguir 5 aciertos al menos para continuar en la búsqueda del regalo." },
        /* 38 */ { texto: "Tendrás hasta 3 jokers que podrás utilizar para los 8, así que cuidado con quedarte sin ellos" },
        /* 39 */ { texto: "¿Preparada?", boton: "Avanzar" },
        
        /* 40 */ { tipo: "trigger", reto: 3 },
        
        /* 41 */ { texto: "MENSAJE POST RETO 3 (DINAMICO)", boton: "Avanzar" }, 
        
        /* 42 */ { texto: "Ya has completado 3 de los 5 retos y estás un pasito más cerca de tu regalo", boton: "Avanzar" }, 
        /* 43 */ { texto: "¿Preparada para ir a por el siguiente?" }, 
        /* 44 */ { texto: "Éste reto va a poner a prueba tu nivel de 'cultura general'" }, 
        /* 45 */ { texto: "Tienes por delante otras 8 preguntas de diferentes temáticas." }, 
        /* 46 */ { texto: "Antes de cada pregunta verás la Temática y tendrás que elegir un ayudante" }, 
        /* 47 */ { texto: "Después veréis la pregunta y elegirás la respuesta correcta con la ayuda del elegido, si es que la necesitas" }, 
        /* 48 */ { texto: "Sólo podrás elegir a cada ayudante para una temática... y no sabrás de antemano las temáticas, así que elige cuidadosamente!" }, 
        /* 49 */ { texto: "¿Preparada?", boton: "Avanzar" }, 
        /* 50 */ { texto: "Ah! Una cosa más, que se me olvidaba", boton: "Avanzar" }, 
        
        /* 51: BARRA DE VIDA RETO 4 */ 
        { 
            texto: "El resultado de éste reto es más importante que los anteriores, ya que la cantidad de aciertos determinará la dificultad del último reto.",
            boton: "Continuar..."
        },
        { 
            texto: "El último reto es el Reto de la Honestidad... y la dificultad de las preguntas dependerá de tus aciertos en el Reto 4, como puedes comprobar en la esquina superior derecha.", 
            efecto: "mostrarBarra"  
        }, 
        
        /* 53 */ { texto: "Ahora sí. ¿Lista?", efecto: "ocultarBarra", boton: "Avanzar" },

        /* 54 */ { tipo: "trigger", reto: 4 },
        
        // --- TRANSICIÓN RETO 4 -> 5 ---
        /* 55 */ { texto: "¡Patidifuso me hallo!<br>¿¡Cómo narices has acertado todas?!" }, 
        /* 56 */ { texto: "¡Impresionante!<br>No habría apostado a tantos aciertos jamás, la verdad" }, 
        /* 57 */ { texto: "Bueno, un aprobado. <br> No está nada mal, no era fácil" }, 
        /* 58 */ { texto: "Lamentable jajaja pero comprensible, era el reto más difícil...<br>...¡hasta ahora!", boton: "Avanzar" }, 
        
        /* 59 */ { texto: "Bueno, he de admitir que para tu suerte o tu desgracia, el reto siguiente es el mismo...<br>No importa realmente lo bien o mal que lo hayas hecho" },
        /* 60 */ { texto: "Pero si te piensas que eso lo va a hacer fácil... te espera una buena" },
        /* 61 */ { texto: "El último reto es el Reto de la Honestidad <br><br>Y como tal, te vamos a poner a prueba" },
        
        /* 62 */ { texto: "Éste reto consta de las últimas 8 preguntas.<br>Al terminar, te espera por fin<br><u>TU REGALO</u>", boton: "Avanzar" },
        
        /* 63 */ { texto: "Éstas preguntas hay que admitir que son comprometidas, pero espero que tu regalo lo merezca", boton: "Continuar..." },
        
        /* 64 */ { texto: "Una detalle importante: no sabes qué preguntas te van a venir, pero hay una cosa que sí sabes." }, 
        
        // PAUSAS DRAMÁTICAS
        /* 65 */ { texto: "¡Vas a tener que dar detalles de 4 de esas 8!|<br>Elige bien qué 4 preguntas realmente no quieres dar más detalles que el Si o No" },
        
        /* 66 */ { texto: "¿Preparada?|<br>¿Igual deberías haberte tomado una copita antes de empezar esto, no?😅", boton: "Avanzar" },
        
        /* 67 */ { tipo: "trigger", reto: 5 } 
    ];

    // --- DATOS DE LOS RETOS ---
    const personasReto2 = ["Carlos", "Carmen", "Elena", "Jorge", "Coque", "Fer", "Elena Mo.", "Marta"];
    const preguntasReto2 = [
        { id: 1, texto: "¿Qué preferirías comer?", opciones: ["Macarrones con queso", "Solomillo con patatas", "Salmón con verduritas", "Cocido de la abuela"], grid: "grid-2x2", picks: 1, andreaPicks: 1, allCorrect: false, invitedAnswer: [], status: 'pending', answeredBy: '' },
        { id: 2, texto: "¿Qué grupo/solista te gusta más?", opciones: ["Queen", "Aitana", "Taburete", "Bad Bunny"], grid: "grid-2x2", picks: 1, andreaPicks: 1, allCorrect: false, invitedAnswer: [], status: 'pending', answeredBy: '' },
        { id: 3, texto: "Si pudieras ¿a dónde te irías de viaje con amigos?", opciones: ["Ibiza", "Nueva York", "Tailandia", "Münich (Oktoberfest)"], grid: "grid-2x2", picks: 1, andreaPicks: 1, allCorrect: false, invitedAnswer: [], status: 'pending', answeredBy: '' },
        { id: 4, texto: "¿Qué plan preferirías?", opciones: ["Aperitivo y comida con amigos", "Cine y cena con tu pareja", "Juegos de mesa y copitas en casa", "Deporte y cervecitas después"], grid: "grid-2x2", picks: 1, andreaPicks: 1, allCorrect: false, invitedAnswer: [], status: 'pending', answeredBy: '' },
        { id: 5, texto: "¿Qué color elegirías si sólo pudieses vestirte de ese color el resto de tu vida?", opciones: ["Negro brillante", "Rosa pálido", "Verde lima", "Rojo"], grid: "grid-2x2", picks: 1, andreaPicks: 1, allCorrect: false, invitedAnswer: [], status: 'pending', answeredBy: '' },
        { id: 6, texto: "Elige 2 sagas que preferirías ver<br>(Andrea podrá elegir 3 para intentar acertar las 2 elegidas)", opciones: ["El Señor de los Anillos", "Regreso al Futuro", "Star Wars", "Misión Imposible", "Matrix", "Jungla de Cristal", "Harry Potter", "Parque Jurásico"], grid: "grid-4x2", picks: 2, andreaPicks: 3, allCorrect: false, invitedAnswer: [], status: 'pending', answeredBy: '' },
        { id: 7, texto: "¿Cuál es tu Tortuga Ninja favorita?", opciones: ["Leonardo (azul - katana)", "Raphael (rojo - sais)", "Donatello (morado - bastón)", "Michelangelo (naranja - nunchakus)"], grid: "grid-2x2", picks: 1, andreaPicks: 1, allCorrect: false, invitedAnswer: [], status: 'pending', answeredBy: '' },
        { id: 8, texto: "¿Quién te cae peor?", opciones: ["Pedro Sánchez", "El Presidente de España", "El Secretario General del PSOE", "El actual inquilino de la Moncloa"], grid: "grid-2x2", picks: 1, andreaPicks: 1, allCorrect: true, invitedAnswer: [], status: 'pending', answeredBy: '' }
    ];
    
    const personasReto3 = [...personasReto2]; 
    const preguntasReto3 = [
        { id: 1, texto: "¿Qué prefiero ver en la tele?", opciones: [ { text: "Una serie de esas que NUNCA me apunto en la lista", hint: "algo que pregunto constántemente" }, { text: "Una peli que me diga Coque y yo acepto aunque no me apetece nada", hint: "soy una valiente!" }, { text: "Una serie de marujas o telenovela", hint: "ay Juan Camilo ya!" }, { text: "Una peli de esas malísimas de antena 3", hint: "la verdad que nunca admitiré" } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false },
        { id: 2, texto: "¿Cuál es mi comida favorita?", opciones: [ { text: "La que me haga mi maridito cocinillas", hint: "verduritas por doquier" }, { text: "Cualquier tupper de la mamma", hint: "quando arrivo a casa..." }, { text: "Cualquier bollo entre horas sabe a gloria si nadie me ve", hint: "sssssh! calla!" }, { text: "Cualquier cosa en un restaurante mientras sea bonito el sitio", hint: "todos sabemos que lo importante es lo importante" } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false },
        { id: 3, texto: "¿Cuál es mi bebida favorita?", opciones: [ { text: "En mi familia somos de té", hint: "sin leche eh!" }, { text: "Ese cafelito que no falte, por Dios!", hint: "y no es por Clooney!" }, { text: "Ay mi copita de vinooo", hint: "con moderacioooon" }, { text: "Tequifresa!", hint: "sin eso no conocería a mi marido!" } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false },
        { id: 4, texto: "Alguien me adelanta de mala manera en el coche.<br>¿Cuál es mi reacción más probable?", opciones: [ { text: "Le pito y le hago aspavientos. Menudo gilipollas.", hint: "Ese día me he tomado una tila" }, { text: "Bajo la ventanilla, saco hasta la cabeza y le mento su árbol genealógico entero.", hint: "Mi gen es mi gen" }, { text: "Como mucho hago un comentario interno de que la gente no sabe conducir", hint: "😂 😂 😂 😂 😂" }, { text: "Por unos instantes me planteo embestirle como en los coches de choque, pero luego <i>me calmo</i> y sólo le insulto", hint: "cuando te entra el tic en el ojo..." } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false },
        { id: 5, texto: "¿De qué me quejo más?", opciones: [ { text: "Algunas compañeras del trabajo...", hint: "¡Qué pesadilla!" }, { text: "Me estoy quedando calva...", hint: "Desde los 15 años jaja" }, { text: "Coque, no puedes cocinar más lento...", hint: "Me encanta pero lo odio" }, { text: "De todo lo demás, según me de el día", hint: "Nunca faltan motivos" } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false },
        { id: 6, texto: "¿Cuántas veces hago pis al día?", opciones: [ { text: "Lo normal de cualquier persona", hint: "...de 70 años" }, { text: "Entre 6 y 8 veces si no bebo mucho té ese dia", hint: "... ni agua...ni café... y si duermo 15h" }, { text: "Entre el doble y el triple de lo normal", hint: "Si, también cuentan las veces que salen 3 gotitas" }, { text: "Incontables", hint: "No hay remedio" } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false },
        { id: 7, texto: "He quedado a las 18:00<br>¿A qué hora salgo de casa?", opciones: [ { text: "Con margen para llegar 15 minutos antes al sitio", hint: "Me he partido de risa escribiendo ésta opción" }, { text: "Quien dice 18:00 dice 18:30", hint: "o 19:30" }, { text: "Son las 18:15 y aviso que voy un pelin tarde, sabiendo que llegaré como pronto a las 19:00", hint: "y la culpa siempre es de mi hijo" }, { text: "¿Siendo honesta? Lo importante es la siesta, el móvil,  la tele y 15 cosas más... si nadie me está esperando", hint: "Al menos ha sido sincera" } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false },
        { id: 8, texto: "¿Dónde preferiría vivir si pudiese elegir?", opciones: [ { text: "En un pisito en primera línea en San Juan", hint: "vaya vaya, aquí no hay..." }, { text: "No cambio por nada mi casita de La Marazuela", hint: "Oooh... Qué bien miente!" }, { text: "Un chalecito en Torre no estaría mal", hint: "Cada minuto cuenta!" }, { text: "Tengo que admitir que echo de menos Hoyo", hint: "🐐" } ], grid: "grid-2x2", status: 'pending', answeredBy: '', andreasChoice: null, wasJokerUsed: false }
    ];
    
    const personasReto4 = [...personasReto2];
    const preguntasReto4 = [
        { tematica: "Historia de España", enunciado: "¿Cuál de los siguientes inventos es español?", opciones: ["Coche de combustión", "Chupa-Chups", "Kleenex", "Barco de vapor"], correcta: 1, aclaracion: "El Chupa-Chups lo inventó Enric Bernat y el logo en forma de margarita lo inventó Salvador Dalí, que lo creó en menos de una hora dibujándolo en una servilleta de cafetería diciendo <i>'Ahí lo tienes, hazte rico'</i>." },
        { tematica: "El Señor de los Anillos", enunciado: "¿Quién es el único miembro del reparto de las películas de El Señor de los Anillos que conoció en persona a J.R.R. Tolkien?", opciones: ["Sir Ian Mckellen (Gandalf)", "Sir Christopher Lee (Saruman)", "Elijah Wood (Frodo)", "Hugo Weaving (Elrond)"], correcta: 1, aclaracion: "Christopher Lee era un absoluto fanático de los libros (los leía una vez al año). Se encontró a Tolkien en un bar en Oxford, que le dio su bendición para ser Gandalf. No obstante, para la época que se hicieron las películas, era demasiado mayor para las escenas de acción y por eso le dieron el papel de Saruman." },
        { tematica: "Superhéroes", enunciado: "¿Qué famoso en el siglo XX quiso comprar Marvel para protagonizar una película de Spider-man?", opciones: ["Muhammad Ali", "Bruce Lee", "Arnold Schwarzenegger", "Michael Jackson"], correcta: 3, aclaracion: "A finales de los 90, Marvel estaba en quiebra y Michael Jackson intentó comprar la compañía entera.<br>No como una inversión financiera sino para producir y protagonizar la película de Spider-Man como Peter Parker. Stan Lee confirmó que Michael iba muy en serio." },
        { tematica: "Música", enunciado: "El grupo de rock Van Halen tenía siempre una cláusula muy curiosa en sus contratos para los conciertos. ¿Cuál?", opciones: ["Necesitaban una cabra teñida de rojo antes de cada espectáculo", "Todas las chicas que trabajasen tanto en escenario como en backstage tenían que ser pelirrojas", "Tenía que haber un bol de M&Ms en su camerino pero sin un sólo M&M marrón", "El número de focos, altavoces, micrófonos y asistentes tenía que ser siempre impar"], correcta: 2, aclaracion: "Si veían un sólo M&M marrón, cancelaban el concierto. Pero no era un capricho de divos.<br>Sus conciertos incluían mucha pirotecnia y electricidad peligrosa que estaban detallados en los aspectos de seguridad del contrato. Metían la cláusula de los M&Ms en ese contrato para saber si los organizadores lo habían leído y podían estar tranquilos desde el punto de vista de la seguridad." },
        { tematica: "Famosas", enunciado: "¿Qué famosa, antes de serlo, fue despedida de Dunkin Donuts en su primer día de trabajo por rociarle mermelada en la cara a un cliente maleducado?", opciones: ["Meryl Streep", "Kim Kardashian", "Madonna", "Lady Gaga"], correcta: 2, aclaracion: "Antes de ser la Reina del Pop, Madonna llegó a Nueva York con 35 dólares y se puso a trabajar en un Dunkin Donuts. La despidieron en su primer día por no aguantar a un cliente maleducado y hacérselo saber de una manera muy peculiar." },
        { tematica: "Friends", enunciado: "¿Qué estrella tuvo una aparición gratuita en la serie Friends tras perder una apuesta?", opciones: ["Bruce Willis", "Julia Roberts", "Brad Pitt", "George Clooney"], correcta: 0, aclaracion: "Matthew Perry y Bruce Willis rodaron juntos la película Falsas Apariencias. Matthew le dijo que la película sería nº1 en taquilla en su estreno, y Willis dijo que no. El castigo por perder para Willis fue tener que salir en Friends y donar su sueldo a obras benéficas." },
        { tematica: "Famosos españoles", enunciado: "¿Qué actor/actriz español rodó su primera película americana sin tener ni idea de inglés?", opciones: ["Javier Bardem", "Penélope Cruz", "Elsa Pataky", "Antonio Banderas"], correcta: 3, aclaracion: "Banderas llegó a Hollywood para rodar <i>Los Reyes del Mambo</i> (1992) y no hablaba una palabra de inglés.<br>Se aprendió el guión <b>fonéticamente</b>. Es decir, memorizó los sonidos sin tener ni idea de su significado. Él mismo cuenta que cuando el director le daba indicaciones, él decía <i>'yes, yes'</i> sin entender nada." },
        { tematica: "Geografía", enunciado: "¿Qué país tiene más husos horarios?", opciones: ["Francia", "Estados Unidos", "Rusia", "Brasil"], correcta: 0, aclaracion: "Aunque Rusia es el país más grande por extensión, Francia es el país con más husos horarios (12 o 13 según la época del año). Esto se debe a sus territorios de ultramar repartidos por el mundo (Polinesia Francesa, Guayana, Guadalupe, etc.).<br>EEUU tiene 11 husos horarios y Rusia 11 completan el podio. Brasil es el noveno con 4 husos horarios." }
    ];

    // RETO 5 (Preguntas Reales)
    const preguntasReto5 = [
        { id: 1, texto: "¿Alguna vez le has liado alguna 'gorda' a alguno de tus hermanos o les ha caído una bronca importante y a día de hoy no saben que tú has sido la culpable?" },
        { id: 2, texto: "¿Alguna vez has fingido estar enferma para cancelar algún plan que te daba pereza con alguno de los presentes?" },
        { id: 3, texto: "¿Alguna vez has deseado que alguna pareja que conoces (y alguien de los presentes conozca) rompiese porque uno de ellos no te caía bien?" },
        { id: 4, texto: "En los últimos 3 meses ¿Alguna vez has fingido estar dormida para que Coque se encargase de Pablo?" },
        { id: 5, texto: "¿Tienes en tu armario algo de ropa/calzado de tus hermanas que no te hayan dado permiso para coger?" },
        { id: 6, texto: "¿Alguna vez has recibido un regalo de alguno de los presentes que te pareció horrible y luego lo tiraste o lo regalaste a otra persona?" },
        { id: 7, texto: "¿Hay algo que cocine tu marido que en realidad no te gusta pero él piensa que sí?" },
        { id: 8, texto: "¿Alguna vez has usado una historia vergonzosa de tu hermano/a delante de gente nueva solo para hacerte la graciosa?" }
    ];

    let pasoActual = 0;
    let intentosFallidos = 0;
    let currentChallenge = 0;
    
    let reto2State = { currentQuestion: 0, lives: 3, correctAnswers: 0, availablePeople: [...personasReto2], andreasAnswers: [], currentTurn: 'andrea', punishments: 0, isLooping: false, vidasGastadas: 0, totalLivesLost: 0 };
    let reto3State = { currentQuestion: 0, lives: 3, correctAnswers: 0, availablePeople: [...personasReto3], andreasChoice: null, jokers: 3, punishments: 0, isLooping: false, currentTurn: 'andrea-assign-person', vidasGastadas: 0, totalLivesLost: 0 };
    let reto4State = { currentQuestion: 0, health: 8, correctAnswers: 0, availablePeople: [...personasReto4], currentTurn: 'theme-view' };
    let reto5State = { currentQuestion: 0, greenTicks: 0, answers: [], isLooping: false, stage: 'answer', requiredExplanations: 4 };

    // Elementos DOM
    const appContainer = document.getElementById('app-container');
    const messageText = document.getElementById('message-text');
    const continueButton = document.getElementById('continue-button');
    const challengeContainer = document.getElementById('challenge-container');
    const challengeContainer2 = document.getElementById('challenge-container-2');
    const challengeContainer3 = document.getElementById('challenge-container-3');
    const challengeContainer4 = document.getElementById('challenge-container-4');
    const challengeContainer5 = document.getElementById('challenge-container-5');
    const progressMarker = document.getElementById('progress-marker');
    const challengeTitle = document.getElementById('challenge-title');
    const punishmentOverlay = document.getElementById('punishment-overlay');
    const validateButton = document.getElementById('validate-button');
    const feedbackOverlay = document.getElementById('challenge1-feedback-overlay'); 
    const feedbackTitle = document.getElementById('challenge1-feedback-title'); 
    const feedbackMessage = document.getElementById('challenge1-feedback-message'); 
    const feedbackButton = document.getElementById('challenge1-feedback-button'); 
    const livesContainer = document.getElementById('lives-container');
    const trophyContainer = document.getElementById('trophy-container');
    const challengeSubtitle = document.getElementById('challenge-subtitle');
    const challenge2QuestionText = document.getElementById('challenge-2-question-text');
    const personSelectorTitle = document.getElementById('person-selector-title');
    const personSelectorContainer = document.getElementById('person-selector-container');
    const answerGridContainer = document.getElementById('answer-grid-container');
    const challenge2Button = document.getElementById('challenge-2-button');
    const challenge2Feedback = document.getElementById('challenge-2-feedback');
    const livesContainer3 = document.getElementById('lives-container-3');
    const jokerContainer = document.getElementById('joker-container');
    const trophyContainer3 = document.getElementById('trophy-container-3'); 
    const challengeSubtitle3 = document.getElementById('challenge-subtitle-3');
    const challenge3QuestionText = document.getElementById('challenge-3-question-text');
    const personSelectorTitle3 = document.getElementById('person-selector-title-3');
    const personSelectorContainer3 = document.getElementById('person-selector-container-3');
    const answerGridContainer3 = document.getElementById('answer-grid-container-3');
    const jokerArea = document.getElementById('joker-area');
    const jokerButtonContainer = document.getElementById('joker-button-container'); 
    const jokerHintContainer = document.getElementById('joker-hint-container');
    const jokerHintText = document.getElementById('joker-hint-text');
    const challenge3Feedback = document.getElementById('challenge-3-feedback');
    
    // Reto 4 DOM
    const challengeSubtitle4 = document.getElementById('challenge-subtitle-4');
    const challengeThemeText = document.getElementById('challenge-4-theme'); 
    const challenge4QuestionText = document.getElementById('challenge-4-question-text');
    const personSelectorTitle4 = document.getElementById('person-selector-title-4');
    const personSelectorContainer4 = document.getElementById('person-selector-container-4');
    const answerGridContainer4 = document.getElementById('answer-grid-container-4');
    const challenge4Feedback = document.getElementById('challenge-4-feedback');
    const progressBarContainer = document.getElementById('progress-bar-container');
    const explanationOverlay = document.getElementById('explanation-overlay');
    const explanationText = document.getElementById('explanation-text');
    const explanationButton = document.getElementById('explanation-continue');
    
    // Reto 5 DOM
    const challengeSubtitle5 = document.getElementById('challenge-subtitle-5');
    const challenge5QuestionText = document.getElementById('challenge-5-question-text');
    const answerGridContainer5 = document.getElementById('answer-grid-container-5');
    const commitmentButtonsContainer = document.getElementById('commitment-buttons-container');
    const btnExplainYes = document.getElementById('btn-explain-yes');
    const btnExplainNo = document.getElementById('btn-explain-no');
    const ticksContainer = document.getElementById('ticks-container');
    const repescaOverlay = document.getElementById('repesca-overlay');
    const repescaText = document.getElementById('repesca-text');
    const repescaCloseBtn = document.getElementById('repesca-close-btn');
    const finalGiftImage = document.getElementById('final-gift-image');
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    jokerButtonContainer.addEventListener('click', usarJokerReto3);
    document.getElementById('login-container').style.display = 'none';
    
    // Listeners
    if (btnExplainYes) btnExplainYes.onclick = () => seleccionarExplicacion(true);
    if (btnExplainNo) btnExplainNo.onclick = () => seleccionarExplicacion(false);
    if (repescaCloseBtn) repescaCloseBtn.onclick = cerrarRepescaEIniciarBucle;
    if (fullscreenBtn) fullscreenBtn.onclick = toggleFullScreen;

    // Fullscreen Helper
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error enabling fullscreen: ${err.message}`);
            });
            fullscreenBtn.style.display = 'none'; // Ocultar al activar
        }
    }

    // Scroll Hack Mobile
    window.scrollTo(0,1);
    
    iniciarJuego();
    
    function iniciarJuego() {
        crearBotonesDebug(); 
        mostrarSiguienteMensaje();
    }

    function mostrarSiguienteMensaje() {
        const currentStep = guion[pasoActual];
        
        // --- TRIGGERS ---
        if (currentStep.tipo === 'trigger') {
            if (currentStep.reto === 1) iniciarReto1();
            else if (currentStep.reto === 2) iniciarReto2();
            else if (currentStep.reto === 3) iniciarReto3();
            else if (currentStep.reto === 4) iniciarReto4();
            else if (currentStep.reto === 5) iniciarReto5();
            return;
        }
        
        // --- MENSAJES DINÁMICOS ---
        if (pasoActual === 30 || pasoActual === 31) {
            let texto = currentStep.texto.replace('{X}', reto2State.totalLivesLost).replace('{Y}', reto2State.punishments);
            renderizarTexto(texto, currentStep);
            return;
        }
        
        if (pasoActual === 41) {
             let texto = "";
             if (reto3State.correctAnswers === 8) {
                 texto = "¡INCREÍBLE!<br>PLENO DE ACIERTOS<br><span class='icon-diana'>🎯</span>";
             } else if (reto3State.punishments > 0) {
                 texto = "Veeeeenga....<br>Sólo has perdido " + reto3State.totalLivesLost + " vidas y cumplido " + reto3State.punishments + " castigos para conseguirlo 😂";
             } else {
                 texto = "¡Bastante bien!<br>Sólo has perdido " + reto3State.totalLivesLost + " vidas";
             }
             renderizarTexto(texto, currentStep);
             return;
        }
        
        // Post Reto 4 (55-58)
        const fallosR4 = 8 - (reto4State.health || 8);
        if (pasoActual === 55 && fallosR4 === 0) { renderizarTexto(currentStep.texto, currentStep); return; }
        else if (pasoActual === 55 && fallosR4 > 0) { pasoActual++; mostrarSiguienteMensaje(); return; } 
        
        if (pasoActual === 56 && fallosR4 === 1) { renderizarTexto(currentStep.texto, currentStep); return; }
        else if (pasoActual === 56 && fallosR4 !== 1) { pasoActual++; mostrarSiguienteMensaje(); return; }
        
        if (pasoActual === 57 && (fallosR4 === 2 || fallosR4 === 3)) { renderizarTexto(currentStep.texto, currentStep); return; }
        else if (pasoActual === 57 && !(fallosR4 === 2 || fallosR4 === 3)) { pasoActual++; mostrarSiguienteMensaje(); return; }
        
        if (pasoActual === 58 && fallosR4 >= 4) { renderizarTexto(currentStep.texto, currentStep); return; }
        else if (pasoActual === 58 && fallosR4 < 4) { pasoActual++; mostrarSiguienteMensaje(); return; }

        renderizarTexto(currentStep.texto, currentStep);
    }
    
    function renderizarTexto(textoHTML, stepObj) {
        if (pasoActual === 6) crearMarcadorProgreso();
        
        appContainer.style.display = 'flex'; 
        appContainer.style.opacity = '1';
        messageText.innerHTML = "";
        continueButton.style.display = 'none';
        
        const lineas = textoHTML.split('<br>');
        lineas.forEach((linea) => {
            const lineaDiv = document.createElement('div');
            if (linea.includes('<') && linea.includes('>')) {
                 const span = document.createElement('span');
                 span.innerHTML = linea;
                 span.style.visibility = 'hidden';
                 span.classList.add('html-content'); 
                 lineaDiv.appendChild(span);
            } else {
                 linea.split('').forEach(char => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.visibility = 'hidden';
                    if (char === '|') { span.textContent = ''; span.dataset.pause = 1000; } 
                    else if (char === '~') { span.textContent = ''; span.dataset.pause = 500; }
                    lineaDiv.appendChild(span);
                });
            }
            messageText.appendChild(lineaDiv);
        });
        
        escribirTexto(0, stepObj);
    }

    function escribirTexto(index, stepObj) {
        const spans = messageText.querySelectorAll('span:not(.icon-diana)');
        if (index < spans.length) {
            const span = spans[index];
            let delay = 27;
            if (span.classList.contains('html-content')) { span.style.visibility = 'visible'; delay = 500; } 
            else if (span.dataset.pause) { delay = parseInt(span.dataset.pause); } 
            else { span.style.visibility = 'visible'; }
            setTimeout(() => escribirTexto(index + 1, stepObj), delay); 
        } else {
            ejecutarEfectosFinTexto(stepObj);
        }
    }
    
    function ejecutarEfectosFinTexto(stepObj) {
        const diana = messageText.querySelector('.icon-diana');
        if (diana) diana.style.visibility = 'visible';
        
        if (stepObj.efecto === "mostrarBarra") {
             setTimeout(() => {
                progressBarContainer.style.display = 'flex';
                actualizarBarraVida(); 
                progressBarContainer.classList.add('blink-attention');
                setTimeout(() => {
                    progressBarContainer.classList.remove('blink-attention');
                    mostrarBotonContinuar(stepObj);
                }, 1500);
            }, 500);
        } else {
            mostrarBotonContinuar(stepObj);
        }
    }

    function mostrarBotonContinuar(stepObj) {
        if (stepObj.boton) {
            continueButton.textContent = stepObj.boton === "Avanzar" ? "Avanzar" : "Continuar...";
            continueButton.style.display = 'block';
        } else {
            continueButton.textContent = "Continuar...";
            continueButton.style.display = 'block';
        }
    }

    continueButton.addEventListener('click', () => {
        if (guion[pasoActual] && guion[pasoActual].efecto === "ocultarBarra") {
            progressBarContainer.style.display = 'none';
        }
        pasoActual++;
        mostrarSiguienteMensaje();
    });

    // --- RETO 1 (TOUCH & MOUSE) ---
    let tarjetaSiendoArrastrada = null; let sourceSlot = null;
    
    function iniciarReto1(){
        currentChallenge=1;appContainer.style.opacity='0';continueButton.style.display='none';
        if(progressMarker.children.length===0)crearMarcadorProgreso();progressMarker.style.display='none';
        challengeTitle.textContent="RETO 1";challengeTitle.style.display='block';
        setTimeout(()=>{appContainer.style.display='none';challengeContainer.style.display='flex';challengeContainer.style.opacity='1';},500);
        crearTableroJuego();intentosFallidos=0;validateButton.style.display='block';validateButton.onclick=validarRespuestas;
    }
    
    function crearTableroJuego(){
        const regaladores=["Carlos","Carmen","Elena","Jorge","Andrea","Coque","Fer","Elena Mo.","Marta"];
        const regalados=[...regaladores].sort(()=>Math.random()-0.5);
        const colFija=document.getElementById('fixed-column');
        const colArrastrable=document.getElementById('card-source-right');
        colFija.innerHTML='';colArrastrable.innerHTML='';
        regalados.forEach((nombre,index)=>{colArrastrable.appendChild(crearTarjeta(nombre,`right-${index}`));});
        for(let i=0;i<9;i++){
            const row=document.createElement('div');row.className='drop-row';
            const fixedName=document.createElement('div');fixedName.className='fixed-name';fixedName.textContent=regaladores[i];fixedName.dataset.name=regaladores[i];
            const arrow=document.createElement('span');arrow.className='arrow';arrow.innerHTML='&#10140;';
            const slotRight=document.createElement('div');slotRight.className='drop-slot slot-right';
            row.appendChild(fixedName);row.appendChild(arrow);row.appendChild(slotRight);colFija.appendChild(row);
        }
    }
    
    function crearTarjeta(nombre,id){
        const card=document.createElement('div');card.className='card';card.id=id;card.textContent=nombre;card.dataset.name=nombre;card.draggable=true;
        card.addEventListener('dragstart',onDragStart); card.addEventListener('dragend',onDragEnd);
        card.addEventListener('touchstart', handleTouchStart, {passive: false});
        card.addEventListener('touchmove', handleTouchMove, {passive: false});
        card.addEventListener('touchend', handleTouchEnd);
        return card;
    }

    // Mouse Handlers
    function onDragStart(e){tarjetaSiendoArrastrada=e.target;sourceSlot=e.target.parentElement;e.target.classList.add('dragging');}
    function onDragEnd(e){e.target.classList.remove('dragging');}
    // Global Drop Handler (Mouse)
    document.addEventListener('dragover', (e) => e.preventDefault());
    document.addEventListener('drop', (e) => {
        e.preventDefault();
        const dropZone = e.target.closest('.drop-slot, .card-column');
        if (!dropZone || !tarjetaSiendoArrastrada) return;
        const existingCard = dropZone.firstElementChild;
        if (existingCard && existingCard !== tarjetaSiendoArrastrada) {
             sourceSlot.appendChild(existingCard);
        }
        dropZone.appendChild(tarjetaSiendoArrastrada);
        tarjetaSiendoArrastrada = null;
    });

    // Touch Handlers
    let initialTouchX = 0; let initialTouchY = 0;
    function handleTouchStart(e) {
        e.preventDefault(); tarjetaSiendoArrastrada = e.target; sourceSlot = e.target.parentElement;
        const touch = e.touches[0];
        tarjetaSiendoArrastrada.classList.add('dragging');
        tarjetaSiendoArrastrada.style.position = 'fixed';
        tarjetaSiendoArrastrada.style.left = (touch.clientX - tarjetaSiendoArrastrada.offsetWidth/2) + 'px';
        tarjetaSiendoArrastrada.style.top = (touch.clientY - tarjetaSiendoArrastrada.offsetHeight/2) + 'px';
        tarjetaSiendoArrastrada.style.zIndex = 1000;
    }
    function handleTouchMove(e) {
        e.preventDefault(); if (!tarjetaSiendoArrastrada) return;
        const touch = e.touches[0];
        tarjetaSiendoArrastrada.style.left = (touch.clientX - tarjetaSiendoArrastrada.offsetWidth/2) + 'px';
        tarjetaSiendoArrastrada.style.top = (touch.clientY - tarjetaSiendoArrastrada.offsetHeight/2) + 'px';
    }
    function handleTouchEnd(e) {
        if (!tarjetaSiendoArrastrada) return;
        tarjetaSiendoArrastrada.classList.remove('dragging');
        tarjetaSiendoArrastrada.style.position = '';
        tarjetaSiendoArrastrada.style.left = '';
        tarjetaSiendoArrastrada.style.top = '';
        tarjetaSiendoArrastrada.style.zIndex = '';
        const touch = e.changedTouches[0];
        tarjetaSiendoArrastrada.style.display = 'none';
        let elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        tarjetaSiendoArrastrada.style.display = '';
        if (!elemBelow) return;
        let dropSlot = elemBelow.closest('.drop-slot') || elemBelow.closest('.card-column');
        if (dropSlot) {
            const existingCard = dropSlot.firstElementChild;
            if (existingCard && existingCard !== tarjetaSiendoArrastrada) {
                sourceSlot.appendChild(existingCard);
            }
            dropSlot.appendChild(tarjetaSiendoArrastrada);
        }
        tarjetaSiendoArrastrada = null;
    }

    function validarRespuestas(){
        const soluciones=new Map([['Carlos','Jorge'],['Carmen','Fer'],['Elena','Coque'],['Jorge','Andrea'],['Andrea','Elena Mo.'],['Coque','Carlos'],['Fer','Marta'],['Elena Mo.','Elena'],['Marta','Carmen']]);
        let aciertos=0;let paresEncontrados=new Map();
        document.querySelectorAll('.drop-row').forEach(row=>{
            const regalador=row.querySelector('.fixed-name').dataset.name;
            const regaladoEl=row.querySelector('.slot-right').firstElementChild;
            if(regalador&&regaladoEl){paresEncontrados.set(regalador,regaladoEl.dataset.name);}
        });
        if(paresEncontrados.size===9){soluciones.forEach((regalado,regalador)=>{if(paresEncontrados.get(regalador)===regalado)aciertos++;});}
        
        if(aciertos===9){
            feedbackTitle.textContent="¡RETO COMPLETADO!";feedbackTitle.style.color="#00FF00";feedbackMessage.innerHTML="";feedbackButton.textContent="Continuar";
            feedbackButton.onclick=()=>{feedbackOverlay.style.display='none';iniciarConfeti();setTimeout(()=>{completarReto(1);},500);};feedbackOverlay.style.display='flex';
        }else{
            intentosFallidos++;feedbackTitle.textContent=`Intento fallido ${intentosFallidos}/3`;feedbackTitle.style.color="#FFD700";
            switch(intentosFallidos){case 1:feedbackMessage.innerHTML="Ten cuidado...";feedbackButton.textContent="¡Vamos!";break;case 2:feedbackMessage.innerHTML="¡Última oportunidad!";feedbackButton.textContent="¡Concéntrate!";break;case 3:default:feedbackMessage.innerHTML="LAMENTABLE<br>Tienes una última oportunidad, pero ésta vez pide ayuda hija...";feedbackButton.textContent="Ayuda...";break;}
            feedbackButton.onclick=()=>{feedbackOverlay.style.display='none';};feedbackOverlay.style.display='flex';
        }
    }
    
    function crearMarcadorProgreso(){progressMarker.innerHTML='';for(let i=1;i<=numeroTotalDeRetos;i++){const numSpan=document.createElement('span');numSpan.className='progress-number';numSpan.id=`progress-number-${i}`;numSpan.textContent=i;progressMarker.appendChild(numSpan);}progressMarker.style.display='block';}
    function marcarRetoCompletado(num){const numero=document.getElementById(`progress-number-${num}`);if(numero){numero.classList.add('completed');numero.style.transform='scale(1)';requestAnimationFrame(()=>{numero.style.transform='scale(1.2)';setTimeout(()=>{numero.style.transform='scale(1)';},500);});}}
    function iniciarConfeti(){const confettiContainer=document.getElementById('confetti-container');confettiContainer.innerHTML='';for(let i=0;i<100;i++){const piece=document.createElement('div');piece.className='confetti-piece';piece.style.left=`${Math.random()*100}vw`;piece.style.backgroundColor=i%2===0?'#FFD700':'#FFC0CB';piece.style.animationDelay=`${Math.random()*5}s`;piece.style.height=`${Math.floor(Math.random()*10)+10}px`;piece.style.width=`${Math.floor(Math.random()*5)+5}px`;confettiContainer.appendChild(piece);}}
    function completarReto(n){challengeContainer.style.opacity='0';challengeTitle.style.display='none';setTimeout(()=>{challengeContainer.style.display='none';appContainer.style.display='flex';appContainer.style.opacity='0';progressMarker.style.display='block';marcarRetoCompletado(n);requestAnimationFrame(()=>{appContainer.style.opacity='1';});if(intentosFallidos===0)pasoActual=17;else if(intentosFallidos===1)pasoActual=18;else if(intentosFallidos===2)pasoActual=19;else pasoActual=20;mostrarSiguienteMensaje();},500);}

    // --- RETO 2 (CORREGIDO) ---
    function iniciarReto2(){currentChallenge=2;appContainer.style.opacity='0';continueButton.style.display='none';progressMarker.style.display='none';challengeTitle.textContent="RETO 2";challengeTitle.style.display='block';setTimeout(()=>{appContainer.style.display='none';challengeContainer2.style.display='flex';challengeContainer2.style.opacity='1';},500);reto2State.currentQuestion=0;reto2State.lives=3;reto2State.correctAnswers=0;reto2State.availablePeople=[...personasReto2];reto2State.punishments=0;reto2State.isLooping=false;preguntasReto2.forEach(p=>{p.status='pending';p.invitedAnswer=[];p.answeredBy='';});actualizarUIReto2();mostrarPreguntaReto2();}
    function actualizarUIReto2(){livesContainer.innerHTML='';for(let i=0;i<3;i++){const heart=document.createElement('span');heart.className='heart';heart.id=`heart-${i}`;heart.textContent='❤️';if(i>=reto2State.lives)heart.classList.add('lost');livesContainer.appendChild(heart);}trophyContainer.innerHTML='';preguntasReto2.forEach((pregunta,index)=>{const trophy=document.createElement('span');trophy.className='trophy';trophy.id=`trophy-${index}`;trophy.textContent='🏆';if(pregunta.status==='correct')trophy.classList.add('correct');if(pregunta.status==='failed')trophy.classList.add('failed');trophyContainer.appendChild(trophy);});}
    function mostrarPreguntaReto2(){if(reto2State.isLooping){let nextQ=reto2State.currentQuestion;while(preguntasReto2[nextQ].status==='correct'){nextQ=(nextQ+1)%preguntasReto2.length;}reto2State.currentQuestion=nextQ;}reto2State.currentTurn='andrea';const pregunta=preguntasReto2[reto2State.currentQuestion];challengeSubtitle.textContent=`Pregunta ${pregunta.id}`;if(reto2State.isLooping){challenge2QuestionText.innerHTML=`RECORDATORIO: ESTA LA RESPONDIÓ ${pregunta.answeredBy}.<br><br>${pregunta.texto}`;}else{challenge2QuestionText.innerHTML=pregunta.texto;}challenge2Feedback.innerHTML='';challenge2Button.style.visibility='hidden';answerGridContainer.innerHTML='';if(reto2State.isLooping){mostrarOpcionesAndrea();return;}personSelectorTitle.textContent='ELIGE A UNA PERSONA:';personSelectorTitle.style.display='block';personSelectorContainer.innerHTML='';personasReto2.forEach(nombre=>{const card=document.createElement('div');card.className='person-card';card.textContent=nombre;if(reto2State.availablePeople.includes(nombre)){card.onclick=()=>seleccionarPersona(nombre);}else{card.classList.add('disabled');}personSelectorContainer.appendChild(card);});}
    function seleccionarPersona(nombre){preguntasReto2[reto2State.currentQuestion].answeredBy=nombre;reto2State.availablePeople=reto2State.availablePeople.filter(p=>p!==nombre);challenge2QuestionText.innerHTML=`PÁSALE EL MÓVIL A ${nombre}<br>¡NO MIRES!`;personSelectorContainer.innerHTML='';personSelectorTitle.style.display='none';challenge2Button.textContent="Continuar";challenge2Button.style.visibility='visible';challenge2Button.style.display='none';setTimeout(()=>{mostrarOpcionesInvitado();},3000);}
    function mostrarOpcionesInvitado(){reto2State.currentTurn='invited';const pregunta=preguntasReto2[reto2State.currentQuestion];challenge2QuestionText.innerHTML=pregunta.texto;challenge2Button.textContent="Guardar Respuesta";challenge2Button.style.visibility='hidden';challenge2Feedback.innerHTML='';crearCuadriculaRespuestas(pregunta);}
    function crearCuadriculaRespuestas(pregunta){const grid=(currentChallenge===2)?answerGridContainer:answerGridContainer3;grid.innerHTML='';grid.className=pregunta.grid;let options=(currentChallenge===2)?pregunta.opciones:pregunta.opciones.map(o=>o.text);options.forEach((opcion,index)=>{const card=document.createElement('div');card.className='answer-card';card.innerHTML=`<span>${opcion.text||opcion}</span>`;card.dataset.index=index;if(currentChallenge===2){if(reto2State.currentTurn==='invited'){card.onclick=()=>seleccionarRespuesta(card,pregunta.picks);}else{card.onclick=()=>seleccionarRespuesta(card,pregunta.andreaPicks);}}else if(currentChallenge===3){if(reto3State.currentTurn==='andrea-choose-answer'){card.onclick=()=>seleccionarRespuestaReto3(index);}else{card.onclick=()=>validarRespuestaReto3(index);}}else if(currentChallenge===4){card.onclick=()=>validarRespuestaReto4(index);}grid.appendChild(card);});}
    function seleccionarRespuesta(card,maxPicks){const isSelected=card.classList.contains('selected');const selectedCards=answerGridContainer.querySelectorAll('.selected');if(isSelected){card.classList.remove('selected');}else{if(maxPicks===1){if(selectedCards.length>0)selectedCards[0].classList.remove('selected');card.classList.add('selected');}else if(selectedCards.length<maxPicks){card.classList.add('selected');}}const newSelectedCards=answerGridContainer.querySelectorAll('.selected');if(reto2State.currentTurn==='invited'){if(newSelectedCards.length===maxPicks){guardarRespuestaInvitado();}}else if(reto2State.currentTurn==='andrea-reveal'){if(newSelectedCards.length===maxPicks){setTimeout(validarRespuestaAndrea,1000);}}}
    function guardarRespuestaInvitado(){const selectedCards=answerGridContainer.querySelectorAll('.selected');const pregunta=preguntasReto2[reto2State.currentQuestion];pregunta.invitedAnswer=[];selectedCards.forEach(card=>{pregunta.invitedAnswer.push(card.textContent);});mostrarOpcionesAndrea();}
    function mostrarOpcionesAndrea(){reto2State.currentTurn='andrea-reveal';const pregunta=preguntasReto2[reto2State.currentQuestion];if(!reto2State.isLooping){challenge2QuestionText.innerHTML="¡TU TURNO, ANDREA!<br>INTENTA ACERTAR.";}challenge2Button.textContent="Validar";challenge2Button.style.visibility='hidden';personSelectorContainer.innerHTML='';personSelectorTitle.style.display='none';crearCuadriculaRespuestas(pregunta);}
    
    // CORRECCIÓN VISUAL Y LÓGICA RETO 2
    function validarRespuestaAndrea(){
        answerGridContainer.querySelectorAll('.answer-card').forEach(card=>card.onclick=null);
        const selectedCards=answerGridContainer.querySelectorAll('.selected');
        reto2State.andreasAnswers=[];
        selectedCards.forEach(card=>{reto2State.andreasAnswers.push(card.textContent);});
        
        const pregunta=preguntasReto2[reto2State.currentQuestion];
        let isCorrect=false;
        
        // Comprobación estricta
        if(pregunta.allCorrect){isCorrect=true;}
        else if(pregunta.id===6){
            // Ambas deben estar
            const allCorrectIncluded = pregunta.invitedAnswer.every(ans => reto2State.andreasAnswers.includes(ans));
            isCorrect = allCorrectIncluded && (reto2State.andreasAnswers.length === pregunta.invitedAnswer.length);
        }
        else{isCorrect=pregunta.invitedAnswer.length>0&&reto2State.andreasAnswers.length>0&&pregunta.invitedAnswer[0]===reto2State.andreasAnswers[0];}
        
        setTimeout(()=>{
            const trophy=document.getElementById(`trophy-${reto2State.currentQuestion}`);
            
            // Feedback visual coloreado
            const allCards = answerGridContainer.querySelectorAll('.answer-card');
            allCards.forEach(card => {
                const text = card.textContent;
                const wasSelected = card.classList.contains('selected');
                
                if (pregunta.allCorrect) {
                    card.classList.remove('selected'); card.classList.add('correct'); card.classList.add('blink-effect');
                } else {
                    if (pregunta.invitedAnswer.includes(text)) {
                        // ERA CORRECTA
                        card.classList.remove('selected'); card.classList.add('correct'); card.classList.add('blink-effect');
                    } else if (wasSelected) {
                        // ERA INCORRECTA Y SE ELIGIÓ
                        card.classList.remove('selected'); card.classList.add('wrong');
                    }
                }
            });

            if(isCorrect){
                reto2State.correctAnswers++;
                pregunta.status='correct';
                challenge2Feedback.innerHTML="¡CORRECTO!";
                challenge2Feedback.className='feedback-correct';
                trophy.classList.add('correct');
            }else{
                reto2State.lives--;
                reto2State.totalLivesLost++; 
                pregunta.status='failed';
                challenge2Feedback.innerHTML="¡FALLO!";
                challenge2Feedback.className='feedback-wrong';
                trophy.classList.add('failed');
                const heart=document.getElementById(`heart-${reto2State.lives}`);
                if(heart)heart.classList.add('lost');
            }
            
            setTimeout(()=>{
                challenge2Feedback.innerHTML='';
                comprobarEstadoJuego();
            },3000);
        },1000);
    }

    function comprobarEstadoJuego(){
        if(reto2State.lives<=0&&reto2State.correctAnswers<5){mostrarCastigo();return;}
        
        let allAnswered=preguntasReto2.every(p=>p.status!=='pending');
        
        if(allAnswered){
            if(reto2State.correctAnswers>=5){
                terminarReto2(true);
            } else {
                // BUCLE OBLIGATORIO SI < 5
                reto2State.isLooping=true;
                let firstFailed=0;
                while(preguntasReto2[firstFailed].status==='correct'){firstFailed++;}
                reto2State.currentQuestion=firstFailed;
                actualizarUIReto2();
                mostrarPreguntaReto2();
            }
            return;
        }

        if(reto2State.isLooping){
            if(reto2State.correctAnswers>=5){terminarReto2(true);return;}
            let nextQ=(reto2State.currentQuestion+1)%preguntasReto2.length;
            let gaveFullLoop=false;
            while(preguntasReto2[nextQ].status==='correct'){
                nextQ=(nextQ+1)%preguntasReto2.length;
                if(nextQ===0){
                    if(reto2State.currentQuestion===preguntasReto2.length-1||preguntasReto2.every(p=>p.status==='correct')){
                        gaveFullLoop=true;break;
                    }
                }
            }
            if(gaveFullLoop){terminarReto2(reto2State.correctAnswers>=5);return;}
            proximaPreguntaIndex=nextQ;
        }else{
            proximaPreguntaIndex=reto2State.currentQuestion+1;
            if(proximaPreguntaIndex>=preguntasReto2.length){
                if(reto2State.correctAnswers>=5){terminarReto2(true);}
                else{reto2State.isLooping=true;proximaPreguntaIndex=0;}
            }
        }
        reto2State.currentQuestion=proximaPreguntaIndex;actualizarUIReto2();mostrarPreguntaReto2();
    }
    
    function terminarReto2(didWin){
        challengeContainer2.style.opacity='0';challengeTitle.style.display='none';
        setTimeout(()=>{
            challengeContainer2.style.display='none';appContainer.style.display='flex';appContainer.style.opacity='0';progressMarker.style.display='block';
            reto2State.vidasGastadas=3-reto2State.lives;
            if(reto2State.vidasGastadas<0)reto2State.vidasGastadas=0;
            marcarRetoCompletado(2);
            if(reto2State.correctAnswers===8){pasoActual=29;}
            else if(reto2State.punishments>0){pasoActual=31;}
            else{pasoActual=30;}
            requestAnimationFrame(()=>{appContainer.style.opacity='1';});
            mostrarSiguienteMensaje();
        },500);
    }
    
    function mostrarCastigo(){
        punishmentOverlay.style.display='flex';
        // SOLO botón SI
        const btnYes = document.getElementById('punishment-yes');
        btnYes.onclick=()=>{
            punishmentOverlay.style.display='none';
            if(currentChallenge===2){reto2State.punishments++;reto2State.lives=(reto2State.punishments===1)?2:1;actualizarUIReto2();comprobarEstadoJuego();}
            else if(currentChallenge===3){reto3State.punishments++;reto3State.lives=(reto3State.punishments===1)?2:1;actualizarUIReto3();comprobarEstadoJuegoReto3();}
        };
    }
    
    function crearBotonesDebug() {const nav=document.getElementById('debug-nav');nav.innerHTML='';for(let i=1;i<=5;i++){const btn=document.createElement('button');btn.className='debug-btn';btn.textContent=i;btn.onclick=()=>saltarAReto(i);nav.appendChild(btn);if(i<5){const btnPost=document.createElement('button');btnPost.className='debug-btn';btnPost.textContent=`${i}-${i+1}`;btnPost.onclick=()=>saltarAPostReto(i);nav.appendChild(btnPost);}}}
    function saltarAReto(num){appContainer.style.opacity='0';appContainer.style.display='none';challengeContainer.style.opacity='0';challengeContainer.style.display='none';challengeContainer2.style.opacity='0';challengeContainer2.style.display='none';challengeContainer3.style.opacity='0';challengeContainer3.style.display='none';challengeContainer4.style.opacity='0';challengeContainer4.style.display='none';challengeContainer5.style.opacity='0';challengeContainer5.style.display='none';punishmentOverlay.style.display='none';continueButton.style.display='none';challengeTitle.style.display='none';progressMarker.style.display='none';feedbackOverlay.style.display='none';if(progressMarker.children.length===0)crearMarcadorProgreso();progressMarker.style.display='block';for(let i=1;i<num;i++){marcarRetoCompletado(i);}if(num===1){pasoActual=15;}else if(num===2){pasoActual=28;}else if(num===3){pasoActual=40;}else if(num===4){iniciarReto4();return;}else if(num===5){iniciarReto5();return;}else{pasoActual=38;}mostrarSiguienteMensaje();}
    function saltarAPostReto(num){
        appContainer.style.opacity='0';appContainer.style.display='none';
        challengeContainer.style.opacity='0';challengeContainer.style.display='none';
        challengeContainer2.style.opacity='0';challengeContainer2.style.display='none';
        challengeContainer3.style.opacity='0';challengeContainer3.style.display='none';
        challengeContainer4.style.opacity='0';challengeContainer4.style.display='none';
        challengeContainer5.style.display='none';
        punishmentOverlay.style.display='none';continueButton.style.display='none';
        challengeTitle.style.display='none';progressMarker.style.display='none';
        feedbackOverlay.style.display='none';
        
        if(progressMarker.children.length===0)crearMarcadorProgreso();
        progressMarker.style.display='block';
        for(let i=1;i<=num;i++){marcarRetoCompletado(i);}
        
        if(num===1){intentosFallidos=1;completarReto(1);}
        else if(num===2){reto2State.vidasGastadas=1;reto2State.totalLivesLost=1;reto2State.correctAnswers=7;reto2State.punishments=0;terminarReto2(true);}
        else if(num===3){reto3State.vidasGastadas=1;reto3State.totalLivesLost=1;reto3State.correctAnswers=8;reto3State.punishments=0;terminarReto3(true);}
        else if(num===4){
            reto4State.health=8; 
            marcarRetoCompletado(4); 
            pasoActual=55; // Salto correcto a Post-Reto 4
            appContainer.style.opacity='1'; 
            appContainer.style.display='flex';
            mostrarSiguienteMensaje();
        }
        else{pasoActual=38;}
    }
    
    function iniciarReto3(){currentChallenge=3;appContainer.style.opacity='0';continueButton.style.display='none';progressMarker.style.display='none';challengeTitle.textContent="RETO 3";challengeTitle.style.display='block';document.getElementById('challenge-3-ui').style.display='flex';setTimeout(()=>{appContainer.style.display='none';challengeContainer3.style.display='flex';challengeContainer3.style.opacity='1';},500);reto3State.currentQuestion=0;reto3State.lives=3;reto3State.correctAnswers=0;reto3State.availablePeople=[...personasReto3];reto3State.jokers=3;reto3State.punishments=0;reto3State.isLooping=false;preguntasReto3.forEach(p=>{p.status='pending';p.andreasChoice=null;p.answeredBy='';p.wasJokerUsed=false;});actualizarUIReto3();mostrarPreguntaReto3();}
    function actualizarUIReto3(){livesContainer3.innerHTML='';for(let i=0;i<3;i++){const heart=document.createElement('span');heart.className='heart';heart.id=`heart-3-${i}`;heart.textContent='❤️';if(i>=reto3State.lives)heart.classList.add('lost');livesContainer3.appendChild(heart);}jokerContainer.innerHTML='';for(let i=0;i<3;i++){const joker=document.createElement('span');joker.className='joker-icon';joker.id=`joker-${i}`;joker.textContent='🃏';if(i>=reto3State.jokers)joker.classList.add('used');jokerContainer.appendChild(joker);}trophyContainer3.innerHTML='';for(let i=0;i<8;i++){const trophy=document.createElement('span');trophy.className='trophy';trophy.id=`trophy-3-${i}`;trophy.textContent='🏆';if(preguntasReto3[i]){if(preguntasReto3[i].status==='correct')trophy.classList.add('correct');if(preguntasReto3[i].status==='failed')trophy.classList.add('failed');}trophyContainer3.appendChild(trophy);}}
    function mostrarPreguntaReto3(){if(reto3State.isLooping){let nextQIndex=reto3State.currentQuestion;while(preguntasReto3[nextQIndex].status==='correct'){nextQIndex=(nextQIndex+1)%preguntasReto3.length;}reto3State.currentQuestion=nextQIndex;}reto3State.currentTurn='andrea-assign-person';const pregunta=preguntasReto3[reto3State.currentQuestion];challengeSubtitle3.textContent=`Pregunta ${pregunta.id}`;if(reto3State.isLooping){challenge3QuestionText.innerHTML=`RECORDATORIO: LA RESPONDIÓ ${pregunta.answeredBy}.<br>¡INTÉNTALO DE NUEVO!<br><br>${pregunta.texto}`;crearCuadriculaRespuestas(pregunta);mostrarOpcionesInvitadoReto3();return;}else{challenge3QuestionText.innerHTML=pregunta.texto;}answerGridContainer3.innerHTML='';jokerArea.style.display='none';challenge3Feedback.innerHTML='';personSelectorTitle3.textContent='ELIGE A QUIÉN PREGUNTAR:';personSelectorTitle3.style.display='block';personSelectorContainer3.innerHTML='';personSelectorContainer3.className='grid-4x2';personasReto3.forEach(nombre=>{const card=document.createElement('div');card.className='person-card';card.textContent=nombre;if(reto3State.availablePeople.includes(nombre)){card.onclick=()=>seleccionarPersonaReto3(nombre);}else{card.classList.add('disabled');}personSelectorContainer3.appendChild(card);});}
    function seleccionarPersonaReto3(nombre){preguntasReto3[reto3State.currentQuestion].answeredBy=nombre;reto3State.availablePeople=reto3State.availablePeople.filter(p=>p!==nombre);reto3State.currentTurn='andrea-choose-answer';const pregunta=preguntasReto3[reto3State.currentQuestion];challenge3QuestionText.innerHTML=`¿SABRÁ ${nombre}...?<br><br>${pregunta.texto}<br><br>ELIGE TU RESPUESTA, ANDREA:`;personSelectorContainer3.innerHTML='';personSelectorTitle3.style.display='none';crearCuadriculaRespuestas(pregunta);}
    function seleccionarRespuestaReto3(index){reto3State.andreasChoice=index;const cards=answerGridContainer3.querySelectorAll('.answer-card');cards.forEach((card,i)=>{if(i===index)card.classList.add('selected');card.onclick=null;});setTimeout(()=>{mostrarOpcionesInvitadoReto3();},1000);}
    function mostrarOpcionesInvitadoReto3(){reto3State.currentTurn='invited-choose-answer';const pregunta=preguntasReto3[reto3State.currentQuestion];const nombrePersona=pregunta.answeredBy;challenge3QuestionText.innerHTML=`${pregunta.texto}<br><br>${nombrePersona}, ¿SABES LA RESPUESTA DE ANDREA?`;if(!reto3State.isLooping){const cards=answerGridContainer3.querySelectorAll('.answer-card');cards.forEach((card,index)=>{card.classList.remove('selected');card.onclick=()=>validarRespuestaReto3(index);});}else{const cards=answerGridContainer3.querySelectorAll('.answer-card');cards.forEach((card,index)=>{card.onclick=()=>validarRespuestaReto3(index);});}jokerHintContainer.style.display='none';jokerButtonContainer.style.display='block';jokerArea.style.display='flex';if(pregunta.wasJokerUsed){const pista=pregunta.opciones[reto3State.andreasChoice].hint;jokerHintText.textContent=pista;jokerButtonContainer.style.display='none';jokerHintContainer.style.display='block';}else if(reto3State.jokers>0){jokerButtonContainer.classList.remove('disabled');}else{jokerButtonContainer.classList.add('disabled');}}
    function usarJokerReto3(){if(reto3State.jokers<=0)return;if(reto3State.currentTurn!=='invited-choose-answer')return;reto3State.jokers--;actualizarUIReto3();const pregunta=preguntasReto3[reto3State.currentQuestion];pregunta.wasJokerUsed=true;const pista=pregunta.opciones[reto3State.andreasChoice].hint;jokerHintText.textContent=pista;jokerButtonContainer.style.display='none';jokerHintContainer.style.display='block';}
    function validarRespuestaReto3(indexInvitado){answerGridContainer3.querySelectorAll('.answer-card').forEach(card=>card.onclick=null);jokerArea.style.display='none';const pregunta=preguntasReto3[reto3State.currentQuestion];const isCorrect=(indexInvitado===reto3State.andreasChoice);const trophy=document.getElementById(`trophy-3-${reto3State.currentQuestion}`);const cards=answerGridContainer3.querySelectorAll('.answer-card');cards[indexInvitado].classList.add('selected');setTimeout(()=>{if(isCorrect){reto3State.correctAnswers++;pregunta.status='correct';challenge3Feedback.innerHTML="¡CORRECTO!";challenge3Feedback.className='feedback-correct';trophy.classList.remove('failed');trophy.classList.add('correct');cards[indexInvitado].classList.remove('selected');cards[indexInvitado].classList.add('correct');cards[indexInvitado].classList.add('blink-effect');}else{reto3State.lives--;reto3State.totalLivesLost++;pregunta.status='failed';challenge3Feedback.innerHTML="¡FALLO!";challenge3Feedback.className='feedback-wrong';trophy.classList.remove('correct');trophy.classList.add('failed');const heart=document.getElementById(`heart-3-${reto3State.lives}`);if(heart)heart.classList.add('lost');cards[indexInvitado].classList.remove('selected');cards[indexInvitado].classList.add('wrong');cards[reto3State.andreasChoice].classList.add('selected');cards[reto3State.andreasChoice].classList.add('blink-effect');}setTimeout(()=>{challenge3Feedback.innerHTML='';comprobarEstadoJuegoReto3();},3000);},1000);}
    function comprobarEstadoJuegoReto3(){if(reto3State.lives<=0&&reto3State.correctAnswers<5){currentChallenge=3;mostrarCastigo();return;}let allAnswered=preguntasReto3.every(p=>p.status!=='pending');if(reto3State.isLooping){if(reto3State.correctAnswers>=5){terminarReto3(true);return;}let nextQ=(reto3State.currentQuestion+1)%preguntasReto3.length;while(preguntasReto3[nextQ].status==='correct'){nextQ=(nextQ+1)%preguntasReto3.length;}reto3State.currentQuestion=nextQ;actualizarUIReto3();mostrarPreguntaReto3();return;}if(allAnswered){if(reto3State.correctAnswers>=5){terminarReto3(true);}else{reto3State.isLooping=true;let firstFailed=0;while(preguntasReto3[firstFailed].status==='correct'){firstFailed++;}reto3State.currentQuestion=firstFailed;actualizarUIReto3();mostrarPreguntaReto3();}return;}let proximaPreguntaIndex=reto3State.currentQuestion+1;reto3State.currentQuestion=proximaPreguntaIndex;actualizarUIReto3();mostrarPreguntaReto3();}
    function terminarReto3(didWin){challengeContainer3.style.opacity='0';challengeTitle.style.display='none';setTimeout(()=>{challengeContainer3.style.display='none';appContainer.style.display='flex';appContainer.style.opacity='0';progressMarker.style.display='block';marcarRetoCompletado(3);reto3State.vidasGastadas=3-reto3State.lives;if(reto3State.vidasGastadas<0)reto3State.vidasGastadas=0;pasoActual=41;requestAnimationFrame(()=>{appContainer.style.opacity='1';});mostrarSiguienteMensaje();},500);}

    // --- RETO 4 ---
    function iniciarReto4() {
        currentChallenge = 4;
        appContainer.style.opacity = '0';
        continueButton.style.display = 'none';
        progressMarker.style.display = 'none';
        challengeTitle.textContent = "RETO 4";
        challengeTitle.style.display = 'block';
        document.getElementById('challenge-container-4').style.display = 'flex';
        document.getElementById('challenge-container-4').style.opacity = '1';
        progressBarContainer.style.display = 'flex';
        mostrarFase1Reto4();
    }
    
    function mostrarFase1Reto4() {
        if (reto4State.currentQuestion >= preguntasReto4.length) {
            challengeContainer4.style.opacity='0';
            progressBarContainer.style.display='none';
            setTimeout(() => {
                challengeContainer4.style.display='none';
                marcarRetoCompletado(4);
                pasoActual = 55;
                appContainer.style.opacity='1';
                appContainer.style.display='flex';
                mostrarSiguienteMensaje();
            }, 500);
            return;
        }
        const pregunta = preguntasReto4[reto4State.currentQuestion];
        challengeThemeText.textContent = pregunta.tematica;
        challengeThemeText.style.display = 'block';
        challenge4QuestionText.style.display = 'none'; 
        challengeSubtitle4.textContent = `PREGUNTA ${reto4State.currentQuestion + 1}`;
        answerGridContainer4.innerHTML = '';
        challenge4Feedback.innerHTML = '';
        personSelectorTitle4.style.display = 'block';
        personSelectorContainer4.innerHTML = '';
        reto4State.availablePeople.forEach(nombre => {
            const card = document.createElement('div');
            card.className = 'person-card';
            card.textContent = nombre;
            card.onclick = () => seleccionarAyudanteReto4(nombre);
            personSelectorContainer4.appendChild(card);
        });
        actualizarBarraVida();
    }
    
    function seleccionarAyudanteReto4(nombre) {
        reto4State.availablePeople = reto4State.availablePeople.filter(p => p !== nombre);
        mostrarFase2Reto4();
    }
    
    function mostrarFase2Reto4() {
        const pregunta = preguntasReto4[reto4State.currentQuestion];
        personSelectorTitle4.style.display = 'none';
        personSelectorContainer4.innerHTML = '';
        challenge4QuestionText.innerHTML = pregunta.enunciado;
        challenge4QuestionText.style.display = 'flex';
        answerGridContainer4.innerHTML = '';
        answerGridContainer4.className = 'grid-2x2';
        pregunta.opciones.forEach((opcion, index) => {
            const card = document.createElement('div');
            card.className = 'answer-card';
            card.innerHTML = `<span>${opcion}</span>`;
            card.onclick = () => validarRespuestaReto4(index);
            answerGridContainer4.appendChild(card);
        });
    }
    
    function validarRespuestaReto4(index) {
        const pregunta = preguntasReto4[reto4State.currentQuestion];
        const isCorrect = (index === pregunta.correcta);
        answerGridContainer4.querySelectorAll('.answer-card').forEach(c => c.onclick = null);
        const cards = answerGridContainer4.querySelectorAll('.answer-card');
        cards[index].classList.add('selected');
        setTimeout(() => {
            if(isCorrect) {
                cards[index].classList.remove('selected'); cards[index].classList.add('correct'); cards[index].classList.add('blink-effect');
                reto4State.correctAnswers++;
            } else {
                cards[index].classList.remove('selected'); cards[index].classList.add('wrong');
                cards[pregunta.correcta].classList.add('selected'); cards[pregunta.correcta].classList.add('blink-effect');
                reto4State.health--;
                actualizarBarraVida();
            }
            setTimeout(() => { mostrarAclaracion(pregunta.aclaracion); }, 2000);
        }, 1000);
    }
    
    function mostrarAclaracion(texto) {
        document.getElementById('explanation-text').innerHTML = texto; 
        document.getElementById('explanation-overlay').style.display = 'flex';
        document.getElementById('explanation-continue').onclick = () => {
            document.getElementById('explanation-overlay').style.display = 'none';
            siguientePreguntaReto4();
        };
    }
    
    function siguientePreguntaReto4() {
        reto4State.currentQuestion++;
        mostrarFase1Reto4();
    }
    
    function actualizarBarraVida() {
        for (let i = 8; i >= 1; i--) {
            const seg = document.getElementById(`seg-${i}`);
            if (i > reto4State.health) {
                seg.classList.remove('filled');
                seg.classList.add('lost');
            } else {
                seg.classList.add('filled');
                seg.classList.remove('lost');
            }
        }
    }
    
    // --- RETO 5 ---
    function iniciarReto5() {
        currentChallenge = 5;
        appContainer.style.opacity = '0';
        continueButton.style.display = 'none';
        progressMarker.style.display = 'none';
        challengeTitle.textContent = "RETO DE LA HONESTIDAD";
        challengeTitle.style.display = 'block';
        repescaOverlay.style.display = 'none';
        document.getElementById('challenge-container-5').style.display = 'flex';
        document.getElementById('challenge-container-5').style.opacity = '1';
        reto5State.currentQuestion = 0;
        reto5State.greenTicks = 0;
        reto5State.answers = [];
        reto5State.isLooping = false;
        mostrarPreguntaReto5();
    }
    
    function mostrarPreguntaReto5() {
        if (reto5State.isLooping) {
            if (reto5State.greenTicks >= reto5State.requiredExplanations) {
                terminarReto5();
                return;
            }
            let found = false;
            for(let i=reto5State.currentQuestion; i<preguntasReto5.length; i++) {
                if (reto5State.answers[i] && reto5State.answers[i].response === "SÍ" && !reto5State.answers[i].explained) {
                    reto5State.currentQuestion = i;
                    found = true;
                    break;
                }
            }
            if(!found) {
                reto5State.currentQuestion = 0;
                 for(let i=0; i<preguntasReto5.length; i++) {
                    if (reto5State.answers[i] && reto5State.answers[i].response === "SÍ" && !reto5State.answers[i].explained) {
                        reto5State.currentQuestion = i;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    terminarReto5();
                    return;
                }
            }
        }

        const pregunta = preguntasReto5[reto5State.currentQuestion];
        challengeSubtitle5.textContent = `PREGUNTA ${reto5State.currentQuestion + 1}`;
        challenge5QuestionText.innerHTML = pregunta.texto;
        commitmentButtonsContainer.style.visibility = 'hidden';
        commitmentButtonsContainer.classList.remove('blink-buttons');
        answerGridContainer5.innerHTML = '';
        answerGridContainer5.className = 'grid-2x2'; 
        if (reto5State.isLooping) {
             const card = document.createElement('div');
             card.className = 'answer-card selected';
             card.textContent = "SÍ";
             answerGridContainer5.appendChild(card);
             commitmentButtonsContainer.style.visibility = 'visible';
             commitmentButtonsContainer.classList.add('blink-buttons');
        } else {
            ["SÍ", "NO"].forEach(opcion => {
                const card = document.createElement('div');
                card.className = 'answer-card';
                card.textContent = opcion;
                card.onclick = () => seleccionarSiNo(card, opcion);
                answerGridContainer5.appendChild(card);
            });
        }
        actualizarMarcadorReto5();
    }
    
    function seleccionarSiNo(card, opcion) {
        answerGridContainer5.querySelectorAll('.answer-card').forEach(c => c.onclick = null);
        card.classList.add('selected');
        if (!reto5State.answers[reto5State.currentQuestion]) {
            reto5State.answers[reto5State.currentQuestion] = { response: opcion, explained: false };
        }
        if (opcion === "NO") {
            setTimeout(() => {
                reto5State.currentQuestion++;
                if (reto5State.currentQuestion < preguntasReto5.length) {
                     mostrarPreguntaReto5();
                } else {
                     comprobarFinalReto5();
                }
            }, 1000);
        } else {
            commitmentButtonsContainer.style.visibility = 'visible';
            commitmentButtonsContainer.classList.add('blink-buttons');
        }
    }
    
    function seleccionarExplicacion(explica) {
        if (reto5State.answers[reto5State.currentQuestion]) {
            reto5State.answers[reto5State.currentQuestion].explained = explica;
        } else {
             reto5State.answers[reto5State.currentQuestion] = { response: "SÍ", explained: explica };
        }
        if (explica) {
            reto5State.greenTicks++;
        }
        reto5State.currentQuestion++;
        if (!reto5State.isLooping) {
            if (reto5State.currentQuestion < preguntasReto5.length) {
                 mostrarPreguntaReto5();
            } else {
                 comprobarFinalReto5();
            }
        } else {
             mostrarPreguntaReto5();
        }
    }
    
    function comprobarFinalReto5() {
        const totalYes = reto5State.answers.filter(a => a.response === "SÍ").length;
        const required = Math.ceil(totalYes / 2);
        reto5State.requiredExplanations = required;
        if (reto5State.greenTicks >= required) {
            terminarReto5();
        } else {
            const needed = required - reto5State.greenTicks;
            repescaText.innerHTML = `Has contestado a las 8 preguntas y <span class="highlight-data">${totalYes}</span> de ellas han sido SÍ.<br><br>Sin embargo, sólo has dado <span class="highlight-data">${reto5State.greenTicks}</span> explicaciones y visto lo visto, te vamos a exigir al menos <span class="highlight-data">${needed}</span> explicaciones más.`;
            repescaOverlay.style.display = 'flex'; 
        }
    }

    function cerrarRepescaEIniciarBucle() {
        repescaOverlay.style.display = 'none';
        reto5State.isLooping = true;
        reto5State.currentQuestion = 0;
        mostrarPreguntaReto5();
    }
    
    function actualizarMarcadorReto5() {
        ticksContainer.innerHTML = '';
        for(let i=0; i<reto5State.greenTicks; i++) {
            ticksContainer.innerHTML += '<span class="tick-icon">✅</span>';
        }
    }
    
    function terminarReto5() {
        challengeContainer5.style.opacity = '0';
        repescaOverlay.style.display = 'none';
        progressMarker.style.display = 'none';
        challengeTitle.style.display = 'none';

        setTimeout(() => {
            challengeContainer5.style.display = 'none';
            iniciarConfeti();
            setTimeout(() => {
                finalGiftImage.style.display = 'block';
                void finalGiftImage.offsetWidth; 
                finalGiftImage.style.opacity = '1';
            }, 1000); 
        }, 500);
    }

});