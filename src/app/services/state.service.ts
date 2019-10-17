import { Injectable } from '@angular/core';
import { AppState, UserState } from '../common/interfaces'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  appState:AppState = AppState.Busqueda;
  userState:UserState = UserState.NotLogged;
  advanceSearch:Boolean = false;
}
