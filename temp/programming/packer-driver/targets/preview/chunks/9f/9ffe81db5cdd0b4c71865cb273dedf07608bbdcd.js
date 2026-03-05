System.register(["__unresolved_0", "gulp", "rollup", "gulp-typescript", "gulp-rename", "gulp-uglify-es", "dts-bundle"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, __cjsMetaURL;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        var gulp = require('gulp');

        var rollup = require('rollup');

        var ts = require('gulp-typescript');

        var rename = require("gulp-rename");

        var uglify = require('gulp-uglify-es').default;

        var dts = require('dts-bundle');

        var tsProject = ts.createProject('tsconfig.json', {
          declaration: true
        });

        var onwarn = warning => {
          // Silence circular dependency warning for moment package
          if (warning.code === 'CIRCULAR_DEPENDENCY') return;
          console.warn("(!) " + warning.message);
        };

        gulp.task('buildJs', () => {
          return tsProject.src().pipe(tsProject()).pipe(gulp.dest('./build'));
        });
        gulp.task("rollup", /*#__PURE__*/_asyncToGenerator(function* () {
          var subTask = yield rollup.rollup({
            input: "build/FairyGUI.js",
            external: ['cc', 'cc/env']
          });
          yield subTask.write({
            file: 'dist/fairygui.mjs',
            format: 'esm',
            extend: true,
            name: 'fgui'
          });
        }));
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
//# sourceMappingURL=9ffe81db5cdd0b4c71865cb273dedf07608bbdcd.js.map