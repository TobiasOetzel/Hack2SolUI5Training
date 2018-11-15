module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8080,
					hostname: 'localhost',
					keepalive: true,
					open: "http://localhost:8080/webapp/index.html",
					middleware: function (connect, options, defaultMiddleware) {
						var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
						return [
							// Include the proxy first
							proxy
						].concat(defaultMiddleware);
					}
				},
				proxies: [
					{
						context: '/destinations/northwind',
						host: 'services.odata.org',
						changeOrigin: true,
						headers: {
							'host': 'services.odata.org'
						},
						rewrite: {
							"^/destinations/northwind" : ''
						}
					},
					{
						context: '/es4',
						host: 'services.odata.org',
						changeOrigin: true,
						headers: {
							// 'Authorization': 'Basic <your token>'
							'host': 'sapes4.sapdevcenter.com'
						},
						rewrite: {
							"^/destinations/es4" : ''
						}
					}
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-connect-proxy');

	grunt.registerTask('server', function () {
		grunt.task.run([
			'configureProxies:server',
			'connect:server'
		]);
	});
};