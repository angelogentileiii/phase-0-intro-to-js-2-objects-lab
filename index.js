// Write your solution in this file!
/*
const employee = {
    name: 'Sam',
}

function updateEmployeeWithKeyAndValue(){
    const updateEmployee = {
        ...employee,
        streetAddress: "11 Broadway",
    };
    return updateEmployee;
}

const updateEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "11 Broadway",
)

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(updateEmployee){
    const deleteEmployee = {...employee}
    delete deleteEmployee.name;
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(newEmployee){
    delete employee.name;
    return employee;
}
*/

const employee = {
    name: 'Sam',
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const updateEmployee = {
        ...employee,
        streetAddress: '11 Broadway'
    };
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey (obj, key) {
    const newEmployee = {
        ...employee,
    }

    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete employee.name;
    return employee;
}