import { Observable } from 'rx';

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let source: Observable<number> = Observable.fromArray(array);

let filtered: Observable<number> = source.filter( function (x) {
    if (x % 3 === 0) {
        return true;
    }
});

filtered.subscribe( function (x) {
    console.log(x);
});
