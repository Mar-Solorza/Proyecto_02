var cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "456" },
    { nombre: "Maui", saldo: 67, password: "789" }
];

var selectedAccount = null;

function authenticate() {
    var passwordInput = document.getElementById('passwordInput').value;
    var accountName = document.getElementById('account').value;

    var account = cuentas.find(function (cuenta) {
        return cuenta.nombre === accountName && cuenta.password === passwordInput;
    });

    if (account) {
        selectedAccount = account;
        document.getElementById('operations').style.display = 'block';
        updateBalance();
    } else {
        alert('Contraseña incorrecta, intenta nuevamente.');
        
    }
}

function checkBalance() {
    updateBalance();
    alert(`Saldo actual: $${selectedAccount.saldo}`);
}

function deposit() {
    var amount = prompt("Ingrese el monto a depositar:");
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert('Ingrese un monto válido, por favor.');
        return;
    }

    selectedAccount.saldo += amount;
    updateBalance();
    alert(`Monto ingresado: $${amount}\nNuevo saldo: $${selectedAccount.saldo}`);
}

function withdraw() {
    var amount = prompt("Ingrese el monto a retirar:");
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert('Ingrese un monto válido.');
        return;
    }

    if (selectedAccount.saldo - amount < 10 || selectedAccount.saldo - amount > 990) {
        alert('Recuerde que, la regla de negocio no permite que el saldo sea inferior a $10 o superior a $990.');
        return;
    }

    selectedAccount.saldo -= amount;
    updateBalance();
    alert(`Monto retirado: $${amount}\nNuevo saldo: $${selectedAccount.saldo}`);
}

function updateBalance() {
    document.getElementById('balance').innerText = `Saldo actual: $${selectedAccount.saldo}`;
}