window.addEventListener('load', () => {
    const form = document.getElementById('empForm');
    
    const processForm = (event) => {
        event.preventDefault(); // Prevent form submission
        
        // Collect form values
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const ext = document.getElementById('ext').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;
        
        // Display form values in console
        console.log("8-Digit Employee ID:", id);
        console.log("Full Name:", name);
        console.log("4-Digit Extension:", ext);
        console.log("Email:", email);
        console.log("Department:", department);
    };
    
    form.addEventListener('submit', processForm);
});
