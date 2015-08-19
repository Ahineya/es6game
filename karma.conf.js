module.exports = function(config) {
    config.set({

        frameworks: ['browserify', 'jasmine'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [
            'src/browser-polyfill.js'
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        browsers: ['PhantomJS']

    });
};