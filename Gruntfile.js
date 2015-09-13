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
        clean: {
            allDist: {
                src: ['./dist/']
            },
            templateCache: {
                src: [
                    './dist/**/view',
                    './dist/**/test',
                    './dist/**/less',
                    './dist/**/sass'
                ]
            }
        },
        cleanempty: {
            templateCache: {
                options: {
                    files: false
                },
                src: ['dist/**/*']
            }
        },
        ngtemplates: {
            default: {
                src: 'app/src/**/*.html',
                dest: 'app/src/resources/views.js',
                options: {
                    module: "resources.views",
                    standalone: true,
                    url: function (path) {
                        return path.substring('app/'.length);
                    }
                }
            }
        },
        watch: {
            files: ['app/**/*.less'],
            tasks: ['less']
        },
        copy: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: './app',
                        src: ['**', '!**/*Spec.js'],
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
                    keepBuildDir: false,
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
    grunt.registerTask('dist', 'generates a dist version', function () {
        var tasks = ['clean:allDist',
            'less',
            'ngtemplates',
            'copy:all',
            'requirejs'];

        if (grunt.option('templateCache')) {
            tasks.push('clean:templateCache');
        }
        tasks.push('cleanempty');
        grunt.task.run(tasks);

    });

};