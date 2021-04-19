document.getElementById("output").style.visibility = "hidden";

const year_HTML = document.querySelector("#yearInput");
const months_HTML = document.querySelector("#monthInput");
const day_HTML = document.querySelector("#dayInput");

// Objeto date
let fecha = new Date();
let yearMax = fecha.getFullYear();
let yearMin = yearMax - 100;
let months = fecha.getMonth();
let day = fecha.getDate();


// Variables Bandera
let bandera1 = false;
let bandera2 = false;
let bandera3 = false;



console.log("Mes", months);
console.log("Dia", day);

// Arreglo
let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
let diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


eventListener();

function eventListener() {
    llenarSelectYears();
    llenarSelectMonths();
    llenarSelectDay();

}


// Generar un objeto con la búsqueda
const datosFecha = {

    year: 0,
    month: 0,
    day: 0
};


// EVENTS
year_HTML.addEventListener("change", event => {

    // Trae el valor del Select HTML (event.target.value)

    datosFecha.year = parseInt(event.target.value);

    bandera1 = true;
    console.log(datosFecha);

    mostrarEquivalencias();


});


months_HTML.addEventListener("change", event => {

    // Trae el valor del Select HTML (event.target.value)
    datosFecha.month = meses.indexOf(event.target.value);

    bandera2 = true;

    console.log(datosFecha);
    mostrarEquivalencias();

});


day_HTML.addEventListener("change", event => {

    // Trae el valor del Select HTML (event.target.value)
    datosFecha.day = parseInt(event.target.value);

    bandera3 = true;

    console.log(datosFecha);
    mostrarEquivalencias();

});



function mostrarEquivalencias() {

    // Variables
    let yearsOutput = 0;
    let monthsOutput = 0;
    let daysOutput = 0;



    // Si year es menor al actual y mes es menor al mes actual y dias menos que el actual
    if ((datosFecha.year < yearMax) && (datosFecha.month < months) && (datosFecha.day < day)) {
        yearsOutput = yearMax - datosFecha.year;
        monthsOutput = months - datosFecha.month;
        daysOutput = day - datosFecha.day;
        // Si year es menor al actual y mes es menor al mes actual y dias igual que el actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month < months) && (datosFecha.day == day)) {
        yearsOutput = yearMax - datosFecha.year;
        monthsOutput = months - datosFecha.month;
        daysOutput = 0;

        // Si year es menor al actual y mes es menor al mes actual y dias mayor que el actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month < months) && (datosFecha.day > day)) {
        console.log("LOCO");
        yearsOutput = yearMax - datosFecha.year;
        monthsOutput = (months - datosFecha.month) - 1;
        daysOutput = diasMeses[months] - (datosFecha.day - day);

        // Si year es menor al actual y mes es menor al mes actual y dias mayor que el actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month == months) && (datosFecha.day == day)) {
        yearsOutput = yearMax - datosFecha.year;
        monthsOutput = 0;
        daysOutput = 0;

        // Si year es menor al actual y mes es igual al mes actual y dias menor al actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month == months) && (datosFecha.day < day)) {
        yearsOutput = (yearMax - datosFecha.year);
        monthsOutput = 0;
        daysOutput = day - datosFecha.day;

        // Si year es menor al actual y mes es igual al mes actual y dias mayor al actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month == months) && (datosFecha.day > day)) {

        yearsOutput = (yearMax - datosFecha.year) - 1;
        monthsOutput = 12 - 1;
        console.log(diasMeses[months]);
        daysOutput = diasMeses[months] - (datosFecha.day - day);

        // Si year es menor al actual y mes es mayor al mes actual y dias menor al actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month > months) && (datosFecha.day < day)) {
        yearsOutput = (yearMax - datosFecha.year) - 1;
        monthsOutput = (12 - (datosFecha.month - months));
        daysOutput = day - datosFecha.day;

        // Si year es igual al actual y mes es mayor al actual y dia es igual al actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month > months) && (datosFecha.day == day)) {
        yearsOutput = (yearMax - datosFecha.year) - 1;
        monthsOutput = (12 - (datosFecha.month - months));
        daysOutput = 0;

        // Si year es igual al actual y mes es mayor al actual y dia es mayor al actual
    } else if ((datosFecha.year < yearMax) && (datosFecha.month > months) && (datosFecha.day > day)) {
        yearsOutput = (yearMax - datosFecha.year) - 1;
        monthsOutput = (12 - (datosFecha.month - months) - 1);
        daysOutput = diasMeses[months] - (datosFecha.day - day);

    }
    // Si year es mayor o igual al actual y mes es menor al actual 
    else if ((datosFecha.year >= yearMax) && (datosFecha.month < months) && (datosFecha.day < day)) {
        yearsOutput = 0;
        monthsOutput = months - datosFecha.month;
        daysOutput = day - datosFecha.day;

        // Si year es mayor o igual al actual y mes es menor al actual  y dia es igual al actual
    } else if ((datosFecha.year >= yearMax) && (datosFecha.month < months) && (datosFecha.day == day)) {
        yearsOutput = 0;
        monthsOutput = months - datosFecha.month;
        daysOutput = 0;

        // Si year es mayor o igual al actual y mes es menor al actual  y dia es mayor al actual
    } else if ((datosFecha.year >= yearMax) && (datosFecha.month < months) && (datosFecha.day > day)) {
        yearsOutput = 0;
        monthsOutput = (months - datosFecha.month) - 1;
        daysOutput = diasMeses[months] - (datosFecha.day - day);

        // Si year es igual al actual y dia es igual al actual
    } else if ((datosFecha.year >= yearMax) && (datosFecha.month == months) && (datosFecha.day == day)) {
        yearsOutput = 0;
        monthsOutput = 0;
        daysOutput = 0;
        // Si year es igual al actual y dia es igual al actual
    } else if ((datosFecha.year >= yearMax) && (datosFecha.month == months) && (datosFecha.day < day)) {
        yearsOutput = 0;
        monthsOutput = 0;
        daysOutput = day - datosFecha.day;

    } else {
        console.log("Ninguno");
    }


    if (bandera1 && bandera2 && bandera3) {

        // Para hacerlo visible
        document.getElementById("output").style.visibility = "visible";

        document.getElementById("grOutput").innerHTML = yearsOutput;
        document.getElementById("kgOutput").innerHTML = monthsOutput;
        document.getElementById("ozOutput").innerHTML = daysOutput;

    }





}


// Llena select de year
function llenarSelectYears() {

    for (let y = yearMax; y > yearMin; y--) {
        const yearOpciones = document.createElement("option");


        yearOpciones.value = y;
        yearOpciones.textContent = `
            ${y} 
        `;

        // Insertar en HTML
        year_HTML.appendChild(yearOpciones); // Agrega las opciones al select
    }
}

// Llena select de meses
function llenarSelectMonths() {

    for (const iterator of meses) {
        const monthsOpciones = document.createElement("option");

        monthsOpciones.value = iterator;
        monthsOpciones.textContent = `
            ${iterator}
        `;

        // Insertar en HTML
        months_HTML.appendChild(monthsOpciones); // Agrega las opciones al select

    }

}


// Llena select de meses
function llenarSelectDay() {

    for (let index = 1; index <= 31; index++) {

        const dayOpciones = document.createElement("option");

        dayOpciones.value = index;
        dayOpciones.textContent = `
            ${index}
        `;

        // Insertar en HTML
        day_HTML.appendChild(dayOpciones); // Agrega las opciones al select

    }

}
