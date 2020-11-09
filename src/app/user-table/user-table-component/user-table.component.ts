import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ExibeUsuarioComponent } from 'src/app/exibe-usuario/exibe-usuario.component';
import { UsuarioService } from '../usuario.service';

export declare interface Usuario {
  id: number
  nome: string
  sobrenome: string
  idade: number
  cpf: string
  corfav: string
}

export declare interface Cor {
  nome: string;
  hex: string;
}

export const CORES: Cor[] = [
  { nome: 'Slate Blue', hex: '6A5ACD' },
  { nome: 'Midnight Blue', hex: '191970' },
  { nome: 'Deep Sky Blue', hex: '00BFFF' },
  { nome: 'Aquamarine', hex: '7FFFD4' },
  { nome: 'Medium Sea Green', hex: '3CB371' },
  { nome: 'Orange Red', hex: 'FF4500' }
];

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Output() event: EventEmitter<Usuario> = new EventEmitter();

  public usuarios: Usuario[];
  private isOver: number = -1;

  public rainbow: boolean = false;
  private autoSwitch: any;

  usuarior: Usuario = null;

  adicionarUsuario: boolean = false;
  novoUsuario: Usuario = UserTableComponent.newEmptyUser();

  constructor(usuarioService: UsuarioService) {
    this.usuarios = usuarioService.getUsuarios();
  }

  onClick(rows: any): void {
    let row: any[] = rows;

    this.usuarior = { id: row[0].textContent, nome: row[1].textContent, sobrenome: row[2].textContent, idade: row[3].textContent, cpf: row[4].textContent, corfav: row[5].textContent };
    this.event.emit(this.usuarior);

    this.changeColor(this.usuarior.id);
  }

  public isMouseOver(id: number): boolean {
    return this.isOver == id;
  }

  public setMouseOver(id: number): void {
    this.isOver = id;

    if (id >= 0) {
      this.usuarior = this.usuarios[id];
    } else if (id == -1) {
      this.usuarior = undefined;
    }
  }

  public getColorOver(id: number): string {
    return this.usuarios[id] != null && this.usuarios[id].corfav != null && this.isMouseOver(id) ?
      this.translateColor(this.usuarios[id].corfav) : id % 2 == 0 ? "" : "";
  }

  public adicionaNovoUsuario(): void {
    this.novoUsuario.id = this.usuarios.length;
    this.usuarios.push(this.novoUsuario);
    this.novoUsuario = UserTableComponent.newEmptyUser();
  }

  public changeColor(userId: number): string {
    let color: Cor = this.sortRandomColor();

    this.usuarios[userId].corfav = "#" + color.hex;
    return "#" + color.hex;
  }

  public startAutoColorSwitch(): void {
    if (this.autoSwitch == null){
      this.autoSwitch = setInterval(() => {
        this.usuarios.forEach(element => {
          this.changeColor(element.id);
        });
      }, 1e3);
      this.rainbow = true;
    } else {
      clearInterval(this.autoSwitch);
      this.rainbow = false;
      this.autoSwitch = null;
    }
  }

  private translateColor(colorName: string): string {

    if (colorName.startsWith("#"))
      return colorName;

    switch (colorName.toLowerCase()) {
      case "azul": return "blue";
      case "vermelho": return "red";
      case "violeta": return "purple";
      case "verde": return "green";
      case "amarelo": return "yellow";
      case "preto": return "black";
    }
  }

  private sortRandomColor(): Cor {
    let num: number = Math.floor(Math.random() * CORES.length);

    return CORES[num];
  }

  private static newEmptyUser(): Usuario {
    return { id: -1, nome: "", sobrenome: "", idade: -1, cpf: "", corfav: "" };
  }

  ngOnInit(): void {

  }

}
