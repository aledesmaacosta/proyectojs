const body = document.querySelector(".body")

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c763a3c28msh86c449b51963397p153d77jsn4e4cf165fd3d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


fetch("https://open-weather-map27.p.rapidapi.com/weather", options)
    .then(res => res.json())
    .then(response => {
        console.log(response)
    })

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}



const pesoAgua = 1.75


const plan1LocalStorage = localStorage.getItem("plan1");
const plan1Objeto = JSON.parse(plan1LocalStorage)

console.log(plan1Objeto);

const plan1 = new Plan("Plan Básico", "4 semanas", 1500);
const plan2 = new Plan("Plan Intermedio", "8 semanas", 2500);
const plan3 = new Plan("Plan Aanzado", "12 semanas", 4000);

localStorage.setItem("plan1", 1500);
localStorage.setItem("plan2", 2500);
localStorage.setItem("plan3", 4000);

const plan1JSON = JSON.stringify(plan1);
localStorage.setItem("plan1", plan1JSON);

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


const planes = [
    { id: "Plan Básico", precio: 1500 },
    { id: "Plan Intermedio", precio: 2500 },
    { id: "Plan Avanzado", precio: 4000 },
   
];

const preguntarPlanes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(preguntarPlanes);
        }, 3000);
    }
    )
}

let guia = [];
const precios = document.querySelector("#lista");

function verPlanes(array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre}`

        lista.append(li);
    });
}

preguntarPlanes()
    .then((res) => {
        guia = res;
        verPlanes(planes);

    })
    
planes.forEach((plan) => {
    console.log(plan.nombre);
    console.log(plan.precio);
});

let lista = document.createElement("ul");
lista.classList.add("lista");

for (plan of planes) {
    lista.innerHTML += `<li class="lista"> ${planes}</li>`
}

body.append(lista);

let peso = 50

console.log( peso >= 100 ? "Plan 16 semanas" : "Plan 8 semanas" );

const nombre = document.getElementById("nombre")
const kilo = document.getElementById("kilo")
const form = document.getElementById("form")
const error1 = document.getElementById("error")

form.addEventListener('submit', (e) => {

    let mensaje = []
    if (nombre.value === "" || nombre.value == null){
        mensaje.push("Por favor ingrese nombre")
    }

    if (mensaje.length >0) {
        e.preventDefault()
        error1.innerText = mensaje.join(", ")
    }
    
})


const intervalo = setInterval(() => {
    console.log("¿Necesitas ayuda?")
}, 5000);

