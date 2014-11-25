module.exports = function (grunt) {
	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			target: {
				src: 'src/js/*.js'
			}
		},

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			target: {
				src: 'src/styles/styles/**/*.css'
			}
		},

		copy: {
			dist: {
				cwd: 'src/', expand: true, src: '**', dest: 'dist/'
			}
		},

		requirejs: {
			compile: {
				options: {
					name: "views/app",
					baseUrl: "dist/js",
					mainConfigFile: "dist/js/main.js",
					out: "dist/scripts/scripts.min.js",
					include: ['libs/requirejs/require.js']
				}
			}
		},

		cssmin: {
			options: {},
			target: {
				src: 'dist/styles/**/*.css',
				dest: 'dist/styles/styles.min.css'
			}
		},

		clean: {
			js: ['dist/js/'],
			css: ['dist/css/'],
			hooks: ['.git/hooks/pre-commit']
		},

		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['src/index.html']
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'dist/index.html': 'dist/index.html'
				}
			}
		},
		
		// Run shell commands
		shell: {
			hooks: {
				// Copy the project's pre-commit hook into .git/hooks
				command: 'cp pre-commit .git/hooks/'
			}
		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-shell');
	
	grunt.registerTask('default', [
			'jshint', 
			'csslint', 
			'copy', 
			'requirejs', 
			'cssmin', 
			'clean', 
			'processhtml', 
			'htmlmin'
		]
	);

	grunt.registerTask('hookmeup', ['clean:hooks', 'shell:hooks']);
}
