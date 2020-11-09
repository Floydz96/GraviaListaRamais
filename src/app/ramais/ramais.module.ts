import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamaisTableListComponent } from './ramais-table-list/ramais-table-list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { ExibeUsuarioComponent } from '../exibe-usuario/exibe-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RamaisComponent } from './ramais.component';
import { AppModule } from '../app.module';
import { RamaisCriarComponent } from './ramais-criar/ramais-criar.component';

@NgModule({
  declarations: [
    RamaisTableListComponent,
    RamaisComponent,
    RamaisCriarComponent
  ],
  imports: [
    AppModule,
    BrowserModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    RamaisTableListComponent,
    RamaisCriarComponent
  ]
})
export class RamaisModule { }
