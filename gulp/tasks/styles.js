// Gulp Plugins Import/Require
var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  cssvars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  cssImport = require("postcss-import"),
  autoprefixer = require("autoprefixer"),
  mixins = require("postcss-mixins");

//Gulp CSS Task
gulp.task("styles", function() {
  //PostCss plugin usage
  return gulp
    .src("./app/assets/styles/styles.css") //Source file/Starting File
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) //Pipe it through
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles")); //Output Folder Files
});
