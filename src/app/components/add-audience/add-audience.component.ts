import { Component, OnInit } from '@angular/core';
import { AudienceService } from 'src/app/services/audience.service';
import { LocationService } from 'src/app/services/location.service';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-audience',
  templateUrl: './add-audience.component.html',
  styleUrls: ['./add-audience.component.css']
})
export class AddAudienceComponent implements OnInit {

  constructor(
    public _audience:AudienceService,
    public _locations:LocationService
  ) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#error_edad').hide();
    });

    var checkAgeLimits = function () {
      var min = $('#inputMinAge').val();
      var max = $('#inputMaxAge').val();
      if (max != '' && min != ''){
        if (max >= min) {
          $('#error_edad').hide();
        } else {
          $('#error_edad').attr("class", "control-label col-md-12 text-danger");
          $('#error_edad').html("El maximo debe ser mayor o igual al minimo");
          $('#error_edad').show();
        }
      }else{
        $('#error_edad').hide();
      }
    }

    $("#inputMinAge").on('keyup', checkAgeLimits);
    $("#inputMaxAge").on('keyup', checkAgeLimits);

    this.resetAudience();
  }

  resetAudience(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this._audience.resetAudience();
    this._locations.resetTempLocation();
  }

}
