// base employee class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// manager subclass extends employee
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} people.`;
  }
}

// company class to manage employees
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

// create some employees and managers
const emp1 = new Employee("Alice", "Sales");
const emp2 = new Employee("Bob", "Engineering");
const mgr1 = new Manager("Carmen", "Engineering", 5);

// create company and add employees
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);

// list all employees
myCompany.listEmployees();
