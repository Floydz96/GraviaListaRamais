import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectElementService {
  
  private selectValueSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private currentValue: Observable<number> = this.selectValueSubject.asObservable();

  constructor() { }

  public getCurrectValue(): Observable<number> {
    return this.currentValue;
  }

  public changeCurrentValue(value: number): void {
    console.log("changed to " + value)
    this.selectValueSubject.next(value);
  }
}
