import { Injectable } from '@angular/core';
import { Inmueble } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {
  public propertyType: Inmueble
  public propertyTypes: Inmueble[]

  constructor() { 
    this.resetPropertyType();
    this.fillPropertyTypes();
  }

  public resetPropertyType() {
    this.propertyType = {
      ID: null,
      TipoInmueble:null
    };
  }

  private fillPropertyTypes() {
    this.propertyTypes = [{
      ID: 1,
      TipoInmueble:"Lote"
    }, {
      ID: 2,
      TipoInmueble:"Casa"
    }, {
      ID: 3,
      TipoInmueble:"Apartamento"
    }];
  }
}
