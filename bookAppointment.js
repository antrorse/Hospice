document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Fetching form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const message = document.getElementById('message').value;

    // Log the form data in the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Department:', department);
    console.log('Doctor:', doctor);
    console.log('Appointment Date:', appointmentDate);
    console.log('Message:', message);
});





