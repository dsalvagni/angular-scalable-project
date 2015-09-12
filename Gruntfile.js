module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    compress: true,
                    optimization: 2,
                    paths: ["assets/css"]
                },
                files: {
                    "app/assets/css/main.min.css": "app/assets/less/main.less"
                }
            }
        },
        bowerRequirejs: {
            target: {
                rjsConfig: 'app/main.js',
                options: {
                    exclude: ['requirejs']
                }
            }
        },
        watch: {
            files: ['app/**/*.less'],
            tasks: ['less']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: './app',
                        src: ['**'],
                        dest: 'dist/',
                        flatten: false,
                        filter: 'isFile'
                    }
                ]
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: './app/',
                    baseUrl: "./",
                    mainConfigFile: 'app/main.js',
                    modules: [
                        {name: 'app'}
                    ],
                    dir: "./dist",
                    keepBuildDir: true,
                    locale: "en-us",
                    optimize: "uglify2",
                    skipDirOptimize: false,
                    generateSourceMaps: false,
                    normalizeDirDefines: "skip",
                    uglify2: {
                        output: {
                            beautify: false
                        },
                        compress: {
                            sequences: true,
                            global_defs: {
                                DEBUG: false
                            }
                        },
                        warnings: false,
                        mangle: true
                    },
                    findNestedDependencies: true,
                    removeCombined: true,
                    preserveLicenseComments: false
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);


    grunt.registerTask('default', ['bowerRequirejs']);
    grunt.registerTask('dist', ['less', 'copy', 'requirejs']);

};