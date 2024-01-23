document.getElementById('encryptButton').addEventListener('click', function () {
    const input = document.getElementById('inputText').value;
    if (isValidInput(input)) {
        document.getElementById('outputText').value = encryptText(input);
    } else {
        alert('El texto no debe contener mayúsculas ni caracteres especiales.');
    }
});

document.getElementById('decryptButton').addEventListener('click', function () {
    const input = document.getElementById('inputText').value;
    if (isValidInput(input)) {
        document.getElementById('outputText').value = decryptText(input);
    } else {
        alert('El texto no debe contener mayúsculas ni caracteres especiales.');
    }
});

document.getElementById('copyButton').addEventListener('click', function () {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles.');
});

function isValidInput(input) {
    return /^[a-z\s]*$/.test(input);
}

function encryptText(text) {
    // Aquí se implementa la lógica de encriptación.
    // Por ejemplo, un cifrado simple de desplazamiento de caracteres.
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
}

function decryptText(text) {
    // Aquí se implementa la lógica de desencriptación.
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
}
