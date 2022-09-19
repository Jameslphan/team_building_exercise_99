//import classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Employee = require('../lib/Intern')

// Generates HTML
const generateHTML =(team) => 
     `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Building Exercise 99</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron team-heading">
                    <h1 class="text-center">Team Building Exercise 99! </h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row col-12  justify-content-around">
                ${createCards(team)}
            </div>
        </div>
    </body>
    
    </html>
    `

// Generates manager employee profile
const createManagerCard = (Manager) => 
`
<div class="card employee mx-4 mb-3">
    <div class="manager-head text-center">
        <h2 class="card-title">${Manager.getName()}</h2>
        <h3 class="card-title">${Manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${Manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `

// Generates engineer employee profile
const createEngineerCard = (Engineer) => 
    `
    <div class="card employee mx-4 mb-3">
        <div class="engineer-head text-center">
            <h2 class="card-title">${Engineer.getName()}</h2>
            <h3 class="card-title">${Engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target="_blank"></a></li>
            </ul>
        </div>
    </div>
        `

// Generates intern employee profile
const createInternCard = (Intern) => 
    `
    <div class="card employee mx-4 mb-3">
        <div class="intern-head text-center">
            <h2 class="card-title">${Intern.getName()}</h2>
            <h3 class="card-title">${Intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `

// Generates team profile
function createCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
      const thisEmployee = team[i];
      switch(thisEmployee.getRole()) {
        case 'Manager':
          const manager = new Manager(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.officeNumber);
          cards.push(createManagerCard(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.github);
          cards.push(createEngineerCard(engineer));
          break;
        case 'Intern':
          const intern = new Intern(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.school);
          cards.push(createInternCard(intern));
          break;
      }
    }
    return cards.join(``)
  }

//export generateHTML
module.exports = generateHTML;