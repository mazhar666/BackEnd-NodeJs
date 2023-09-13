class Employee {
    private id: number;
    private firstName: string;
    private lastName: string;
    private salary: number;

    constructor(id: number, firstName: string, lastName: string, salary: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    getId(): number {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }

    getAnnualSalary(): number {
        return this.salary * 12;
    }

    raiseSalary(percent: number): void {
        this.salary += (this.salary * percent) / 100;
    }

    toString(): string {
        return `Employee[id=${this.id},name=${this.getName()},salary=${this.salary}]`;
    }
}

// Example usage
const employee1 = new Employee(8, 'Peter', 'Tan', 2500);
console.log(employee1.toString());

employee1.setSalary(999);
console.log(employee1.toString());

console.log(`id is: ${employee1.getId()}`);
console.log(`firstname is: ${employee1.getFirstName()}`);
console.log(`lastname is: ${employee1.getLastName()}`);
console.log(`salary is: ${employee1.getSalary()}`);
console.log(`name is: ${employee1.getName()}`);
console.log(`annual salary is: ${employee1.getAnnualSalary()}`);
employee1.raiseSalary(10);
console.log(employee1.getSalary());
console.log(employee1.toString());
