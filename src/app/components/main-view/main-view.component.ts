import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PropertyService } from 'src/app/services/property.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';
import { AudienceService } from 'src/app/services/audience.service';
import { AdsService } from 'src/app/services/ads.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _property: PropertyService,
    public _locations: LocationService,
    public _state: StateService,
    public _audience: AudienceService,
    public _ads: AdsService
  ) { }

  public desactivado:boolean = true;

  ngOnInit() {
  }

}
