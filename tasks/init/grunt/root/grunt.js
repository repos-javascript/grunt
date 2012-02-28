/*global config:true, task:true*/
config.init({
  pkg: '<json:package.json>',
  test: {
    files: ['test/**/*.js']
  },
  lint: {
    files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
  },
  watch: {
    files: '<config:lint.files>',
    tasks: 'default'
  },
  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      sub: true,
      undef: true,
      boss: true,
      eqnull: true,
      node: true,
      es5: true
    },
    globals: {
      grunt: true,
      async: true,
      underscore: true,
      util: true,
      task: true,
      file: true,
      fail: true,
      config: true,
      option: true,
      template: true,
      log: true,
      verbose: true
    }
  }
});

// Load additional tasks.
task.loadTasks('tasks');

// Default task.
task.registerTask('default', 'lint test');