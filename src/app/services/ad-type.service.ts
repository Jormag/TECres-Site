import { Injectable } from '@angular/core';
import { AdType } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdTypeService {
  public adType: AdType
  public adTypes: AdType[]

  constructor() {
    this.resetAdType();
    this.fillAdTypes();
  }

  public resetAdType() {
    this.adType = {
      ID: null,
      Tipo: null,
      Precio: null
    };
  }

  private fillAdTypes() {
    this.adTypes = [{
      ID: 1,
      Tipo: "Normal",
      Precio: 1000
    }, {
      ID: 2,
      Tipo: "Destacado",
      Precio: 2000
    }, {
      ID: 3,
      Tipo: "Oro",
      Precio: 3000
    }, {
      ID: 4,
      Tipo: "Platino",
      Precio: 4000
    }];
  }
}
