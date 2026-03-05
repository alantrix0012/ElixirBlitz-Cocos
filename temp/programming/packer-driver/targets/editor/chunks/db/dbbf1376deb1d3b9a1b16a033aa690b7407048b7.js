System.register(["__unresolved_0", "gulp", "rollup", "gulp-typescript", "gulp-rename", "gulp-uglify-es", "dts-bundle"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_gulp) {
      _req = _gulp.__cjsMetaURL;
    }, function (_rollup) {
      _req0 = _rollup.__cjsMetaURL;
    }, function (_gulpTypescript) {
      _req1 = _gulpTypescript.__cjsMetaURL;
    }, function (_gulpRename) {
      _req2 = _gulpRename.__cjsMetaURL;
    }, function (_gulpUglifyEs) {
      _req3 = _gulpUglifyEs.__cjsMetaURL;
    }, function (_dtsBundle) {
      _req4 = _dtsBundle.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        const gulp = require('gulp');

        const rollup = require('rollup');

        const ts = require('gulp-typescript');

        const rename = require("gulp-rename");

        const uglify = require('gulp-uglify-es').default;

        const dts = require('dts-bundle');

        const tsProject = ts.createProject('tsconfig.json', {
          declaration: true
        });

        const onwarn = warning => {
          // Silence circular dependency warning for moment package
          if (warning.code === 'CIRCULAR_DEPENDENCY') return;
          console.warn(`(!) ${warning.message}`);
        };

        gulp.task('buildJs', () => {
          return tsProject.src().pipe(tsProject()).pipe(gulp.dest('./build'));
        });
        gulp.task("rollup", async function () {
          const subTask = await rollup.rollup({
            input: "build/FairyGUI.js",
            external: ['cc', 'cc/env']
          });
          await subTask.write({
            file: 'dist/fairygui.mjs',
            format: 'esm',
            extend: true,
            name: 'fgui'
          });
        });
        gulp.task("uglify", function () {
          return gulp.src("dist/fairygui.mjs").pipe(rename({
            suffix: '.min'
          })).pipe(uglify()).pipe(gulp.dest("dist/"));
        });
        gulp.task('buildDts', function () {
          return new Promise(function (resolve, reject) {
            dts.bundle({
              name: "fairygui-cc",
              main: "./build/FairyGUI.d.ts",
              out: "../dist/fairygui.d.ts"
            });
            resolve();
          });
        });
        gulp.task('build', gulp.series('buildJs', 'rollup', 'uglify', 'buildDts')); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'gulp': _req,
        'rollup': _req0,
        'gulp-typescript': _req1,
        'gulp-rename': _req2,
        'gulp-uglify-es': _req3,
        'dts-bundle': _req4
      }));
    }
  };
});
//# sourceMappingURL=dbbf1376deb1d3b9a1b16a033aa690b7407048b7.js.map