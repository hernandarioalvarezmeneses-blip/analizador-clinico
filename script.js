
function detectar(texto){

texto = texto.toLowerCase()

let c = []

if(/madre|padre|famil|hogar|herman|crianza|hijo|infancia/.test(texto)) c.push("familia")

if(/pareja|novi|espos|relacion|separacion|infidelidad|convivencia/.test(texto)) c.push("pareja")

if(/discusion|conflict|pele|tension|problema|dificultad/.test(texto)) c.push("conflicto")

if(/ansiedad|angust|nervio|preocup|inquietud|estres|sobrecarga/.test(texto)) c.push("ansiedad")

if(/triste|depres|llanto|desanimo|vacío|soledad|melancol/.test(texto)) c.push("depresion")

if(/violenc|maltrat|agres|grito|amenaza/.test(texto)) c.push("violencia")

if(/duelo|perdid|fallec|muerte|ausencia/.test(texto)) c.push("duelo")

if(/trabaj|laboral|empleo|jefe|compañero|oficina/.test(texto)) c.push("laboral")

if(/solo|aislad|distancia|rechazo/.test(texto)) c.push("aislamiento")

if(/autoestima|valor|insegur|confianza/.test(texto)) c.push("autoestima")

if(/control|impuls|reaccion|ira|enojo/.test(texto)) c.push("emocional")

return c

}

function random(arr){

return arr[Math.floor(Math.random()*arr.length)]

}

function actividades(){

let lista=[

"realizar caminatas reflexivas en espacios abiertos",
"mantener un registro escrito de pensamientos y emociones relevantes",
"practicar ejercicios de respiración consciente en momentos de tensión",
"desarrollar actividades recreativas que favorezcan bienestar emocional",
"fortalecer el diálogo con personas significativas de su entorno",
"participar en actividades físicas moderadas de manera constante",
"realizar momentos de reflexión personal al finalizar el día",
"propiciar espacios de descanso emocional alejados de estímulos estresores",
"dedicar tiempo a actividades creativas como escritura, música o dibujo",
"mantener contacto con entornos naturales que favorezcan regulación emocional",
"organizar rutinas diarias que generen sensación de estabilidad",
"identificar y registrar situaciones que generen bienestar personal",
"participar en actividades sociales que favorezcan vínculos saludables",
"desarrollar ejercicios de gratitud o reconocimiento personal",
"establecer momentos de pausa consciente durante la jornada",
"fortalecer la comunicación asertiva con personas cercanas",
"identificar pensamientos recurrentes asociados a malestar",
"desarrollar prácticas de autocuidado físico y emocional",
"dedicar espacios semanales a actividades que generen satisfacción personal",
"practicar ejercicios de regulación emocional ante situaciones de estrés"

]

let seleccion=[]

while(seleccion.length<3){

let a=random(lista)

if(!seleccion.includes(a)) seleccion.push(a)

}

return seleccion

}

function generarAnalisis(){

let seccion = document.getElementById("seccion").value
let motivo = document.getElementById("motivo").value
let datos = document.getElementById("datos").value

let texto = motivo+" "+datos

let contextos = detectar(texto)

let intro=[

`A partir del motivo de consulta (${motivo}) y de los elementos narrativos compartidos durante el espacio clínico (${datos}), es posible comprender la experiencia del consultante dentro de un entramado relacional más amplio en el cual los distintos sistemas de interacción influyen en la configuración de su vivencia emocional.`,

`La narrativa presentada por el consultante en relación con (${motivo}) junto con los datos contextuales descritos (${datos}) permite aproximarse a la situación desde una perspectiva sistémica, entendiendo el malestar expresado como parte de procesos interactivos que se desarrollan en los diferentes sistemas relacionales del paciente.`,

`El relato expuesto durante la consulta respecto a (${motivo}) y los elementos contextuales asociados (${datos}) posibilitan analizar la experiencia desde una lectura sistémica en la cual las emociones y conductas descritas se encuentran vinculadas a dinámicas relacionales presentes en su entorno.`

]

let analisis = random(intro)

if(contextos.includes("familia"))
analisis += " En este sentido, las dinámicas familiares, los patrones de comunicación y la organización de roles dentro del sistema podrían estar influyendo en la forma en que el consultante experimenta su situación actual."

if(contextos.includes("pareja"))
analisis += " Asimismo, las interacciones dentro del subsistema de pareja pueden constituir un elemento relevante en la configuración de las experiencias descritas, particularmente en relación con expectativas relacionales y formas de interacción emocional."

if(contextos.includes("conflicto"))
analisis += " Las situaciones de tensión referidas sugieren la presencia de patrones de interacción que podrían estar manteniendo dinámicas de conflicto o dificultades comunicacionales dentro del sistema relacional."

if(contextos.includes("ansiedad"))
analisis += " El estado de inquietud emocional descrito puede comprenderse como una respuesta de activación frente a demandas contextuales percibidas como significativas para el consultante."

if(contextos.includes("depresion"))
analisis += " Las manifestaciones de tristeza o desánimo pueden relacionarse con procesos de reorganización emocional frente a experiencias vitales que requieren elaboración progresiva."

if(contextos.includes("violencia"))
analisis += " Las dinámicas descritas sugieren la posible presencia de interacciones generadoras de impacto emocional significativo, por lo cual resulta pertinente continuar explorando estos patrones dentro del proceso terapéutico."

if(contextos.includes("duelo"))
analisis += " Las experiencias de pérdida suelen movilizar procesos emocionales complejos que requieren ser integrados progresivamente dentro de la narrativa personal del consultante."

if(contextos.includes("laboral"))
analisis += " El contexto laboral mencionado podría estar actuando como un escenario relevante en la experiencia emocional del consultante, especialmente en relación con demandas, responsabilidades o interacciones profesionales."

if(contextos.includes("aislamiento"))
analisis += " Las referencias a experiencias de aislamiento sugieren la posible presencia de distanciamiento relacional que podría estar influyendo en la vivencia emocional actual."

if(contextos.includes("autoestima"))
analisis += " Los elementos relacionados con la valoración personal indican la importancia de explorar procesos vinculados a la construcción de la autoimagen y el reconocimiento de recursos personales."

if(contextos.includes("emocional"))
analisis += " Las dificultades asociadas a la regulación emocional pueden indicar la necesidad de fortalecer estrategias de manejo de reacciones ante situaciones de tensión."

if(seccion=="Primera consulta")
analisis += " En esta fase inicial del proceso terapéutico el trabajo clínico se orienta a comprender la narrativa del consultante y a identificar posibles dinámicas relacionales implicadas en su experiencia."

if(seccion=="Seguimiento terapéutico")
analisis += " Dentro del proceso terapéutico en curso, este espacio permite continuar profundizando en la comprensión de los patrones relacionales previamente identificados."

if(seccion=="Proceso terapéutico avanzado")
analisis += " En una etapa más avanzada del proceso terapéutico se busca favorecer procesos de resignificación y fortalecimiento de recursos personales para afrontar las situaciones descritas."

if(seccion=="Cierre o consolidación del proceso")
analisis += " En esta fase del proceso terapéutico el trabajo clínico se orienta a consolidar los aprendizajes obtenidos y fortalecer las estrategias de afrontamiento desarrolladas."

let act = actividades()

let plan = `

Como parte del proceso terapéutico se propone continuar fortaleciendo recursos personales que permitan al consultante afrontar las situaciones descritas desde una perspectiva reflexiva y de autocuidado. En este sentido, puede resultar útil ${act[0]}, así como ${act[1]}. De igual manera, se sugiere ${act[2]} como una estrategia que favorezca la reflexión personal sobre las experiencias emocionales abordadas durante el proceso terapéutico.`

document.getElementById("resultado").innerText = analisis + plan

}
