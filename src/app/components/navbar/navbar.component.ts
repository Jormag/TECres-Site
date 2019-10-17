import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { AppState, UserState } from 'src/app/common/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    public _state: StateService
  ) { }

  onInit(){}

  logIn() {
    this._state.appState = AppState.LogIn;
  }
  logOut() {
    this._state.userState = UserState.NotLogged;
    this._state.appState = AppState.Busqueda;
  }
  signUp() {
    this._state.appState = AppState.Registro;
  }
  viewProfile() {
    this._state.appState = AppState.Perfil;
  }

  home() {
    this._state.appState = AppState.Busqueda;
    this._state.advanceSearch = false;
  }

  checkSearchState(): Boolean {
    return (this._state.appState == AppState.Busqueda);
  }

  checkLogInState(): Boolean {
    return (this._state.userState == UserState.Logged);
  }
  checkLogOutState(): Boolean {
    return (this._state.userState == UserState.NotLogged);
  }

}
