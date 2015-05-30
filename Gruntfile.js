module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    compress: true,
                    optimization: 2,
                    paths: ["assets/css"],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                        new (require('less-plugin-clean-css'))({advanced: true})
                    ]
                },
                files: {
                    "app/assets/css/main.min.css": "app/assets/less/main.less"
                }
            }
        },
        watch: {
            files: ['app/**/*.less'],
            tasks: ['less']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['watch']);

};