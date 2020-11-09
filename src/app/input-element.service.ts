import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputElementService {

  private inputElementSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  private currentInputData: Observable<string> = this.inputElementSubject.asObservable();

  constructor() { }

  public getCurrentInputData(){
    return this.currentInputData;
  }

  public changeInputData(value: string): void {
    this.inputElementSubject.next(value);
  }
}
