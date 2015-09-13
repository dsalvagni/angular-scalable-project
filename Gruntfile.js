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
            htmlDist: {
                src: ['./dist/src/**/*.html']
            }
        },
        ngtemplates: {
            default: {
                src: 'app/src/**/*.html',
                dest: 'dist/src/resources/views.js',
                options: {
                    module: "resources.views",
                    standalone:true,
                    url: function(path) {
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
                        src: ['**'],
                        dest: 'dist/',
                        flatten: false,
                        filter: 'isFile'
                    }
                ]
            },
            noViews: {
                files: [
                    {
                        expand: true,
                        cwd: './app/src',
                        src: ['**/*.js'],
                        exclude: ['**/*Spec.js'],
                        dest: 'dist/',
                        flatten: false,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: './app/vendor',
                        src: ['**/*.js'],
                        dest: 'dist/vendor',
                        flatten: false,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: './app/assets',
                        src: ['css/**/*.css','fonts/**'],
                        dest: 'dist/assets',
                        flatten: false,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: './app',
                        src: ['*.js','*.html'],
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
    grunt.registerTask('dist', 'generates a dist version', function(){
        var tasks = ['clean:allDist','less'];
        if(grunt.option('templateCache'))
        {
            tasks.push('copy:noViews');
        } else {
            tasks.push('copy:all');
        }
        tasks.push('ngtemplates');
        tasks.push('requirejs');
        grunt.task.run(tasks);

    });

};