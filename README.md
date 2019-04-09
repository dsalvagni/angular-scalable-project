# Updates
- I've added package control to [Bower](http://bower.io), so Bower is a dependency. Just install it as NPM.

> bower install && grunt

- I added a task in grunt to list the dependencies of the bower in the requirejs (main.js) settings.
  To add in requireJS, just run the task below:

> grunt bowerRequirejs

- The dependencies of the installed bower are not automatically added in test-main.js, used by karma.
  For now, it should be done manually.
  
- Added support for $ templateCache in the distribution version.
  To generate a distribution version with templateCache support,
  just use the flag --templateCache
  
> grunt dist --templateCache

---

When I started studying AngularJS and looking for examples of use and applications, I always came across simple applications without many implementations. Which is good to get the concept but does not help much when it is necessary to structure an application that will grow significantly.

So I share my design framework for large-scale applications, making it modular - as it should be - and easy to maintain.

## 1\. Introduction

This is an application framework idea that has worked very well and that is the main reason I share. To illustrate more clearly, I created a simple project, with 2 modules and 2 components, to make visible the use of this design structure. You can check the project [here](https://github.com/dsalvagni/angular-scalable-project) and run a demo version [here](http://dsalvagni.github.io/angular-scalable-project).

The main application of these concepts is in the Single Page Application model with a _bundle_ file with all the modules. I want to improve these models to use, even in SPA, a way to load the modules dynamically as requested. Using lazy load with RequireJS in this way.

With the concept discussed in this post, you can configure the RequireJS compile in Gruntfile.js to compile module-to-module, as if each module were a _bundle_. I believe that this format is not advantageous, because the volume of file requests will continue high.

### 1.1 Requirements and Dependencies

1. Javascript
2. [AngularJS](http://angularjs.org)
3. [RequireJS](http://requirejs.org)
4. [AMD](http://requirejs.org/docs/whyamd.html)
5. [Grunt](http://gruntjs.com)
6. [Bower](http://bower.io)
7. [KarmaJS](http://karma-runner.github.io/0.12/index.html)
8. [Protractor](https://angular.github.io/protractor/)

## 2\. Concept

The structure of the application is divided into **modules** and **components**. And, below this, the division by feature is made. The **modules** are a macro view of a feature and may contain a collection of _components_. For example, in a social networking application, the _profil_ module will contain components like: my friends, my photos. In this way, the **components** represent a micro view of specific functionality or a redundant function, which can be used at different times.

## 3 \. Structure

I structured the application as follows:

*   **/**

    Gruntfile, karma.conf, package.json, and readme.md

* **/app**

    Contains all application source code.

    * **/app.js**

        Main module file, which loads the dependencies and instantiates the modules.

    * **/index.html**

        Initializing the application

    * **/main.js**

        The configuration file for use with RequireJS, to load the modules and subsequently generate the bundle file.

    * **/assets**

        Css files, webfonts, images and preprocessor files (less, sass, etc).

    * **/src**

        Contains all source code for modules and components as well as general application settings.

        * **/components**

            Contains all component source code.

        * **/config**

            Contains the application settings. In this example, only the name of the application.

        * **/modules**

            Contains all source code for modules.

    * **/vendor**

        Contains all libraries and external dependencies.

* **/dist**

    Contains all files generated for the distribution version.

* **/e2e-tests**

    All end2end tests with the protractor.

### 3.1 Namespace

I save the name of the application in a file and share between the modules and components, so everyone has the same prefix. I use it by the organization.

### 3.2 Module Structure

As mentioned earlier, the modules are the macro views of the application's features. They can contain their own controllers, services, filters, etc. The modules are organized as follows:

#### / config

Saves the module configuration file, module.config.js, with the route information as well as other settings required for module operation.

#### / controller
Contains all controllers related to the module. All controllers follow the filename pattern: {name}Ctrl - both file and controller registry.

#### / service

Contains all services related to the module. All services follow the naming standard: {name} Svc - both file and service registry.

#### / test

Contains all unit test files.

#### / view

All views are organized into folders related to their controllers. If there is a partial view, common to more than one module, it should be used in the / view / partial folder. If it is a partial view, common only to a controller, it is inside the folder of the view of the controller, prefixed with "_". Example: "_sidebar.html"

#### /module.js

This is the module instance file. All module files and dependencies are loaded using AMD and registered in the angular for later being listed in the main module file.

### 3.3 Component Structure

As mentioned earlier, the components are the micro views of the application's features. Furthermore, they can be independent components of any module, with unique functionalities. They can contain their own controllers, services, filters, etc. The components are organized as follows, inside the /src/components folder:

#### / {context} / {component}

The context groups the components together. As in the example mentioned above, of the social network, the context of the components would be: profile. In this project, we have 2 contexts: all and contactList.

#### / {context} / {component} / directives

Contains all directives related to the component.

#### / {context} / {component} / controllers

Contains all controllers related to the component. * I only recommend using external controllers if the code is too long, it is bad to keep in the same code of the directive.

#### / {context} / {component} / view


Contains all component views. All views should contain the prefix "_", as in the example: "_undone.html". It is easier to identify when debugging the application.

#### /{context}/{component}/component.js

Like the modules, the components have the component instance file that loads the files with AMD and registers in the angular.

### 3.4 app.js

Main application file, loads all dependencies using AMD and registers in a main, non-angular module.

### 3.5 main.js

RequireJS configuration file, where I load all third-party libraries and start the application.

## 4 \. Tests

One of my concerns, when I started creating this model, was to allow it to be "testable", and it is. You can test the entire application with unit tests using KarmaJS and end2end tests using the Protractor. By convention, the end2end tests are in the root folder of the application and the unit tests must be in the ** / test ** folder within their respective module.

## 5 \. Distribution Version

To run the application in development mode is simple, just run the command below in the project root folder. The application will be available at: http://localhost:8000/app/

 `npm start`

The release version is generated from a Grunt _task_, executed by the command below. `grunt dist` After running _task_, the application will be available on the paw ** / dist ** and can be used in production.

## 6 \. Considerations

This model is not a rule, it is an alternative. One of the wonders of working with web projects is to be able to build them in different ways depending, mainly, on the final goal. However, when working in companies that maintain several projects with their respective teams, it is important to keep the teams aligned to the code development pattern.

When I structured this model, my goal was to create a standard for application development in teams that do not necessarily start the project together. But yes, teams that are assembled by developers allocated from one project or another, which is a common practice. In this way, every developer who enters the project, regardless of the phase that happens, has an application model to follow and will produce, in theory, a code readable by all the developers that participate in the project.

This model does not solve all the code standardization problems, but I'm sure that if applied, it will be fundamental - followed by practices like code review, refactoring and others.
