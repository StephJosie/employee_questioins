const Manager = require('./Utils/manager');
const Engineer = require('./Utils/engineer');
const Intern = require('./Utils/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/pageTemplate');

const teamMembers = [];
const idArray = [];


console.log(
  '\nWelcome!\n'
);

function appMenu() {
  function createManager() {
    console.log('Build your team');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is your manager's name?",

        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the manager's id?",

        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?",

        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the team manager's office number?",

        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is your engineer's name?",

        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is your engineer's id?",

        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is your engineer's email?",

        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is your engineer's GitHub username?",

        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is your intern's name?",

        },
        {
          type: 'input',
          name: 'internId',
          message: "What is your intern's id?",

        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is your intern's email?",

        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is your intern's school?",

        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }

  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  createManager();
}

appMenu();
