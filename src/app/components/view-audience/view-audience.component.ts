import { Component, OnInit } from '@angular/core';
import { AudienceService } from 'src/app/services/audience.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-view-audience',
  templateUrl: './view-audience.component.html',
  styleUrls: ['./view-audience.component.css']
})
export class ViewAudienceComponent implements OnInit {

  constructor(
    public _audience:AudienceService,
    public _locations:LocationService
  ) { }

  public desactivado:boolean = true;

  ngOnInit() {
  }

}
