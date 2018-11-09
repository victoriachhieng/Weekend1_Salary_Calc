console.log('in JS');

$(document).ready(readyNow);
function readyNow() {
    console.log('in jQuery');
   $('#addEmployeeButton').on('click', addEmployee);
} // end document ready

// class for employees
class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } // end constructor 
} // end Employee class

let employee = [];

function displayEmployeeAdded(){
    console.log('in displayEmployeeAdded');
}

function addEmployee() {
    console.log('in addEmployee');
    const addedEmployee = new Employee(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idIn').val(),
        $('#titleIn').val(),
        $('#annualSalaryIn').val(),
    );
    console.log('adding employee');
    // push new employees into the array
    employee.push(addedEmployee);
    // empty inputs
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idIn').val('');
        $('#titleIn').val('');
        $('#annualSalaryIn').val('');
} // end addEmployee