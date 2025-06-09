# Updates

* I've added package control to [Bower](http://bower.io), so Bower is now a dependency. Just install it via NPM:

  ```bash
  bower install && grunt
  ```

* I added a Grunt task to list Bower dependencies in the RequireJS (`main.js`) configuration.
  To add them to RequireJS, just run:

  ```bash
  grunt bowerRequirejs
  ```

* Bower dependencies are **not** automatically added to `test-main.js`, which is used by Karma.
  For now, this must be done manually.

* Added support for `$templateCache` in the distribution version.
  To generate a distribution build with `templateCache` support, use the `--templateCache` flag:

  ```bash
  grunt dist --templateCache
  ```

---

# 1. Introduction

When I started studying AngularJS and searching for examples, I often found simple applications without many implementations. While good for learning the basics, these examples aren't helpful when structuring an application meant to grow significantly.

So I’m sharing my design framework for large-scale AngularJS applications—modular, scalable, and maintainable.

This is a framework that has worked very well for me, and that’s why I’m sharing it. To make the concept clearer, I created a simple project with two modules and two components.
You can check the project [here](https://github.com/dsalvagni/angular-scalable-project) and run a demo [here](http://dsalvagni.github.io/angular-scalable-project).

This design is primarily aimed at Single Page Applications, bundling all modules into one file. However, I plan to improve it to dynamically load modules using lazy loading with RequireJS.

You can also configure the RequireJS compilation in `Gruntfile.js` to build per module—treating each as its own bundle. I don’t recommend this, as it increases file request volume.

### 1.1 Requirements and Dependencies

1. JavaScript
2. [AngularJS](http://angularjs.org)
3. [RequireJS](http://requirejs.org)
4. [AMD](http://requirejs.org/docs/whyamd.html)
5. [Grunt](http://gruntjs.com)
6. [Bower](http://bower.io)
7. [KarmaJS](http://karma-runner.github.io/0.12/index.html)
8. [Protractor](https://angular.github.io/protractor/)

---

# 2. Concept

The application structure is divided into **modules** and **components**, further organized by feature.

* **Modules**: Macro features that may contain multiple components.
  Example: In a social networking app, a `profile` module could include components like "my friends" and "my photos".

* **Components**: Micro features or reusable elements used across different parts of the app.

---

# 3. Structure

```
/
├── Gruntfile.js, karma.conf.js, package.json, README.md
├── app/
│   ├── app.js            // Main AngularJS module
│   ├── index.html        // App entry point
│   ├── main.js           // RequireJS config and bundling
│   ├── assets/           // CSS, fonts, images, preprocessors (LESS/SASS)
│   ├── src/
│   │   ├── components/   // App components
│   │   ├── config/       // App-level settings
│   │   ├── modules/      // App modules
│   └── vendor/           // Third-party libraries
├── dist/                 // Distribution build
└── e2e-tests/            // End-to-end tests (Protractor)
```

### 3.1 Namespace

The application name is stored in a config file and shared across modules and components to provide a common namespace and maintain consistency.

### 3.2 Module Structure

Modules represent macro features. They can include their own:

* **/config**: Contains `module.config.js` with route and module settings.
* **/controller**: All controllers (`{name}Ctrl` pattern).
* **/service**: All services (`{name}Svc` pattern).
* **/test**: Unit tests.
* **/view**: Views, organized by controller. Partials:

  * Shared: `/view/partial/`
  * Controller-specific: within the controller’s folder, prefixed with `_` (e.g. `_sidebar.html`)
* **/module.js**: Initializes the module with AMD and registers it with Angular.

### 3.3 Component Structure

Components represent micro-features and can exist independently of any module.

Each component resides in:

```
/src/components/{context}/{component}/
```

* **directives/**: Related directives.
* **controllers/**: Related controllers. External controllers are optional and only recommended if the directive becomes too large.
* **view/**: Views for the component (all prefixed with `_`, e.g. `_undone.html`).
* **component.js**: AMD definition and Angular registration.

### 3.4 `app.js`

Main application file. Loads all dependencies via AMD and registers them in a non-AngularJS main module.

### 3.5 `main.js`

RequireJS configuration file. Loads third-party libraries and boots the application.

---

# 4. Tests

This structure was designed to be fully testable.

* **Unit tests**: Use KarmaJS. Place tests in the `/test` folder inside each module.
* **End-to-end tests**: Use Protractor. Place in the `/e2e-tests` folder.

---

# 5. Distribution Version

To run in development mode:

```bash
npm start
```

Access the app at: [http://localhost:8000/app/](http://localhost:8000/app/)

To build the release version:

```bash
grunt dist
```

The output will be in the `/dist` folder, ready for production.

---

# 6. Considerations

This model is not a rule but a suggested structure—especially useful for teams working on multiple projects.

It’s designed to help developers who join at different stages understand and work within a consistent structure. While it doesn't solve every problem related to code quality or standardization, when combined with practices like code reviews and refactoring, it becomes a strong foundation for scalable application development.
