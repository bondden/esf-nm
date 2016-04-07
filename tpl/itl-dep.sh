#!/usr/bin/env bash

npm i -S babel-polyfill

# amn
npm i -D gulp gulp-changed

# bld
npm i -D gulp-babel babel-core babel-preset-es2015-node5 babel-preset-stage-0 babel-register
npm i -D gulp-rename
npm i -D gulp-jade gulp-data
npm i -D gulp-stylus

# dbg
npm i -D gulp-sourcemaps gulp-livereload gulp-plumber

# sca
npm i -D gulp-eslint

# tst
npm i -D chai gulp-mocha istanbul mocha-lcov-reporter
