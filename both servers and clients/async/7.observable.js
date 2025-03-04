
const myObservable = new Rx.Observable(observer => {
    setTimeout(() => {
        observer.next('dog');
        observer.next('cat');
        observer.next('bird');
    }, 1000);
});

myObservable.subscribe(result => {
    console.log('observable: ', result);
});