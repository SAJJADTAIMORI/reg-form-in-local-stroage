document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username && email && password) {
        let user = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});