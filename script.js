document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    const result = await response.json();
    alert(result.message);
});