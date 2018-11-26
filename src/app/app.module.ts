import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RolesComponent } from './roles/roles.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetalleRolComponent } from './detalle-rol/detalle-rol.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    DetalleRolComponent,
    UsuariosComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
