import { Injectable } from '@angular/core';
import { Usuario, Profile, Occupation } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:Usuario;
  users:Usuario[];

  constructor(){
    this.resetUser();
    this.fillUsers();
    this.user = this.users[0];
  }

  public resetUser(){
    this.user = {
      usuario: null,
      password: null,
      nombre: null,
      apellidoPaterno: null,
      apellidoMaterno: null,
      profile: null,
      cedula: null,
      //Para clientes
      genero: null,
      fechaNacimiento: null,
      salario: null,
      ocupacion: null,
      ubicacion: null,
      email: null,
      nacionalidad: null,
      //Para agentes
      ingreso: null
    }
  }

  private fillUsers(){
    this.users = [{
      usuario: "Jormag",
      password: "Abc123",
      nombre: "Cristian",
      apellidoPaterno: "Marin",
      apellidoMaterno: "Murillo",
      profile: Profile.Comprador,
      cedula: 207710175,
      //Para clientes
      genero: "Masculino",
      fechaNacimiento: "1997-09-16",
      salario: 3000000,
      ocupacion: {ID:1,name:"Ingeniero"},
      ubicacion: {ID:1,provincia:"Alajuela",canton:"San Carlos",distrito:"Quesada"},
      email: "cmarinmurillo@gmail.com",
      nacionalidad: "Costarricense",
      //Para agentes
      ingreso: null
    }]
  }
}
