"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var observableA = rxjs_1.interval(1000).pipe(operators_1.take(5));
var observableB = rxjs_1.interval(2000).pipe(operators_1.take(5));
var observableC = rxjs_1.interval(3000).pipe(operators_1.take(5));
var mergedObservable = rxjs_1.merge(observableA, observableB, observableC);
mergedObservable.subscribe(function (x) {
    console.log(x);
});
// let pattern: Pattern2<any, any> = observableA.and(observableB);
// let plan: Plan<string> = pattern.thenDo(function (x: any, y: any): string {
//     return '3つ揃ったよ!';
// });
// let complexCondition = Observable.when(plan);
// complexCondition.subscribe(function (x) {
//     console.log(x);
// });
