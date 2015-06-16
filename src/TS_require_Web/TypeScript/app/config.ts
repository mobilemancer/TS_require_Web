/// <reference path="../extdefinitions/tsd.d.ts" />

//file config.ts
require.config({
    baseUrl: 'scripts/app',

    paths: {
        //'jquery': 'lib/jquery'
        //,
        //'underscore': 'lib/underscore-x.x.x',
        //'backbone': 'lib/backbone-x.x.x'
    },

    shim: {
        //jquery: {
        //    exports: '$'
        //}
        //,

        //underscore: {
        //    exports: '_'
        //},

        //backbone: {
        //    deps: ['underscore', 'jquery'],
        //    exports: 'Backbone'
        //}
    }
});

// load AMD module main.ts (compiled to main.js)
require(['main'],(main) => {
    alert('main');
    var app = new main();
    app.run();
});