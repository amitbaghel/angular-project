-----**Context**------
```
We are going to develop a Employee Management application using Angular JS.

What is Employee Management application? - Every organization has a employee management application/portal to manage employee information(eg; adding new hire details, updating existing employee information, deleting the employee information when they leave the org)

I have Installed NodeJS and Angular CLI in my Mac, and created a skeleton(draft) project for Employee Management(Angular Based).

Included instructions for you to setup angular in your machine(do this before anything)

Included employee management project requirements at the end of this file.

Let's keep improvising the project requirements, and I'll keep adding more instructions to install needed tools as i learn.
```

------**Setup - Do these before you start anything**---------

------**Step 1 - Install NodeJs**-------
   
   https://nodejs.org/en/ - Install _"Recommended for most users"_
   
   Verify NodeJS Installation/Version - Run command
                  _**npm -version**_

------**Step 2 - Install the Angular CLI(Command Line Interface)**--------

  https://angular.io/guide/setup-local -> Go to "**Install the Angular CLI**" section

  Open Terminal in Mac -> Run command 
            _**npm install -g @angular/cli**_
  
  Verify Angular Installation/Version - Run command 
               _**ng version**_
  
------**Create Angular Application**-------- 
  
  ```Create a folder in your machine to organize all your angular apps - I created one with "angular-apps"
  
  Switch(cd) into the angular apps specific directory via Mac Terminal 
  ``` 
  Run below command:  
      ng new projectnameofyourchoicehere
         eg: ng new angular-employee-management
         
------**Run Angular Application**--------    
     
     from Mac Terminal, enter one of the below commands.
     
     npm start (or) ng serve
   
   Navigate to http://localhost:4200/
   
 ----**Which Editor and How to Install the Editor - To develop angular project**-----------
 
 To Do
   
 ------**Git Installation Instructions and Commands**------
    I have git installed in my Mac, aftery you have created this repository, you might have notice some commands that showed up.
    I used the same set of git commands from my Mac terminal to push the project files to your git repository.
    
    How to install git in Mac - Follow the installation instruction from here https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
  
    Commands:
    
    git status - shows the status of new files/ updated files/status of your local repository
    git add * - Adds all the files - this command alone does not push file to remote repository.
    git commit -m "add a note on what additions/changes you have done"
    git push  - To push the files that you added/commited.
    
 -------**References:**-------
   
  ``` Followed this to create Initial Skeleton angular project - https://www.youtube.com/watch?v=i7KaVFOXNUQ&ab_channel=TylerPottsTylerPotts ```
   
 -------**Questions?**--------
   
   Add your questions here
   
-------**Employee-Management Project Requirements:**--------
  
 Each of this below **Feature(EPIC)** will have **User Stories**(smaller chunks of tasks to complete a feature)
  
  **Features(EPICs) needed:**
   
   1. **Add Employee**- To Enter New Joinee information
      User Stories: TBD
   2. **Update Employee** - To Update existing employee information
      User Stories: TBD
   3. **Remove Employee**- When Employee's Leaves the organization
      User Stories: TBD
   4. **Apply a Leave Request**
      User Stories: TBD
   5. **Approve/Deny Leave Request** - Manager to approve or deny the leave request
      User Stories: TBD
   
-------**Tasks for Shreya - Week 1(jun14th)**-------------
1. Install Git, NodeJs, Angular CLI in Mac
   Status - installed nodeJs and Git but Angular CLI installation not working
2. For Practice - Create angular-apps folder locally and create test-angular-project under it(using step-3)
   Status - ?
3. For Practice - Create another test-angular-project (repository) in git, and push the angular project that is created to the test-angular-project repository.
   Status - ?
4. In test-angular-project - create a Feature branch(name the branch my-feature-branch) and checkout the created feature branch.
    Status - ?
5. Do some changes to one of the files and push the changed files to git repository.
    Status - ?

-------**Task for Manasa - Week 1(Jun 14th)**---------
1. Identify and Test the Editor Tool to develop Angular Js App and Import this app to that editor.
2. TBD
3. TBD

-------**Any Thoughts/Ideas?**--------
   
   Pitch in your ideas here
  
  
------Ignore below for now: These were added by default while I was creating a project------------
# AngularEmployeeManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
