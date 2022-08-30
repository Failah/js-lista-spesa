console.log('JS OK!');

// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente,
// basta che si vedano) gli elementi della lista individualmente con un
// ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio
//  del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una
// condizione di uscita, all'interno ciclo while


const list = ['Pomodori', 'Pane', 'Bevande', 'Carne', 'Zucchero'];
const listGenerator = document.getElementById('list-generator');

let counter = 0;

listGenerator.addEventListener('click',
    function () {
        while (counter < list.length) {

            console.log(list[counter]);
            document.getElementById('shopping-list').append(list[counter]);

            counter++;
        }
    })


// SECRET MESSAGE 

listGenerator.addEventListener('click',
    function () {
        document.getElementById('secret-message').classList.add('d-none');
    }
)

document.getElementById('secret-message').addEventListener('click',
    function () {
        document.getElementById('message-pop').classList.remove('d-none');
    }
)