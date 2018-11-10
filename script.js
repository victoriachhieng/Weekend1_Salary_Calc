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
    // start total salary at 0
    totalSalaries = 0;
    // target the employee
    let outputElement = $('#table');
    // empty it
    outputElement.empty();
    // loop through employees and display each employee
    for (let employee of employees) {
        $('#table').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <tr>`);
        // add total salary of employees
        totalSalaries += Number(employee.annualSalary);
    } // end for loop of employees
    console.log('totalSalaries', totalSalaries);
    calculateSalaries(totalSalaries);
} // end updateNewEmployee

function calculateSalaries(allSalaries) {
    console.log('in calculateSalaries', allSalaries);
    let employeeSalaries = allSalaries / 12;
    console.log('in employeeSalaries', employeeSalaries);
    let outputDiv = $('#monthlyCost');
    outputDiv.empty();
    outputDiv.append('<h2>Total Monthly: $' + Number(employeeSalaries.toFixed(2)) + '<h2>');
    if( employeeSalaries > 20000){
        outputDiv.css('')

    } // end if employee salary is greater than $20,000
} // end calculateSalaries