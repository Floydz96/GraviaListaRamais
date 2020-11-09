import { Component, Input, OnInit, Output } from '@angular/core';
import { Filial, FilialService } from 'src/app/filial.service';
import { InputElementService } from 'src/app/input-element.service';
import { RamaisService, Ramal } from 'src/app/ramais.service';

@Component({
  selector: 'ramais-table-list',
  templateUrl: './ramais-table-list.component.html',
  styleUrls: ['./ramais-table-list.component.css']
})
export class RamaisTableListComponent implements OnInit {

  @Input() public filialId: number;
  @Input() public filtro: string;

  public ramais: Ramal[];
  public filial: Filial;

  public ramal: Ramal;

  constructor(public ramalService: RamaisService, public filialService: FilialService, private sharedInputService: InputElementService) { }

  ngOnInit(): void {
    
    this.ramais = this.ramalService.ramais;
    this.filial = this.filialService.getFilialById(this.filialId);

    this.sharedInputService.getCurrentInputData().subscribe(tx => {
      this.filtro = tx;
      
      this.ramais = this.ramalService.ramais;
      
      this.filterByPattern(this.filtro);
    });

    this.filterByID(this.filialId);
  }

  private filterByID(id: number): void {
    if(id == 0)
      return;

    let ramais: Ramal[] = [];

    for(let i = 0; i < this.ramais.length; i++){
      if(id == this.ramais[i].filial.id){
        ramais.push(this.ramais[i]);
      }
    }

    this.ramais = ramais;
  }

  private filterByPattern(pattern: string): void {
    if(pattern == ""){
      this.filterByID(this.filialId);
      return;
    }
    
    let ramais: Ramal[] = [];

    for(let i = 0; i < this.ramais.length; i++){
      if(this.ramais[i].nomeColaborador.toLocaleLowerCase().startsWith(pattern.toLocaleLowerCase()) && this.ramais[i].filial.id == this.filialId){
        ramais.push(this.ramais[i]);
      }
    }

    this.ramais = ramais;
  }

  public onMouseOverRamal(ramal: any): void {
    console.log(ramal);
    this.ramal = ramal;
  }

  public onMouseOutRamal(): void {
    this.ramal = null;
  }

  public onMouseClicKRamal(): void {
    window.location.href = "filial/cadastrar"
  }
}
