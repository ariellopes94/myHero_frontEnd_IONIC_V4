import { AuthInterceptorProvider } from './../interceptors/auth-interceptor';
import { StorageService } from './../services/storage.service';
import { AuthService } from './../services/auth.service';
import { PacienteService } from './../services/domain/paciente.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http'
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PacienteService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService
  ]
})
export class AppModule {}
