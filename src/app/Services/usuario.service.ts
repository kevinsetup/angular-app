import { Injectable } from '@angular/core';
import { Escuela, Usuario } from '../model/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios:Usuario[];
  private escuelas:Escuela[];
  constructor(){
    this.escuelas=[{id:1,nombre:'Sistemas'},{id:2,nombre:'Alimentos'},{id:3,nombre:'Ambiental'}];
    this.usuarios=[];
  }
  getEscuela(){
    return this.escuelas;
  }
  getUsuario(){
    return this.usuarios;
  }
  addUsuario(usuario:Usuario){
    this.usuarios.push(usuario);
  }
  nuevoUsuario():Usuario{
    return{id:0,nombre:'',direccion:'',escuela:0};
  }
}