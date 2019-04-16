import { Observable, from } from 'rxjs';

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let source: Observable<any> = from(array);

source.subscribe( function (x: number) {
  console.log(x);
});
