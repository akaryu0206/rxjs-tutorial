import { Observable } from 'rx';

let five: Observable<string>  = Observable.timer(5000).map(() => '5秒');
let seven: Observable<string> = Observable.timer(7000).map(() => '7秒');

let merge: Observable<string> = five.merge(seven);

merge.subscribe(function (x) {
    console.log(x);
});
