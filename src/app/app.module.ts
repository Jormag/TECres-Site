import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserTabComponent } from './components/user-tab/user-tab.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiService } from './services/api.service'
import { StateService } from './services/state.service'
import { UserService} from './services/user.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OccupationService } from './services/occupation.service';
import { LocationService } from './services/location.service';
import { UserSignUpProvinceFilter,UserSignUpCantonFilter,uniqueDistrictFilter,uniqueCantonFilter,uniqueProvinceFilter } from './components/user-sign-up/user-sign-up-filter.pipe';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { PropertyService } from './services/property.service';
import { ViewAdsComponent } from './components/view-ads/view-ads.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AudienceService } from './services/audience.service';
import { SearchService } from './services/search.service';
import { AdsService } from './services/ads.service';
import { AddAudienceComponent } from './components/add-audience/add-audience.component';
import { ViewAudienceComponent } from './components/view-audience/view-audience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserTabComponent,
    UserSignUpComponent,
    SidebarComponent,
    LogInComponent,
    SearchComponent,
    AddPropertyComponent,
    FooterComponent,
    UserSignUpProvinceFilter,
    UserSignUpCantonFilter,
    uniqueDistrictFilter,
    uniqueCantonFilter,
    uniqueProvinceFilter,
    ViewPropertyComponent,
    ViewAdsComponent,
    AddAdsComponent,
    MainViewComponent,
    AddAudienceComponent,
    ViewAudienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ApiService,
    StateService,
    UserService,
    OccupationService,
    LocationService,
    PropertyService,
    AudienceService,
    SearchService,
    AdsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
