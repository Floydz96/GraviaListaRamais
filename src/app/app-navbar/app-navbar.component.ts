import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InputElementService } from '../input-element.service';
import { SelectElementService } from '../select-element.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  @Input() public title: string;
  @Input() public version: string;

  @Output() public selectValue: EventEmitter<string> = new EventEmitter();
  @Output() public inputKeyup: EventEmitter<string> = new EventEmitter();

  constructor(private sharedSelectService: SelectElementService, private sharedInputService: InputElementService) { }

  ngOnInit(): void {
    
  }

  public onSelectChange(value: any){
    this.sharedSelectService.changeCurrentValue(value);
    this.selectValue.emit(value);
  }

  public onInputKeyup(input: string){
    this.sharedInputService.changeInputData(input);
    this.selectValue.emit(input);
  }
}
