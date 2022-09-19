// Import Employee class
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id,email and school properties", () => {
        const intern = new Intern("Kato pup", 4, "whodeservestreats@gamil.com", "Barkeley University");
    
        //same as employee
        expect(intern).toBeInstanceOf(Intern);
        expect(intern.name).toEqual("Kato pup");
        expect(intern.id).toEqual(4);
        expect(intern.email).toEqual("whodeservestreats@gamil.com");
        //add a school check
        expect(intern.school).toEqual("Barkeley University");
    });
  });

  //same as employee
  describe("getName", () => {
    it("Should return the object's name property", () => {
        const intern = new Intern("Kato pup", 4, "whodeservestreats@gamil.com", "Barkeley University");
        expect(intern.getName()).toEqual("Kato pup");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
        const intern = new Intern("Kato pup", 4, "whodeservestreats@gamil.com", "Barkeley University");
        expect(intern.getId()).toEqual(4);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
        const intern = new Intern("Kato pup", 4, "whodeservestreats@gamil.com", "Barkeley University");
        expect(intern.getEmail()).toEqual("whodeservestreats@gamil.com");
    });
  });

  //add getSchool function test
  describe("getSchool", () => {
    it("Should return the object's school property", () => {
        const intern = new Intern("Kato pup", 4, "whodeservestreats@gamil.com", "Barkeley University");
        expect(intern.getSchool()).toEqual("Barkeley University");
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Intern'", () => {
        const intern = new Intern("Kato pup", 4, "whodeservestreats@gamil.com", "Barkeley University");
        expect(intern.getRole()).toEqual("Intern");
    });
  });
});