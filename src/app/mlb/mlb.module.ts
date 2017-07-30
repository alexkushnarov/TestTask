import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineupsGatewayComponent } from './lineups-gateway/lineups-gateway.component';

// Services
import { LineupsGatewayService } from './lineups-gateway/lineups-gateway.service';
import { SlickModule } from 'ngx-slick';
import { Logger } from 'angular2-logger/core';


const mlbRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'lineups-gateway',
    component: LineupsGatewayComponent
  }
]);


@NgModule({
  declarations: [
    LineupsGatewayComponent
  ],
  imports: [
    BrowserModule,
    mlbRouting,
    NgbModule.forRoot(),
    SlickModule.forRoot()
  ],
  providers: [
    Logger,
    LineupsGatewayService
  ]
})
export class MlbModule { }
