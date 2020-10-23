import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  constructor(private usuarioSevice:UsuarioService) { }
  usuarios:Usuario[];
  ngOnInit(): void {
    this.usuarios=this.usuarioSevice.getUsuario();
  }

}
