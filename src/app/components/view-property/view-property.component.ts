import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PropertyService } from 'src/app/services/property.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';
import { Inmueble, Piso, Propiedad, Locations, Piso2Label, Inmueble2Label} from 'src/app/common/interfaces';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  constructor(
    private _user: UserService,
    private _property: PropertyService,
    private _locations: LocationService,
    private _state: StateService
  ) { }

  public desactivado = true;

  public P2L = Piso2Label;
  public PTypes = [this.P2L[Piso.Concreto],this.P2L[Piso.Ceramica],this.P2L[Piso.Porcelanato],this.P2L[Piso.Madera]];
  public pisoTypes = Object.values(Piso).filter(value => typeof value === 'number');

  public I2L = Inmueble2Label;
  public ITypes = [this.I2L[Inmueble.Lote],this.I2L[Inmueble.Casa],this.I2L[Inmueble.Apartamento]];
  public inmuebleTypes = Object.values(Inmueble).filter(value => typeof value === 'number');

  ngOnInit() {
    
  }
  
}
