import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PropertyService } from 'src/app/services/property.service';
import { AudienceService } from 'src/app/services/audience.service';
import { LocationService } from 'src/app/services/location.service';
import { AdsService } from 'src/app/services/ads.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.css']
})
export class ViewAdsComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _property: PropertyService,
    public _audience: AudienceService,
    public _locations: LocationService,
    public _ads: AdsService,
    public _state: StateService
  ) { }

  public desactivado:boolean = true;

  ngOnInit() {
  }

}
