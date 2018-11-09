console.log('in JS');

$(document).ready( readyNow );
    function readyNow (){
        console.log('in jQuery');
} // end document ready

 // class for employees
class Employee{
    constructor ( firstName, lastName, idNumber, jobTitle){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    } // end constructor 
} // end Employee class
