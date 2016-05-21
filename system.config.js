System.config({
    defaultJSExtensions: true,
    transpiler: 'plugin-babel',
    baseURL: '/public/js',
    paths : {
        'systemjs': '../node_modules/systemjs/dist/system.js',
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    }
});
