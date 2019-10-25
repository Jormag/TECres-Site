import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OccupationService } from 'src/app/services/occupation.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';
import { ProfileService } from 'src/app/services/profile.service';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { ProfileState } from 'src/app/common/interfaces';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _occupations: OccupationService,
    public _locations: LocationService,
    public _state: StateService,
    public _profile: ProfileService
    ) { }

    public editar:boolean = false;
    public rePass:string = null;

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
          $('#error_contraseña').attr("class", "control-label col-auto text-success");
          $('#error_contraseña').show();
          $('#error_contraseña').html("Las constraseñas si coinciden");
        } else {
          $('#error_contraseña').attr("class", "control-label col-auto text-danger");
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
      return (this._user.user.profile.Perfil == "Comprador")
    }
  
    private asignarUserLocation() {
      for (let tempUbicacion of this._locations.locations) {
        if (tempUbicacion.provincia == this._locations.tempLocation.provincia && tempUbicacion.canton == this._locations.tempLocation.canton && tempUbicacion.distrito == this._locations.tempLocation.distrito) {
          this._user.user.ubicacion = this._locations.tempLocation;
        }
      }
    }
  
  }
  