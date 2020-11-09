import { Injectable } from '@angular/core';
import { Usuario } from './user-table-component/user-table.component';

@Injectable()
export class UsuarioService {

    usuarios: Usuario[] = [
    {id: 0, nome: "Daniel Pedro", sobrenome: "Pinto Barbosa" ,idade: 21, cpf: "49878542102", corfav: "Azul"},
    {id: 1, nome: "Junior Alves", sobrenome: "Pinto Barbosa" ,idade: 45, cpf: "12345678921", corfav: "Preto"},
    {id: 2, nome: "Miguel Fabio", sobrenome: "Pinto Barbosa" ,idade: 87, cpf: "98798465461", corfav: "Vermelho"},
    {id: 3, nome: "Almira Irgon", sobrenome: "Pinto Barbosa" ,idade: 65, cpf: "23454536567", corfav: "Amarelo"},
    {id: 4, nome: "Jubube Amigo", sobrenome: "Pinto Barbosa" ,idade: 32, cpf: "12342343456", corfav: "Verde"},
    {id: 5, nome: "Adisto Amiro", sobrenome: "Pinto Barbosa" ,idade: 56, cpf: "36573452342", corfav: "Preto"},
    {id: 6, nome: "Osvald Higgn", sobrenome: "Pinto Barbosa" ,idade: 45, cpf: "25463567456", corfav: "Violeta"},
    {id: 7, nome: "Freder Albre", sobrenome: "Pinto Barbosa" ,idade: 78, cpf: "12423467586", corfav: "Vermelho"},
    {id: 8, nome: "Orbnir Alfro", sobrenome: "Pinto Barbosa" ,idade: 63, cpf: "23456889954", corfav: "Verde"},
    {id: 9, nome: "Jurumn Borbo", sobrenome: "Pinto Barbosa" ,idade: 52, cpf: "56456765765", corfav: "#50a832"},
    {id: 10, nome: "Augmn Piros", sobrenome: "Pinto Barbosa" ,idade: 54, cpf: "21317899008", corfav: "#a83281"}
  ]

  constructor() { }

  public getUsuarios(): Usuario[] {
    return this.usuarios;
  }
}
