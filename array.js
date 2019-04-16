"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var source = rxjs_1.from(array);
source.subscribe(function (x) {
    console.log(x);
});
