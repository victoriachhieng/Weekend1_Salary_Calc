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

function deleteEmployee() {
    console.log('in deleteEmployee')
    $('#removeEmployee');
} // end deleteEmployee

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
    let totalSalaries = 0;
    // target the employee
    let outputElement = $('#table');
    // empty it
    outputElement.empty();
    // loop through employees and display each employee in the table
    for (let employee of employees) {
        $('#table').append(`
            <tr id="${employee.idNumber}">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="btn btn-danger" id="${employee.idNumber}">Delete</button></td>
                <tr>`);
        // create jQuery Button
        $(`#${employee.idNumber}`).on('click', function () {
            $(`#${employee.idNumber}`).remove();
        }); // end on click function
        // add total salary of employees
        totalSalaries += Number(employee.annualSalary);
    } // end for loop of employees
    console.log('totalSalaries', totalSalaries);
    calculateSalaries(totalSalaries);
} // end updateNewEmployee

function calculateSalaries(allsalries) {
    let employeeSalaries = allsalries / 12;
    console.log('in employeeSalaries', employeeSalaries);
    let outputDiv = $('#monthlyCost');
    outputDiv.empty();
    outputDiv.append('<h2>Total Monthly: $' + Number(employeeSalaries.toFixed(2)) + '<h2>');
    if (employeeSalaries > 20000) {
        outputDiv.css('background-color', 'red');
    } // end if employee salary is greater than $20,000 change background color red
} // end calculateSalaries