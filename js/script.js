/* 
    1- prendere l'id
    2- fra un ciclo for che parte da 1 a 100
    3- fare 3 controlli:
        1- divisibile per 3
        2- divisibile per 5
        3- divisibile per entrambi
    4- inserire il numero
    4b- in base hai controlli aggiungere una diversa classe
    5- stampare tutto
*/

// 1- prendere l'id

const tableFizzBuzz = document.getElementById('table-fizzbuzz');
const activeFizz = document.querySelector('.activefizz')

let tableElements = ''


for (let i=1; i <= 100; i++){

// creiamo la nostra col
tableElements += '<div class="col-3 gy-4">';

//facciamo i  controlli
if(i % 15 === 0){
    tableElements += '<div class="card bg-success"><div class="card-body">FizzBuzz</div></div>';
} else if(i % 5 === 0){
    tableElements += '<div class="card bg-warning"><div class="card-body">Buzz</div></div>';
}else if(i % 3 === 0){
    tableElements += '<div class="card bg-danger"><div class="card-body">Fizz</div></div>';
}else {
    tableElements += `<div class="card bg-primary"><div class="card-body">${i}</div></div>`;
}

// chiudiamo la col 
tableElements += '</div>';
}


// stampiamo 
tableFizzBuzz.innerHTML += tableElements;
