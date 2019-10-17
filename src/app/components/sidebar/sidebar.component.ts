import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import * as $ from 'jquery';
import { StateService } from 'src/app/services/state.service';
import { AppState, UserState } from 'src/app/common/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public _state: StateService
  ) { }

  ngOnInit() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  advanceSearchOn(){
    this._state.appState=AppState.Busqueda;
    this._state.advanceSearch = true;
  }

  addProperty(){
    this._state.appState=AppState.AgregarPropiedad;
    this._state.advanceSearch = false;
  }

  viewProperty(){
    this._state.appState=AppState.MostrarPropiedad;
    this._state.advanceSearch = false;
  }

  addAds(){
    this._state.appState=AppState.AgregarAnuncio;
    this._state.advanceSearch = false;
  }

  viewAds(){
    this._state.appState=AppState.MostrarAnuncio;
    this._state.advanceSearch = false;
  }

  addAudience(){
    this._state.appState=AppState.AgregarPublico;
    this._state.advanceSearch = false;
  }

  viewAudience(){
    this._state.appState=AppState.MostrarPublico;
    this._state.advanceSearch = false;
  }

  checkAdvanceSearch():Boolean{
    return(this._state.advanceSearch)
  }

  checkSignUpState():Boolean{
    return (this._state.appState == AppState.Registro)
  }
  checkSearchState():Boolean{
    return (this._state.appState == AppState.Busqueda)
  }
  checkLogInProgressState():Boolean{
    return (this._state.appState == AppState.LogIn)
  }
  checkProfileState():Boolean{
    return (this._state.appState == AppState.Perfil)
  }
  checkAddPropertyState():Boolean{
    return (this._state.appState == AppState.AgregarPropiedad)
  }
  checkViewPropertyState():Boolean{
    return (this._state.appState == AppState.MostrarPropiedad)
  }
  checkAddAdsState():Boolean{
    return (this._state.appState == AppState.AgregarAnuncio)
  }
  checkViewAdsState():Boolean{
    return (this._state.appState == AppState.MostrarAnuncio)
  }
  checkAddAudienceState():Boolean{
    return (this._state.appState == AppState.AgregarPublico)
  }
  checkViewAudienceState():Boolean{
    return (this._state.appState == AppState.MostrarPublico)
  }
  
}
