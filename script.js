function generatePassword() {
    const password = Math.random().toString(36).slice(-8); 
    document.getElementById('password').value = password;
}


function validateForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    const ageValid = age > 0; 
    const patterns = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(hu|com|net|edu)$/,
        name: /^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]*$/
    };
    
    const emailValid = patterns.email.test(email);  
    const nameValid = patterns.name.test(name);

    if (!nameValid) {
        alert('A névnek nagybetűvel kell kezdődnie!');
        return false;
    }
    if (!ageValid) {
        alert('Kérlek, add meg a korodat!');
        return false;
    }
    if (!emailValid) {
        alert('Kérlek, add meg a helyes email címet!');
        return false;
    }

    return true;
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('bi-eye-slash');
        toggleIcon.classList.add('bi-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('bi-eye');
        toggleIcon.classList.add('bi-eye-slash');
    }
}