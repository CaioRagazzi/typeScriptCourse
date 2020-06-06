class Department {
    // private id: string;
    // private name: string = 'DEFAULT';
    protected employees: string[] = []

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        console.log(`Department: ${this.name} ${this.id}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]){
        super(id, 'IT')
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found');
        
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please enter a valid value!');
        }
        this.addReport(value)
    }

    reports: string[];

    constructor(id: string, reports: string[]){
        super(id, 'Accounting')
        this.lastReport = ''
        this.reports = reports;
    }

    addEmployee(name: string){
        this.employees.push(name);
    }

    addReport(report: string){
        this.reports.push(report)
    }

    printReport(){
        console.log(this.reports);        
    }
}

const it = new ITDepartment('d1', ['Caio']);

it.addEmployee('Max')
it.addEmployee('Caio')

it.addEmployee('Binho')

it.printEmployeeInformation()

it.describe()

console.log(it);

const accounting = new AccountingDepartment('d3', []);
accounting.addReport('Something went wrong...')
accounting.addEmployee('Caio')
accounting.printReport()
accounting.printEmployeeInformation()

// const accountingCopy = { name: 'oi', describe: accounting.describe }

// accountingCopy.describe()