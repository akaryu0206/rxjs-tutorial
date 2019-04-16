import { Observable } from 'rx';

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let source: Observable<number> = Observable.fromArray(array);

let mapped: Observable<string> = source.map(function (x) {
    let ret: string[] = ["-", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう", "じゅう"];
    return ret[x];
});

mapped.subscribe(function (x) {
    console.log(x);
});
