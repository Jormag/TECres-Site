import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PropertyService } from 'src/app/services/property.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';
import { Inmueble, Piso, Propiedad, Locations} from 'src/app/common/interfaces';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _property: PropertyService,
    public _locations: LocationService,
    public _state: StateService
  ) { }

  public desactivado = true;

  ngOnInit() {
    
  }
  
}
