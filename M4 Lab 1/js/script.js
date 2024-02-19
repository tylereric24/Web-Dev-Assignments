// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector('#addEmployeeForm');
const table = document.querySelector('#employeesTable');
const countOutput = document.querySelector('#employeeCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.querySelector('#id').value;
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const position = document.querySelector('#position').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const idCell = newRow.insertCell();
    const firstNameCell = newRow.insertCell();
    const lastNameCell = newRow.insertCell();
    const positionCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(id));
    firstNameCell.appendChild(document.createTextNode(firstName));
    lastNameCell.appendChild(document.createTextNode(lastName));
    positionCell.appendChild(document.createTextNode(position));

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        // CONFIRM THE DELETION TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {
            // DELETE THE ROW
            table.deleteRow(e.target.parentNode.parentNode.rowIndex);
            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            employeeCount--;
            // DISPLAY THE UPDATED COUNT
            countOutput.textContent = employeeCount;
        }
    });
    deleteCell.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;

    // DISPLAY THE UPDATED COUNT
    countOutput.textContent = employeeCount;
});
