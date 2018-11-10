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

let employees = [];

function addEmployee() {
    console.log('in addEmployee');
    const addedEmployee = new Employee(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idNumberIn').val(),
        $('#jobTitleIn').val(),
        $('#annualSalaryIn').val(),
    );
    console.log('adding employee');
    // push new employees into the array
    employees.push(addedEmployee);
    // empty inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
    updateNewEmployee();
} // end addEmployee


function updateNewEmployee() {
    console.log('in updateNewEmployee');
    totalSalaries = 0;
    // target the employee
    let outputElement = $('#employeeInfo');
    // empty it
    outputElement.empty();
    // loop through employees and display each employee
    for (let employee of employees) {
        outputElement.append(`<p>${employee.firstName} ${employee.lastName} ${employee.idNumber} ${employee.jobTitle} ${employee.annualSalary} <p>`);
        totalSalaries += Number(employee.annualSalary)
    } // end for loop of employees
    console.log('totalSalaries', totalSalaries);
} // end updateNewEmployee