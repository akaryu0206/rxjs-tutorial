import { Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let source: Observable<number> = from(array);

let filtered: Observable<number> = source.pipe(filter(x => x % 3 === 0));

filtered.subscribe( function (x) {
    console.log(x);
});
