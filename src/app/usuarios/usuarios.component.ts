import { Component, OnInit } from '@angular/core';
import { Usuario } from '../share/models/usuario';
import { UsuarioService } from '../share/usuario.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  usuarios:Array<Usuario>;
  createMode : boolean;
  nuevoUsuario : Usuario;
  usuarioSeleccionado : Usuario;

  
  constructor(private usuarioService:UsuarioService) {
    this.usuarioService = usuarioService;
    this.createMode = false;
   }

  ngOnInit() {
    this.usuarioService.getUsuarios()
    .subscribe((data: Array<Usuario>)=>{
        this.usuarios = data;
    },error =>{
      console.log("Error " + error);
    });
  }
  crearUsuario():void{
    this.createMode=true;
    this.nuevoUsuario = new Usuario();
    this.usuarioSeleccionado = null;

  }
  onCreate(){
    this.usuarioService.creaUsuario(this.nuevoUsuario)
    .subscribe((data:Usuario)=>{
      this.usuarios.push(data);
      this.createMode = false;
    },error => console.log("error "+ error));
  }
  onSelect(usuario:Usuario) : void{
    this.usuarioSeleccionado = usuario;
  }
}
