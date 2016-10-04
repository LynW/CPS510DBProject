var gulp = require('gulp');
var fs = require ('file-system');
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task);
});
