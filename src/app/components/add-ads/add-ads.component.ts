import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service';
import { StateService } from 'src/app/services/state.service';
import { AdsService } from 'src/app/services/ads.service';
import { PropertyService } from 'src/app/services/property.service';
import { AudienceService } from 'src/app/services/audience.service';
import { AdTypeService } from 'src/app/services/ad-type.service';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.css']
})
export class AddAdsComponent implements OnInit {

  constructor(
    public _user: UserService,
    public _property: PropertyService,
    public _audience: AudienceService,
    public _locations: LocationService,
    public _ads: AdsService,
    public _state: StateService,
    public _adTypes: AdTypeService
  ) { }

  ngOnInit() {
    $(function () {
      $('[type="date"]').prop('min', function () {
        return new Date().toJSON().split('T')[0];
      });
    });

    $(document).ready(function () {
      $('#error_fechas').hide();
    });

    var checkDateLimits = function () {
      var min = $('#inputStartDate').val();
      var max = $('#inputEndDate').val();
      if (max != '' && min != ''){
        if (max >= min) {
          $('#error_fechas').hide();
        } else {
          $('#error_fechas').attr("class", "control-label col-auto text-danger");
          $('#error_fechas').html("La fecha de fin debe ser mayor a la de inicio");
          $('#error_fechas').show();
        }
      }else{
        $('#error_fechas').hide();
      }
    }

    $("#inputStartDate").on('blur', checkDateLimits);
    $("#inputEndDate").on('blur', checkDateLimits);

    this.resetAd();
  }

  resetAd(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this._ads.resetAd();
    this._locations.resetTempLocation();
  }

}
