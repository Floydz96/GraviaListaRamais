import { Injectable } from '@angular/core';

export declare interface Filial {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilialService {
  
  private _filiais: Filial[] = [{id: 1, nome: "Filial 01 - Loja SIA"}, {id: 2, nome: "Filial 02 - Loja Taguatinga"}, 
  {id: 3, nome: "Filial 03 - Loja Samambaia"}, {id: 4, nome: "Filial 04 - Loja Ceilândia"}, {id: 5, nome: "Filial 05 - Loja Águas Lindas"}, 
  {id: 7, nome: "Filial 07 - Fábrica Taguatinga"}, {id: 8, nome: "Filial 08 - Fábrica SIA"}, {id: 10, nome: "Filial 10 - Depósito Taguatinga"}, 
  {id: 12, nome: "Filial 12 - Construção a Seco"}];

  private _filiaisAtivas: Filial[] = this.filiais;

  constructor() { }

  get filiais(): Filial[] {
    return this._filiais;
  }

  set filiais(filiais: Filial[]) {
    this._filiais = filiais;
  }

  get filiaisAtivas(): Filial[] {
    return this._filiaisAtivas;
  }

  set filiaisAtivas(filiais: Filial[]){
    this._filiaisAtivas = filiais;
  } 

  public getFilialById(id: number): Filial {
    for(let i = 0; i < this.filiais.length; i++){
      if(this.filiais[i].id == id)
        return this.filiais[i];
    }

    return null;
  }

  public addFilial(idFilial: number, nomeFilial: string): void {
    this._filiais.push({id: idFilial, nome: nomeFilial});
  }

  public addFilialAtiva(filial: Filial): void {

  }

  public removeFilialAtiva(filialId: number): void {

  }

  public limparFiliaisAtivas(): void {
    this._filiaisAtivas = [];
  }
}
