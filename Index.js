// Import node modules 
const inquirer = require("inquirer");
const fs = require("fs");
// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Team array
var team = [];

// Link to page creation
const generateHTML = require('./src/template');

// Function for manager prompts
const addManager = () => {
  inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number?",
        },

        // Function to add another employee
        {
            type: 'list',
            name: 'addMember',
            message: 'Add another employee?',
            choices: ['Engineer', 'Intern', 'I am finished.'],
        }
    ])
    .then((managerInputs) => {
    
        const manager = new Manager(managerInputs.id, managerInputs.name, managerInputs.email, managerInputs.officeNumber)
        team.push(manager)
        switch(managerInputs.addMember) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default: 
            writeToFile('dist/index.html', generateHTML(team))
        }
    });
}

// Function for engineer prompts
const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter engineer's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's GitHub username?",
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Add another employee?',
            choices: ['Engineer', 'Intern', 'I am finished.'],
        }
    ])
    .then((engineerInputs) => {
        const engineer = new Engineer(engineerInputs.id, engineerInputs.name, engineerInputs.email, engineerInputs.github)
        team.push(engineer)
        switch(engineerInputs.addMember) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default: 
            writeToFile('dist/index.html', generateHTML(team))
        }
    })
}

// Function for intern prompts
const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school?",
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Add another employee?',
            choices: ['Engineer', 'Intern', 'I am finished.'],
        }
    ])
    .then((internInputs) => {
        const intern = new Intern(internInputs.id, internInputs.name, internInputs.email, internInputs.school)
        team.push(intern)
        switch(internInputs.addMember){
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('dist/index.html', generateHTML(team))
        }
    })
}

// Initiate app
addManager();

// Function to generate file 
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Team building exercise 99 complete! Find your index.html in the dist folder.')
    });
};
