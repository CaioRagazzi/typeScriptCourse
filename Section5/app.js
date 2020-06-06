"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string = 'DEFAULT';
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name} ${this.id}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.lastReport = '';
        this.reports = reports;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please enter a valid value!');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        this.employees.push(name);
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReport() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Caio']);
it.addEmployee('Max');
it.addEmployee('Caio');
it.addEmployee('Binho');
it.printEmployeeInformation();
it.describe();
console.log(it);
const accounting = new AccountingDepartment('d3', []);
accounting.addReport('Something went wrong...');
accounting.addEmployee('Caio');
accounting.printReport();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'oi', describe: accounting.describe }
// accountingCopy.describe()
