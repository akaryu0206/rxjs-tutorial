import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let source: Observable<number> = from(array);

let mapped: Observable<string> = source.pipe(map(x => ["-", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう", "じゅう"][x]));

mapped.subscribe(function (x) {
    console.log(x);
});
