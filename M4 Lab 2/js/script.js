// CREATE EMPLOYEE ARRAY
var employees = [];
employees[0] = {id: 21522992, name: "Eric Tyler", extension: 8791, email: "tyler.eric@gmail.com", department: "Engineering"};
employees[1] = {id: 35938284, name: "Bree Tyler", extension: 7465, email: "bree@yahoo.com", department: "Sales"};
employees[2] = {id: 32837573, name: "Marc Williams", extension: 8573, email: "mwt@aol.com", department: "Executive"};
employees[3] = {id: 48583844, name: "Eppy Solano", extension: 2453, email: "eppy@gmail.com", department: "Engineering"};
employees[4] = {id: 42949500, name: "Kona Albondigas", extension: 2948, email: "kona@woof.com", department: "Marketing"};

// Event listener for page load
window.addEventListener("load", (e) => {
    "use strict";
    // Check if employee data exists in localStorage
    if(localStorage.getItem("employee")) {
        employees = JSON.parse(localStorage.getItem("employee"));
    }
    // Build the grid with the existing employee data
    buildGrid();
});

// Shortcut function for accessing DOM elements by ID
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}

var [form, empTable, id, name, extension, email, department, empCount] = [
    $("addForm"),
    $("empTable"),
    $("id"),
    $("name"),
    $("extension"),
    $("email"),
    $("department"),
    $("empCount")
];

// Event listener for form submission
form.addEventListener('submit', (e) => {
    "use strict";
    e.preventDefault();
    
    // Parse input values
    id = parseInt(id.value, 10);
    name = $("name").value;
    extension = parseInt(extension.value, 10);
    email = email.value;
    department = department.value;
    
    // Create new employee object
    var newEmp = {id: id, name: name, extension: extension, email: email, department: department};
    
    // Add new employee to the employees array
    employees.push(newEmp);
    
    // Rebuild the grid
    buildGrid();
    
    // Reset the form
    form.reset();
    
    // Set focus on the id input field
    $("id").focus();
});

// Event listener for table row deletion
empTable.addEventListener('click', (e) => {
    "use strict";
    // Confirm deletion
    var toDelete = window.confirm("Are you sure you want to delete this employee?");
    if (toDelete) {
        let i = e.target.parentNode.parentNode.rowIndex;
        
        // Remove the employee from the employees array
        employees.splice(i - 1, 1);
        
        // Rebuild the grid
        buildGrid();
    }
});

/**
 * Builds the grid of employees in the table.
 * Clears the existing table body and populates it with employee data.
 * Updates the employee count and saves the employee data to local storage.
 */
function buildGrid() {
    // Get the table body
    let tbody = empTable.tBodies[0];
    tbody.innerHTML = "";
    
    // Iterate through the employees array and create table rows
    for (let employee of employees) {
        let row = window.document.createElement("tr");
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button>X</button></td>
        `;
        tbody.appendChild(row);        
    }

    // Update the employee count
    empCount.textContent = "(" + employees.length + ")";
    
    // Save the employee data to local storage
    localStorage.setItem("employees", JSON.stringify(employees));
};
