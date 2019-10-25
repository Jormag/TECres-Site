import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';
import { AppState, UserState } from 'src/app/common/interfaces';
import * as $ from 'jquery';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _api: ApiService,
    public _state: StateService
  ) {
  }
  public usuario:string
  public password:string

  ngOnInit() {
    $("#login-btn").click(function (e) {
      e.preventDefault();
    });
  }

  logIn() {
    const user = (document.querySelector('#user') as HTMLInputElement).value
    const password = (document.querySelector('#password') as HTMLInputElement).value
    for(let user of this._user.users){
      if(this.usuario == user.usuario && this.password == user.password){
        this._state.userState = UserState.Logged
        this._state.appState = AppState.Busqueda
      }
    }

    /*this._api.logIn(user, password).subscribe(Response => {
      if (Response.success) {
        this._user.user = Response.user,
        this._state.userState = UserState.Logged,
        this._state.appState = AppState.Busqueda,
        console.log(this._user.user)
      }
    })
    */
  }
}
