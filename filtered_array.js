"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var source = rxjs_1.from(array);
var filtered = source.pipe(operators_1.filter(function (x) { return x % 3 === 0; }));
filtered.subscribe(function (x) {
    console.log(x);
});
