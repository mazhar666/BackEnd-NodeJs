var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        this.salary += (this.salary * percent) / 100;
    };
    Employee.prototype.toString = function () {
        return "Employee[id=".concat(this.id, ",name=").concat(this.getName(), ",salary=").concat(this.salary, "]");
    };
    return Employee;
}());
// Example usage
var employee1 = new Employee(8, 'Peter', 'Tan', 2500);
console.log(employee1.toString());
employee1.setSalary(999);
console.log(employee1.toString());
console.log("id is: ".concat(employee1.getId()));
console.log("firstname is: ".concat(employee1.getFirstName()));
console.log("lastname is: ".concat(employee1.getLastName()));
console.log("salary is: ".concat(employee1.getSalary()));
console.log("name is: ".concat(employee1.getName()));
console.log("annual salary is: ".concat(employee1.getAnnualSalary()));
employee1.raiseSalary(10);
console.log(employee1.getSalary());
console.log(employee1.toString());
