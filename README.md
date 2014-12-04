<h3>Introduction</h3>
bb boilerplate is backbone boilerplate. It consists of Backbone, Underscore and Requirejs.

<h3>Requirements</h3>

App Boilerplate requires Grunt that needs to be installed and needs, but not must, some basic knowledge of Grunt. If you don't know Grunt then please read about it here. Similarly, it also needs some bower knowledge as it is used as dependency management tool. Please read about bower here. Install both of these tools before continuing.

<h3>Usage</h3>

1. Clone this repository.
2. Run npm install command to download and install all Grunt dependencies.
3. Run bower install to download all project dependencies such as jQuery, Backbonejs, Underscore and Requirejs.
4. Now run `grunt hookmeup` to add pre-commit hooks for jshint and csslint.

Once application is completed then run following command to build your application for production. 
1. Grunt

The built version will be in new directory called /dist in root directory.
