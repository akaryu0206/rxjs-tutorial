"use strict";
exports.__esModule = true;
var rx_1 = require("rx");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var source = rx_1.Observable.fromArray(array);
var filtered = source.filter(function (x) {
    if (x % 3 === 0) {
        return true;
    }
});
filtered.subscribe(function (x) {
    console.log(x);
});
