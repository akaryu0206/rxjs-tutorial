"use strict";
exports.__esModule = true;
var rx_1 = require("rx");
var five = rx_1.Observable.timer(5000).map(function () { return '5秒'; });
var seven = rx_1.Observable.timer(7000).map(function () { return '7秒'; });
var merge = five.merge(seven);
merge.subscribe(function (x) {
    console.log(x);
});
