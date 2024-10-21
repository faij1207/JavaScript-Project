const password = document.getElementById('password');
const message = document.getElementById('message');
const strength = document.getElementById('strength');

const updateStrengthMessage = (text, color) => {
    strength.textContent = text;
    strength.style.color = color;
    password.style.border = `1px solid ${color}`;
    message.style.color = color;
};

password.addEventListener('input', () => {
    if (password.value.length > 0) {
    message.style.display = 'block';
    } else {
    message.style.display = 'none';
    }

    if (password.value.length < 4) {
    updateStrengthMessage('Too Weak', 'red');
    } else if (password.value.length < 8) {
    updateStrengthMessage('Weak', 'orange');
    } else if (password.value.length < 12) {
    updateStrengthMessage('Strong', 'green');
    } else {
    updateStrengthMessage('Very Strong', 'blue');
    }
});

//check password strength using regular expressions

// const password = document.getElementById('password');
// const message = document.getElementById('message');
// const strength = document.getElementById('strength');

// const updateStrengthMessage = (text, color) => {
//     strength.textContent = text;
//     strength.style.color = color;
//     password.style.border = `1px solid ${color}`;
//     message.style.color = color;
// };

// const checkPasswordStrength = (password) => {
//     let strengthScore = 0;

//     if (password.length >= 8) strengthScore++;
//     if (password.length >= 12) strengthScore++;
//     if (/[A-Z]/.test(password)) strengthScore++;
//     if (/[a-z]/.test(password)) strengthScore++;
//     if (/[0-9]/.test(password)) strengthScore++;
//     if (/[^A-Za-z0-9]/.test(password)) strengthScore++;

//     return strengthScore;
// };

// password.addEventListener('input', () => {
//     if (password.value.length > 0) {
//         message.style.display = 'block';
//     } else {
//         message.style.display = 'none';
//     }

//     const strengthScore = checkPasswordStrength(password.value);

//     if (strengthScore <= 2) {
//         updateStrengthMessage('Too Weak', 'red');
//     } else if (strengthScore <= 4) {
//         updateStrengthMessage('Weak', 'orange');
//     } else if (strengthScore <= 5) {
//         updateStrengthMessage('Strong', 'green');
//     } else {
//         updateStrengthMessage('Very Strong', 'blue');
//     }
// });