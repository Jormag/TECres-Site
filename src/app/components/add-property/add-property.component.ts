import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PropertyService } from 'src/app/services/property.service';
import { StateService } from 'src/app/services/state.service';
import { LocationService } from 'src/app/services/location.service';
import { FloorService } from 'src/app/services/floor.service';
import { PropertyTypeService } from 'src/app/services/property-type.service';
import { AppState } from 'src/app/common/interfaces';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _property: PropertyService,
    public _locations: LocationService,
    public _state: StateService,
    public _floors: FloorService,
    public _propertyTypes: PropertyTypeService
  ) { }

  ngOnInit() {
    $('.custom-file-input').on('change', function (event) {
      var inputFile = event.currentTarget;
      $(inputFile).parent()
        .find('.custom-file-label')
        .html(inputFile.files[0].name);
    });

    this.resetProperty();
  }

  resetProperty(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this._property.resetProperty();
    this._locations.resetTempLocation();
  }

  registrar(){
    this._property.property.owner = this._user.user;
    this.asignarUbicacion();
    this._state.appState = AppState.MostrarPropiedad;    
  }

  asignarUbicacion() {
    for (let tempUbicacion of this._locations.locations) {
      if (tempUbicacion.provincia == this._locations.tempLocation.provincia && tempUbicacion.canton == this._locations.tempLocation.canton && tempUbicacion.distrito == this._locations.tempLocation.distrito) {
        this._property.property.ubicacion = tempUbicacion;
      }
    }
  }

}
