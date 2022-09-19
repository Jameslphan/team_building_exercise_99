// Import Employee class
const Employee = require("../lib/Employee");

describe("Employee", () => {
  
  describe("Employee object instantiation", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("James Phan", 1, "jameslphan@hotmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("James Phan");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("jameslphan@hotmail.com");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {

      const employee = new Employee("James Phan", 1, "jameslphan@hotmail.com");

      expect(employee.getName()).toEqual("James Phan");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("James Phan", 1, "jameslphan@hotmail.com");

      expect(employee.getId()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("James Phan", 1, "jameslphan@hotmail.com");

      expect(employee.getEmail()).toEqual("jameslphan@hotmail.com");
    });
  });


  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("James Phan", 1, "jameslphan@hotmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});