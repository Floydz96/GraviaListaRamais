import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table-component/user-table.component';
import { ExibeUsuarioComponent } from './exibe-usuario/exibe-usuario.component';
import { UsuarioService } from './user-table/usuario.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CpfPipe } from './cpf.pipe';
import { UserCreateComponent } from './user-create/user-create.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RamaisModule } from './ramais/ramais.module';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    ExibeUsuarioComponent,
    CpfPipe,
    UserCreateComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    MatIconModule,
    MatSelectModule,
    ExibeUsuarioComponent,
  ],
  providers: [ UsuarioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
