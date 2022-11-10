const inquirer = require("inquirer");

function teamAssemble() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select the type of employee that you are adding.",
        name: "newHire",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No more team members are needed.",
        ],
      },
    ])
    .then(function (userInput) {
      switch (userInput.newHire) {
        case "Manager":
          manager();
          break;
        case "Engineer":
          engineer();
          break;
        case "Intern":
          intern();
          break;
      }
    });
}

function manager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Enter the manager's name.",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter the manager's email address.",
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter the manager's employee ID number.",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter the manager's office number.",
    },
  ]);
}

function engineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Enter the engineer's name.",
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter the engineer's employee ID number.",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter the engineer's email address.",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Enter the engineer's GitHub username.",
    },
  ]);
}

function intern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Enter the intern's name.",
    },
    {
      type: "input",
      name: "internId",
      message: "Enter the intern's employee ID number.",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter the intern's email address.",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Enter the name of the school that the intern attends.",
    },
  ]);
}

teamAssemble();