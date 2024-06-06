document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phone = document.getElementById('phone').value;

    // Use EmailJS to send email
    emailjs.send('service_69ae44l','template_5ww8u3u', {
        from_name: name,
        from_email: email,
        message:'Name:  '+ name + '    '+'Email:  ' + email + '    '+'Phone number:  ' + phone +'    '+'Address:  '+  message 
    }).then(function(response) {
        console.log("successfull")
       alert('SUCCESS!', response.status, response.text);
    }, function(error) {
       alert('FAILED...', error);
    });
});
