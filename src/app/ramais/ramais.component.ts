import { Component, OnInit } from '@angular/core';
import { Filial, FilialService } from '../filial.service';
import { SelectElementService } from '../select-element.service';

@Component({
  selector: 'app-ramais',
  templateUrl: './ramais.component.html',
  styleUrls: ['./ramais.component.css']
})
export class RamaisComponent implements OnInit {

  public filialSelectValue: number;
  public filiais: Filial[];

  constructor(public filialService: FilialService, private sharedSelectService: SelectElementService) { 
    this.filiais = filialService.filiais; 
  }

  ngOnInit(): void {
    this.sharedSelectService.getCurrectValue().subscribe(vl => {
      this.filialSelectValue = vl

      if (this.filialSelectValue != 0) {
        this.filiais = [this.filialService.getFilialById(this.filialSelectValue)];
      } else {
        this.filiais = this.filialService.filiais;
      }
    });
  }

}
