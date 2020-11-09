import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FilialService, Filial } from './filial.service';
import { InputElementService } from './input-element.service';
import { SelectElementService } from './select-element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Lista de Ramais';
  public version = "v1.0.0"

  constructor() { }
  
  ngOnInit(): void {
    
  }

  onValor(valor: any) {
    console.log(valor);
  }

}
