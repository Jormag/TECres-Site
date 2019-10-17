import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { OccupationService } from 'src/app/services/occupation.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';
import { Profile } from 'src/app/common/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {

  constructor(
    private _user: UserService,
    private _occupations: OccupationService,
    private _locations: LocationService,
    private _state: StateService) { }

    public editar:boolean = false;

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

    }
  
    public activarEdicion(){
      this.editar = true;
    }
    public desactivarEdicion(){
      this.editar = false;
    }
  
    public check(){
      return (this._user.user.profile == Profile.Comprador)
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
  