import { Injectable } from '@angular/core';
import { Piso } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FloorService {
  floor:Piso
  floors:Piso[]

  constructor() {
    this.resetFloor();
    this.fillFloors();
   }

  public resetFloor() {
    this.floor = {
      ID: null,
      TipoPiso:null
    };
  }

  private fillFloors() {
    this.floors = [{
      ID: 1,
      TipoPiso:"Concreto"
    }, {
      ID: 2,
      TipoPiso:"Ceramica"
    }, {
      ID: 3,
      TipoPiso:"Porcelanato"
    },{
      ID: 4,
      TipoPiso:"Madera"
    }];
  }
}
