import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../user-table/user-table-component/user-table.component'

@Component({
  selector: 'app-exibe-usuario',
  templateUrl: './exibe-usuario.component.html',
  styleUrls: ['./exibe-usuario.component.css']
})
export class ExibeUsuarioComponent implements OnInit {
  
  @Input() nome: string;
  @Input() setor: string;
  @Input() fone: string;

  constructor() { 

  }

  ngOnInit(): void {
  }

}
