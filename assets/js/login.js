document.addEventListener('DOMContentLoaded', function() {
    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    const form = document.getElementById('loginForm');

    // Validação do Formulário
    if (form) { 
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value.trim();

            if (!validarEmail(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            if (senha.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }

            window.location.href = 'assets/principal.html'; 
        });
    }

    const toggleSenha = document.getElementById('Senha');
    if (toggleSenha) {
        toggleSenha.addEventListener('click', function () {
            const senhaInput = document.getElementById('senha');
            const tipo = senhaInput.getAttribute('type');
        
            if (tipo === 'password') {
                senhaInput.setAttribute('type', 'text');
                this.classList.remove('bi-eye-fill');
                this.classList.add('bi-eye-slash-fill');
            } 
            else {
                senhaInput.setAttribute('type', 'password');
                this.classList.remove('bi-eye-slash-fill');
                this.classList.add('bi-eye-fill');
            }
        });
    }
});