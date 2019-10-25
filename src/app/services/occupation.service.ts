import { Injectable } from '@angular/core';
import { Occupation } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  public occupation:Occupation
  public occupations:Occupation[]

  constructor(){
    this.resetOccupation();
    this.fillOccupations();
  }

  public resetOccupation(){
    this.occupation = {
      ID: null,
      name: null
    }
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
