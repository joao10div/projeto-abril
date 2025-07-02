let display = document.getElementById('display');

function inserirNumero(num) {
    display.value += num;
}

function inserirOperador(op) {
    display.value += op;
}

function limparDisplay() {
    display.value = '';
}

function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}
