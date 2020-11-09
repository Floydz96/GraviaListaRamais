import { Injectable } from '@angular/core';

export declare interface Setor {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private _setores: Setor[] = [{id: 0, nome: "Vendas"}, {id: 1, nome: "Almoxarifado"}, {id: 2, nome: "Telefonista"}, 
  {id: 3, nome: "Caixa"}, {id: 4, nome: "Cadastro"}, {id: 5, nome: "Compras"}, {id: 6, nome: "Devolução"}, {id: 7, nome: "Administrativo"}, 
  {id: 8, nome: "PPCP"}, {id: 9, nome: "TI"}, {id: 10, nome: "Superintendente"}, {id: 11, nome: "Cord. TI"}]

  constructor() { }

  get setores(): Setor[] {
    return this._setores;
  }

  set setores(setores: Setor[]) {
    this._setores = setores;
  }

  public getSetorById(id: number): Setor {
    if(id > this.setores.length - 1 || id < 0){
      alert("erro");
      return null;
    }

    return this.setores[id];
  }

  public addSetor(nomeSetor: string): void {
    this._setores.push({id: this._setores.length, nome: nomeSetor});
  }
}
