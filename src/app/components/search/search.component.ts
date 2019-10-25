import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LocationService } from 'src/app/services/location.service';
import { Locations } from 'src/app/common/interfaces';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public _locations: LocationService) {
   }

  ngOnInit() {
    this._locations.resetTempLocation();

    $(document).ready(function () {
      $('#error_precio').hide();
    });

    var checkPriceLimits = function () {
      var min = $('#inputMinPrice').val();
      var max = $('#inputMaxPrice').val();
      if (max != '' && min != ''){
        if (max >= min) {
          $('#error_precio').hide();
        } else {
          $('#error_precio').attr("class", "control-label col-md-12 text-danger");
          $('#error_precio').html("El maximo debe ser mayor o igual al minimo");
          $('#error_precio').show();
        }
      }else{
        $('#error_precio').hide();
      }
    }

    $("#inputMinPrice").on('keyup', checkPriceLimits);
    $("#inputMaxPrice").on('keyup', checkPriceLimits);
  }
}


