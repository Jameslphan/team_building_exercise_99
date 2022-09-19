// Import Employee class
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id,email and officeNumber properties", () => {
        const manager = new Manager("Mingma Phan", 3, "thugwife@gmail.com", 66);
    
        //same as employee
        expect(manager).toBeInstanceOf(Manager);
        expect(manager.name).toEqual("Mingma Phan");
        expect(manager.id).toEqual(3);
        expect(manager.email).toEqual("thugwife@gmail.com");
        //add a officeNumber check
        expect(manager.officeNumber).toEqual(66);
    });
  });

//same as employee
  describe("getName", () => {
    it("Should return the object's name property", () => {
        const manager = new Manager("Mingma Phan", 3, "thugwife@gmail.com", 66);
        expect(manager.getName()).toEqual("Mingma Phan");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
        const manager = new Manager("Mingma Phan", 3, "thugwife@gmail.com", 66);
        expect(manager.getId()).toEqual(3);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
        const manager = new Manager("Mingma Phan", 3, "thugwife@gmail.com", 66);
        expect(manager.getEmail()).toEqual("thugwife@gmail.com");
    });
  });

//add getOffice function test
  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
        const manager = new Manager("Mingma Phan", 3, "thugwife@gmail.com", 66);
        expect(manager.getOfficeNumber()).toEqual(66);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
        const manager = new Manager("Mingma Phan", 3, "thugwife@gmail.com", 66);
        expect(manager.getRole()).toEqual("Manager");
    });
  });
});