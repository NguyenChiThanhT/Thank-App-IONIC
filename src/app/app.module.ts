import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewsApiService} from "../services/newsapi.service";
import {HttpModule} from "@angular/http";
import {ModalLikePage} from "../pages/modal-like/modal-like";
import {ListCountstartPage} from "../pages/list-countstart/list-countstart";
import { AngularFireModule } from 'angularfire2';
import {FIREBASE_CONFIG} from './firebase.config';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalLikePage,
    ListCountstartPage
  ],
  imports: [
     AngularFireModule.initializeApp(FIREBASE_CONFIG),
     AngularFireStorageModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalLikePage,
    ListCountstartPage
  ],
  providers: [
    IOSFilePicker,
    FileChooser,
    File,
    NewsApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
