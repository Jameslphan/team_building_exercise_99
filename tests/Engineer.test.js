// Import Employee class
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
    describe("Engineer object instantiation", () => {
      it("Creates an object with name, id, email and github properties", () => {
        const engineer = new Engineer("Yoshi Pup", 2, "whosagoodboi@yahoo.com", "yoshi");
//same as employee
        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer.name).toEqual("Yoshi Pup");
        expect(engineer.id).toEqual(2);
        expect(engineer.email).toEqual("whosagoodboi@yahoo.com");
        //add a github check
        expect(engineer.github).toEqual("yoshi");
      });
    });
  
//same as employee
    describe("getName", () => {
      it("Should return the object's name property", () => {
        const engineer = new Engineer("Yoshi Pup", 2, "whosagoodboi@yahoo.com", "yoshi");

        expect(engineer.getName()).toEqual("Yoshi Pup");
      });
    });
  
   
    describe("getId", () => {
      it("Should return the object's id property", () => {
        const engineer = new Engineer("Yoshi Pup", 2, "whosagoodboi@yahoo.com", "yoshi");

        expect(engineer.getId()).toEqual(2);
      });
    });
  
  
    describe("getEmail", () => {
      it("Should return the object's email property", () => {
        const engineer = new Engineer("Yoshi Pup", 2, "whosagoodboi@yahoo.com", "yoshi");

        expect(engineer.getEmail()).toEqual("whosagoodboi@yahoo.com");
      });
    });

//add getGithub function test
    describe("getGithub", () => {
        it("Should return the object's github property", () => {
          const engineer = new Engineer("Yoshi Pup", 2, "whosagoodboi@yahoo.com", "yoshi");

          expect(engineer.getGithub()).toEqual("yoshi");
        });
      });

    describe("getRole", () => {
      it("Should return the string 'Engineer'", () => {
        const engineer = new Engineer("Yoshi Pup", 2, "whosagoodboi@yahoo.com", "yoshi");

        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  });