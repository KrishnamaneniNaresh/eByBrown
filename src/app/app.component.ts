import { LoginPage } from './../pages/login/login';
import { Http } from '@angular/http';
import { EBy } from './../providers/e-by';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
  providers: [EBy],
})
export class MyApp {
  rootPage:any = LoginPage;
  logins:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public service: EBy, public http: Http, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.service.getLogins().then(data => this.logins = data);
    });
   
  }
 details(item){
    this.events.publish('content-update', item);
  }
}
