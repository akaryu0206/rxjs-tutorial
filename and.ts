import { Observable, pipe, interval, merge } from 'rxjs';
import { take, map } from 'rxjs/operators';

let observableA: Observable<any> = interval(1000).pipe(take(5));
let observableB: Observable<any> = interval(2000).pipe(take(5));
let observableC: Observable<any> = interval(3000).pipe(take(5));

let mergedObservable: Observable<any> = merge(observableA, observableB, observableC);

mergedObservable.pipe((x, y, z) => {

});

mergedObservable.subscribe((x: any) => {
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
