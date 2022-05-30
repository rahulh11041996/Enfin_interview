import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";

export abstract class AbstractFacade<T> {

    abstract getInitialState(): T;
    abstract updateLocalState(state: T): T;
    abstract getStateSnapShot(): T;


    private store = new BehaviorSubject<T>(this.getInitialState());
    private store$ = this.store.asObservable();

    propertyObservable<R>(mappingFn: (state: T) => R): Observable<R> {
        return this.store$.pipe(
            map(state => mappingFn(state)),
            distinctUntilChanged()
        )
    }

    protected updateState(state: T) {
        this.store.next(this.updateLocalState(state));
    }

}