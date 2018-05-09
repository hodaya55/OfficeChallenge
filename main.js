//write your code here to make the tests pass

// document class
var Document = function (name) {
    this.employeeName = name;
}

// employee class
var Employee = function (name) {
    this.name = name;
}

Employee.prototype.work = function (office) {
    for (var i = 0; i < 10; i++) {
        office.documents.push(new Document(this.name)); 
    }
}

// manager class
var Manager = function (name) {
    this.employees = [];
    this.name = name;
}

Manager.prototype.hireEmployee = function (name) {
    this.employees.push(new Employee(name));
};

Manager.prototype.askEmployeesToWork = function (office) {
    for (var i = 0; i < this.employees.length; i++) {
    this.employees[i].work(office); 
    }
};


// cleaner class
var Cleaner = function (name) {
    this.name = name;
}

Cleaner.prototype.clean = function () {
    console.log("Clean");
}

// office class
var Office = function () {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
}

Office.prototype.hireCleaner = function (name) {
    this.cleaners.push(new Cleaner (name));
}

Office.prototype.hireManager = function (name) {
    this.managers.push(new Manager(name));
}

Office.prototype.startWorkDay = function () { 
    for (var i = 0; i < this.managers.length; i++) {
        this.managers[i].askEmployeesToWork(this); 
        // Cleaner.clean();
    }
}