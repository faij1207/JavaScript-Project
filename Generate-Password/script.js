const passwordBox = document.getElementById('password');
const length = 16;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = "!@#$%^&*()_+-/?=|";

function createPassword() {
    let password = '';
    const all = upperCase + lowerCase + numbers + symbols;

    // Ensuring at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the remaining length of the password
    for (let i = password.length; i < length; i++) {
        const character = Math.floor(Math.random() * all.length);
        password += all.charAt(character);
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
