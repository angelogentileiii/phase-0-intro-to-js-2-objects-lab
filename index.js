// Write your solution in this file!
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