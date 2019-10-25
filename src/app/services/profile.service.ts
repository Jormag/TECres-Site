import { Injectable } from '@angular/core';
import { Profile } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public profile: Profile
  public profiles: Profile[]

  constructor() {
    this.resetProfile();
    this.fillProfiles();
   }

  public resetProfile() {
    this.profile = {
      ID: null,
      Perfil:null
    };
  }

  private fillProfiles() {
    this.profiles = [{
      ID: 1,
      Perfil:"Administrador"
    }, {
      ID: 2,
      Perfil:"Agente"
    }, {
      ID: 3,
      Perfil:"Comprador"
    }];
  }
}
