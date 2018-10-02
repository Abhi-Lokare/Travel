// Gulp Plugins Import/Require
var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

// =====================GULP STARTING TASKS======================= //
gulp.task("watch", function() {
  //BrowserSync Functionality setup
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  //Watch for HTML Changes
  watch("./app/index.html", function() {
    browserSync.reload();
  });
  //Watch for CSS Changes
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});
