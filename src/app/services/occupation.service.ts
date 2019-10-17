import { Injectable } from '@angular/core';
import { Occupation } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  public occupations:Occupation[];

  constructor(){
    this.fillOccupations;
  }

  private fillOccupations(){
    this.occupations = [{
      ID: 1,
      name: "Ingeniero"
    },{
      ID: 2,
      name: "Medico"
    },{
      ID: 3,
      name: "Comerciante"
    },{
      ID: 4,
      name: "Profesor"
    }];
  }

}
