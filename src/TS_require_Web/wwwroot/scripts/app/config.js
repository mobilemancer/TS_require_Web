/// <reference path="../definitions/requirejs/require.d.ts" />
//file config.ts
require.config({
    baseUrl: 'scripts/app',
    paths: {},
    shim: {}
});
// load AMD module main.ts (compiled to main.js)
require(['main'], function (main) {
    alert('main');
    var app = new main();
    app.run();
});
