import { Injectable } from '@angular/core';
import { Locations } from '../common/interfaces'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public tempLocation: Locations;
  public locations: Locations[];

  constructor(){
    this.resetTempLocation();
    this.fillLocations();
  }

  public resetTempLocation() {
    this.tempLocation = {
      ID: null,
      provincia: null,
      canton: null,
      distrito: null
    };
  }

  private fillLocations(){
    this.locations = [{
      ID: 1,
      provincia: "Alajuela",
      canton: "San Carlos",
      distrito: "Quesada"
    }, {
      ID: 2,
      provincia: "Alajuela",
      canton: "Los Chiles",
      distrito: "Cano Negro"
    }, {
      ID: 3,
      provincia: "Alajuela",
      canton: "San Ramon",
      distrito: "San Rafael"
    }, {
      ID: 4,
      provincia: "Cartago",
      canton: "Cartago",
      distrito: "Oriental"
    },
    {
      ID: 5,
      provincia: "Cartago",
      canton: "y",
      distrito: "b"
    },
    {
      ID: 6,
      provincia: "Cartago",
      canton: "Cartago",
      distrito: "Occidental"
    },
    {
      ID: 7,
      provincia: "San Jose",
      canton: "xm",
      distrito: "y"
    }, {
      ID: 8,
      provincia: "Alajuela",
      canton: "San Ramon",
      distrito: "San"
    },
    {
      ID: 9,
      provincia: "Cartago",
      canton: "y",
      distrito: "A"
    }, {
      ID: 10,
      provincia: "Cartago",
      canton: "artago",
      distrito: "Baltazar"
    }];
  }

}
