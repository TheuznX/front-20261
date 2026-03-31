import './style.css'

const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    clearErrors();

    let isValid = true;

    // Validação do E-mail
    if (emailInput.value.trim() === '') {
        showError('emailError', 'O campo de email é obrigatório.');
        isValid = false;
    }

    // Validação da Senha
    if (passwordInput.value.trim() === '') {
        showError('passwordError', 'O campo de senha é obrigatório.');
        isValid = false;
    }

    // Se tudo estiver válido, prossegue com a lógica 

    if (isValid) {
        console.log("Enviando dados para o servidor...");
    }
});

function showError(elementId, message) {
    const errorSpan = document.getElementById(elementId);
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(err => {
        err.textContent = '';
        err.style.display = 'none';
    });
}
