(function (global) {
  'use strict';

  /**
   * @namespace env
   * @name env
   */
  var env = {
    registerApplication: registerApplication,
    main: '@@MAIN_PLUGIN@@'
  };

  expose({
    gettext: gettext,
    env: env
  });

  /**
   * @function registerApplication
   * @memberof env
   * @description
   * Register a plugin application with the UI platform and include its
   * Angular module as a dependency of the UI platform module.
   *
   * IMPORTANT: Every plugin application MUST include a `plugin.config.js`
   * file at its root directory that will register itself with the UI platform.
   * @example
   * env && env.registerApplication && env.env.registerApplication(
   *   'My Application ID',
   *   'my-application-angular-module-name',
   *   'plugins/my-application/'
   * );
   * @param {string} id - the ID to identify the application being registered
   * @param {string} angularModuleName - the unique Angular module name of the
   * plugin application
   * @param {string} basePath - the base path to the root folder where the
   * plugin application resides or is installed. The basePath is relative to
   * the 'src' folder.
   * @param {string} mainState - the state name of the main (start) state for the application
   */
  function registerApplication(id, angularModuleName, basePath, mainState) {
    env.plugins = env.plugins || {};
    env.plugins[id] = {
      moduleName: angularModuleName,
      basePath: basePath,
      main: mainState
    };
  }

  /**
   * @global
   * @function gettext
   * @description Returns the translated text
   * @param {string} text - the text to be translated
   * @returns {string} The translated text
   */
  function gettext(text) {
    /* eslint-disable no-console, angular/log*/
    console.warn('gettext: ' + text);
    /* eslint-enable no-console, angular/log*/
    return text;
  }

  function expose(vars) {
    for (var key in vars) {
      if (vars.hasOwnProperty(key)) {
        global[key] = vars[key];
      }
    }
  }

})(this);
