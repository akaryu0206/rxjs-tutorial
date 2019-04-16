"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var five = rxjs_1.from(rxjs_1.timer(5000)).pipe(operators_1.map(function () { return '5秒'; }));
var seven = rxjs_1.from(rxjs_1.timer(7000)).pipe(operators_1.map(function () { return '7秒'; }));
var stream = rxjs_1.merge(five, seven);
stream.subscribe(function (x) {
    console.log(x);
});
