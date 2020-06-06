abstract class Department {
    // private id: string;
    // private name: string = 'DEFAULT';
    protected employees: string[] = []

    constructor(protected readonly id: string, public name: string) {
    }

    abstract describe(this: Department): void

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

    static createEmployee(name: string) {
        return { name }
    }
}

class ITDepartment extends Department {

    describe(): void {
        console.log(`IT Department: ${this.name} ${this.id}`)
    }

    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {

    private static instance: AccountingDepartment;

    describe(): void {
        console.log(`Accounting Department: ${this.name} ${this.id}`)
    }

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

    private constructor(id: string, reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = ''
        this.reports = reports;
    }

    static getInstance(){
        if (AccountingDepartment.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    addEmployee(name: string) {
        this.employees.push(name);
    }

    addReport(report: string) {
        this.reports.push(report)
    }

    printReport() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('caio')
console.log(employee1)

const it = new ITDepartment('d1', ['Caio']);

it.addEmployee('Max')
it.addEmployee('Caio')

it.addEmployee('Binho')

it.printEmployeeInformation()

it.describe()

console.log(it);

const accounting = AccountingDepartment.getInstance();
accounting.addReport('Something went wrong...')
accounting.addEmployee('Caio')
accounting.printReport()
accounting.printEmployeeInformation()

// const accountingCopy = { name: 'oi', describe: accounting.describe }

// accountingCopy.describe()