import { Injectable } from '@angular/core';
import { Publico } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AudienceService {
  public audience: Publico
  public audiences: Publico[]

  constructor() {
    this.resetAudience();
    this.fillAudiences();
  }

  public resetAudience() {
    this.audience = {
      ID: null,
      genero: null,
      edadMinima: null,
      edadMaxima: null,
      ubicacion: null,
      ingresos: null
    }
  }

  private fillAudiences() {
    this.audiences = [{
      ID: 1,
      genero: "Masculino",
      edadMinima: 18,
      edadMaxima: 30,
      ubicacion: {
        ID: 1,
        provincia: "Alajuela",
        canton: "San Carlos",
        distrito: "Quesada"
      },
      ingresos: 100000
    }, {
      ID: 2,
      genero: "Femenino",
      edadMinima: 30,
      edadMaxima: 60,
      ubicacion: {
        ID: 1,
        provincia: "Alajuela",
        canton: "San Carlos",
        distrito: "Quesada"
      },
      ingresos: 200000
    }];
  }
}
