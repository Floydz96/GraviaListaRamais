import { Injectable } from '@angular/core';
import { Filial, FilialService } from './filial.service';
import { Setor, SetorService } from './setor.service';

export declare interface Ramal {
  id: number,
  nomeColaborador: string;
  setor: Setor;
  fone: string;
  email: string;
  filial: Filial;
  aparelho: string; 
}

@Injectable({
  providedIn: 'root'
})
export class RamaisService {

  private static nomes: string[] = ["Aleixo Saraíba",
  "Aluísio Cerqueira",
  "Alvito Vázquez",
  "Andreoleto Amado",
  "Bento Parahyba",
  "Cassandra Cipriano",
  "Domingos Beserril",
  "Fabiana Paranhos",
  "Gerusa Sacadura",
  "Godinho ou Godim Marreiro",
  "Gueda Cordeiro",
  "Joana Guedelha",
  "Nivaldo Páez",
  "Otávio Loureiro",
  "Paulina Carrasqueira",
  "Sara Capiperibe",
  "Soraia Pereira",
  "Teodorico Pequeno",
  "Ulrico Teixeira",
  "Virgílio Passose"];

  private static emails: string[] = ["antónio.botica@gravia.com.br",
  "bartolomeu.júdice@gravia.com.br",
  "benedito.ourique@gravia.com.br",
  "claudemira.nascimento@gravia.com.br",
  "cátia.guarabira@gravia.com.br",
  "emiliano.alencastre@gravia.com.br",
  "floriano.jaguariúna@gravia.com.br",
  "greice.covilhã@gravia.com.br",
  "guaraci.onofre@gravia.com.br",
  "irani.seabra@gravia.com.br",
  "irene.guimaraens@gravia.com.br",
  "isilda.bicalho@gravia.com.br",
  "jandaíra.reis@gravia.com.br",
  "josefina.almeida@gravia.com.br",
  "ludovico.cartaxo@gravia.com.br",
  "marli.meneses@gravia.com.br",
  "norberto.rebello@gravia.com.br",
  "potira.lacerda@gravia.com.br",
  "sara.guedella@gravia.com.br",
  "soeiro.tabalipa@gravia.com.br"];

  private _ramais: Ramal[];

  constructor(public setorService: SetorService, public filialService: FilialService) { this._ramais = this.generateTempRamais(); }

  get ramais(): Ramal[]{
    return this._ramais;
  }

  private generateTempRamais(): Ramal[] {
    let ramais: Ramal[] = [];

    for(let i = 0; i < 100; i++){

      let randN = Math.floor((Math.random() * RamaisService.nomes.length));
      let randE = Math.floor((Math.random() * RamaisService.emails.length));
      let randF = Math.floor((Math.random() * this.filialService.filiais.length));
      let randS = Math.floor((Math.random() * this.setorService.setores.length));

     let ramal = {
        id: i, 
        nomeColaborador: RamaisService.nomes[randN], 
        setor: this.setorService.setores[randS], 
        fone: "1234-0678", 
        email: RamaisService.emails[randE], 
        filial: this.filialService.filiais[randF], 
        aparelho: "DIGITAL" }
        ramais.push(ramal);
    }

    return ramais;
  }

}
