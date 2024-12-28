document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
});
