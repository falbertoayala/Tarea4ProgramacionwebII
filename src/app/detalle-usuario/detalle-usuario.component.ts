import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../share/models/usuario';
import { UsuarioService } from '../share/usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  
  @Input()
  usuario : Usuario;

  constructor(private usuarioService : UsuarioService) { 
    this.usuarioService = usuarioService;
  }

  ngOnInit() {
  }
  onEdit() : void{
    this.usuarioService.editUsuario(this.usuario)
    .subscribe((data:Usuario) =>{
      this.usuario = null;
    }, error => console.log("error " + error))
  }

}
