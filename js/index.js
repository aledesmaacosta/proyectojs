const pesoAgua = 1.75

const plan1JSON = JSON.stringify(plan1);
localStorage.setItem("plan1", plan1JSON);

const plan1LocalStorage = localStorage.getItem("plan1");
const plan1Objeto = JSON.parse(plan1LocalStorage)

console.log(plan1Objeto);

const plan1 = new Plan("Plan Básico", "4 semanas", 1500);
const plan2 = new Plan("Plan Intermedio", "8 semanas", 2500);
const plan3 = new Plan("Plan Aanzado", "12 semanas", 4000);

localStorage.setItem("plan1", 1500);
localStorage.setItem("plan2", 2500);
localStorage.setItem("plan3", 4000);

function calcularPerdidaDePeso(inicial, meses, perdido) {
    console.log("Detalle de Bajada 🏋️")
    let cantidadMeses = (inicial * perdido) / meses
        for (let i = 1; i <= meses; i++) {
            console.log("Por mes" + i + "kg" + (inicial - perdido) / meses)

    }
}

function simularPerdidaDePeso() {
    let inicial = parseInt(prompt("¿Cuánto peso querés bajar?"))
    let cantidadMeses = parseInt(prompt("¿En cuántos meses queres llegar a tu peso?"))

    if (cantidadMeses >= 4 && cantidadMeses <= 50){
        calcularPerdidaDePeso(inicial, cantidadMeses, pesoAgua)
    } else {
        console.warn("Para una perdida de peso saludable recomendamos que te tomes tu tiempo, mínimo 4 meses")
    }
}


/*const habitosSaludables = ["alimentación saludable", "ejercicio frecuente", "hidratación", "descanso apropiado"]

for (let i = 0; i < habitosSaludables.length; i++){
    console.log(habitosSaludables[i]);
}

const plan1 = {
    nombre: "Plan Básico",
    duracion: "4 semanas",
    precio: 1500
}
const plan2 = {
    nombre: "Plan Intermedio",
    duracion: "8 semanas",
    precio:2500
}
const plan3 = {
    nombre: "Plan Avanzado",
    duracion: "12 semanas",
    precio: 4000
}*/

function Plan(nombre, duracion, precio){
    this.nombre = nombre;
    this.duracion = duracion;
    this.precio = precio;

}

/*const plan1 = new Plan("Plan Básico", "4 semanas", 1500);
const plan2 = new Plan("Plan Intermedio", "8 semanas", 2500);
const plan3 = new Plan("Plan Aanzado", "12 semanas", 4000);*/

//formulario

const nombreForm = document.querySelector("#nombre");
const edadForm = document.querySelector("#edad");
const pesoForm = document.querySelector("#peso");


nombreForm.addEventListener("input", () => {
    console.log(nombreForm.value);
})

edadForm.addEventListener("input", () => {
    console.log(edadForm.value);
})

pesoForm.addEventListener("input", () => {
    console.log(pesoForm.value);
    
})

const enviar = document.querySelector("#enviar");
enviar.addEventListener("click", enviarPlan);

function enviarPlan() {
    alert("En breve te indicaremos el plan recomendado");
}

if (pesoForm >= 50 && pesoForm <=70){
    alert("Te recomendamos el Plan Básico")
} if (pesoForm >=71 && pesoForm <=85){
    alert("Te recomendamos el Plan Intermedio")
} 

const planes = [
    { nombre: "Plan Básico - 4w", precio: 1500 },
    { nombre: "Plan Intermedio - 8w", precio: 2500 },
    { nombre: "Plan Avanzado - 12w", precio: 4000 },
   
];

const contenido = document.querySelector("#contenido");

    
planes.forEach((plan) => {
    console.log(plan.nombre);
    console.log(plan.precio);
});

let lista = document.createElement("ul");
lista.classList.add("lista");

for (plan of planes) {
    lista.innerHTML += `<li class="lista-item"> ${plan}</li>`

}


