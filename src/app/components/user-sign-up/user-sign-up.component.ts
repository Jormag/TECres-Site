import { Component, OnInit } from '@angular/core';
import { Profile, Usuario, Locations, Profile2Label } from 'src/app/common/interfaces'
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { OccupationService } from 'src/app/services/occupation.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  constructor(
    private _user: UserService,
    private _occupations: OccupationService,
    private _locations: LocationService,
    private _state: StateService
    ) { }

    public P2L = Profile2Label;
    public PTypes = [this.P2L[Profile.Administrador],this.P2L[Profile.Agente],this.P2L[Profile.Comprador]];
    public profileTypes = Object.values(Profile).filter(value => typeof value === 'number');

  ngOnInit() {
    $(function () {
      $('[type="date"]').prop('max', function () {
        return new Date().toJSON().split('T')[0];
      });
    });

    $(document).ready(function () {
      $('#error_contraseña').hide();
    });

    var checkPassword = function () {
      var cont = $('#inputPassword').val();
      var cont2 = $('#inputRePassword').val();
      if (cont == cont2) {
        $('#error_contraseña').hide();
        $('#error_contraseña').attr("class", "control-label col-md-12 text-success");
        $('#error_contraseña').show();
        $('#error_contraseña').html("Las constraseñas si coinciden");
      } else {
        $('#error_contraseña').attr("class", "control-label col-md-12 text-danger");
        $('#error_contraseña').html("Las constraseñas no coinciden");
        $('#error_contraseña').show();
      }
    }

    $("#inputPassword").on('keyup', checkPassword);
    $("#inputRePassword").on('keyup', checkPassword);

    this.resetUser();
    this._locations.resetTempLocation();
  }

  resetUser(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this._user.resetUser();
  }


  public check(){
    if(this._user.user.profile == Profile.Comprador){
      return true;
    }else{
      return false;
    }
  }
  public setComprador(){
    this._user.user.profile = Profile.Comprador
  }
  public setAgente(){
    this._user.user.profile = Profile.Agente
  }

  private asignarUserLocation() {
    for (let tempUbicacion of this._locations.locations) {
      if (tempUbicacion.provincia == this._locations.tempLocation.provincia && tempUbicacion.canton == this._locations.tempLocation.canton && tempUbicacion.distrito == this._locations.tempLocation.distrito) {
        this._user.user.ubicacion = this._locations.tempLocation;
      }
    }
  }

}
