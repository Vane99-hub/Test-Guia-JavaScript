const bd_test = [
    {
        id:0,
        pregunta:"¿Para que sirve el tipo de dato Number?",
        op0:"Representar numeros enteros y de punto flotante",
        op1:"Crear datos identificadores únicos para los objetos",
        op2:"Almacenar solo dos valores de True/False",
        op3:"Almacenar colecciones de datos y entidades más complejas",
        correcta:"0"
    },
    {
        id:1,
        pregunta:"¿Que representa Null?",
        op0:"Representa un número entero",
        op1:"Representa un valor vacío",
        op2:"Representa un número decimal",
        op3:"Representa una variable cuantitativa",
        correcta:"1"
    },
    {
        id:2,
        pregunta:"¿Qué se ejecuta con la estructura If-Then-Else?",
        op0:"Esta estructura ejecuta una sentencia solo si una condición especificada es evaluada como falsa. Si la condición es verdadera, no se ejecuta ninguna acción",
        op1:"Esta estructura ejecuta una sentencia, si una condición especificada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia en la cláusula opcional Else será ejecutada",
        op2:"Esta estructura se utiliza para ejecutar múltiples sentencias simultáneamente, independientemente de si la condición es verdadera o falsa",
        op3:"Esta estructura permite repetir una sentencia de forma indefinida, sin importar si la condición es verdadera o falsa",
        correcta:"1"
    },
    {
        id:3,
        pregunta:"¿Qué permite la expresión Switch?",
        op0:"Permite ejecutar una sentencia de manera indefinida hasta que una condición sea falsa",
        op1:"Permite comparar múltiples condiciones en un solo bloque, pero sin usar instancias específicas",
        op2:"Permite realizar ciclos repetitivos en función del valor de una expresión, sin considerar casos específicos",
        op3:"Permite evaluar una expresión, comparando el valor de esa expresión con una instancia case",
        correcta:"3"
    },
    {
        id:4,
        pregunta:"¿Para qué sirve el bucle while?",
        op0:"Permite crear una estructura de decisión que evalúa una condición hasta que se cumple",
        op1:"Ejecuta una sentencia una sola vez sin importar la condición.",
        op2:"Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera",
        op3:"Utiliza un contador para repetir una operación un número determinado de veces",
        correcta:"2"
    },
    {
        id:5,
        pregunta:"¿Hasta qué momento se repite el bucle For?",
        op0:"El ciclo se repite hasta que el número de iteraciones sea alcanzado",
        op1:"Este ciclo se repite hasta que una condición especificada sea evaluada como False",
        op2:"El ciclo se repite hasta que se cumple un tiempo específico",
        op3:"El ciclo se repite hasta que el programa se detenga de forma manual",
        correcta:"1"
    },
    {
        id:6,
        pregunta:"¿Para qué sirve esta función: Array.from()?",
        op0:"Convierte un objeto Array en una cadena de texto",
        op1:"Elimina los elementos duplicados de un array",
        op2:"Crea una nueva instancia de Array a partir de algo similar a un Array",
        op3:"Modifica el contenido de un array sin cambiar su longitud",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"¿Para qué sirve la función constructor en un arreglo?",
        op0:"Se utiliza para crear funciones de comparación entre arreglos",
        op1:"Se utiliza para crear objetos derivados",
        op2:"Se utiliza para ordenar los elementos de un arreglo de forma automática",
        op3:"Se utiliza para convertir un arreglo en un objeto JSON",
        correcta:"1"
    },
    {
        id:8,
        pregunta:"¿Qué palabra es clave para declarar una clase?",
        op0:"Class",
        op1:"Funcion",
        op2:"Object",
        op3:"Let",
        correcta:"0"
    },
    {
        id:9,
        pregunta:"¿Qué define la palabra static?",
        op0:"Define una variable local dentro de un método",
        op1:"Define un objeto global accesible desde cualquier parte del código",
        op2:"Define una propiedad que puede ser modificada en cualquier momento",
        op3:"Define un método estático para una clase",
        correcta:"3"
    },
    {
        id:10,
        pregunta:"¿Qué son los métodos?",
        op0:"Son variables que almacenan valores temporales",
        op1:"Son estructuras que permiten organizar los datos en un programa",
        op2:"Son bloques de código que se utilizan para realizar tareas específicas",
        op3:"Son elementos que permiten la comunicación entre diferentes programas",
        correcta:"2"
    },
    {
        id:11,
        pregunta:"¿Es necesario crear un objeto para invocar el método estatico?",
        op0:"Verdadero",
        op1:"Falsa",
        correcta:"1"
    },
]

let respuestas = [];
let cantiCorrectas = 0;
let numPreguntas = 0;

function cargarPreguntas(){
    const pregunta = bd_test[numPreguntas];
    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " +  pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);
    const label4 = crearLabel("3",pregunta.op3);

    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);
    opciones.appendChild(label4);

    contenedor.appendChild(opciones);
    document.getElementById("test").appendChild(contenedor);
}

function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPreguntas + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPreguntas;
    input.setAttribute("onclick", "seleccionar(" + numPreguntas+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPreguntas + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

for(i=0;i < bd_test.length;i++){
    cargarPreguntas();
    
    numPreguntas++;
}

function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
    console.log('respuestas:')
}

let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    console.log("1");
    for(i=0;i<bd_test.length;i++){
        const pregunta = bd_test[i];
        if(pregunta.correcta == respuestas[i]){ 
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            console.log('id:', id);
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }


let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = false;
    }

    window.scrollTo(0,0);
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (12-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("test").appendChild(h2);
}