import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PropertyService } from 'src/app/services/property.service';
import { AudienceService } from 'src/app/services/audience.service';
import { LocationService } from 'src/app/services/location.service';
import { AdsService } from 'src/app/services/ads.service';
import { StateService } from 'src/app/services/state.service';
import { AdType2Label, AdType } from 'src/app/common/interfaces';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.css']
})
export class ViewAdsComponent implements OnInit {

  constructor(
    private _user: UserService,
    private _property: PropertyService,
    private _audience: AudienceService,
    private _locations: LocationService,
    private _ads: AdsService,
    private _state: StateService
  ) { }

  public desactivado:boolean = true;

  public A2L = AdType2Label;
  public ATypes = [this.A2L[AdType.Normal], this.A2L[AdType.Destacado], this.A2L[AdType.Oro],this.A2L[AdType.Platino]];
  public AdTypes = Object.values(AdType).filter(value => typeof value === 'number');

  ngOnInit() {
  }

}
