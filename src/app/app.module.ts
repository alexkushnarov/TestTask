import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { MlbModule } from './mlb/mlb.module';

import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
<<<<<<< HEAD
=======
import { SlickModule } from 'ngx-slick';
>>>>>>> team-lineups
import { Logger } from 'angular2-logger/core';
import {
  ApiService,
  ArticlesService,
  AuthGuard,
  CommentsService,
  FooterComponent,
  HeaderComponent,
  ScorebarComponent,
  JwtService,
  ProfilesService,
  SharedModule,
  ScorebarService,
  UserService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ScorebarComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    ProfileModule,
    rootRouting,
    SharedModule,
    SettingsModule,
    NgbModule.forRoot(),
<<<<<<< HEAD
=======
    SlickModule.forRoot(),
>>>>>>> team-lineups
    MlbModule
  ],
  providers: [
    ApiService,
    ArticlesService,
    AuthGuard,
    CommentsService,
    JwtService,
    ProfilesService,
    ScorebarService,
    UserService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
