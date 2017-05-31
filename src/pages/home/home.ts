import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginDetail: any = [];
  constructor(public navCtrl: NavController, public events: Events) {
    this.events.subscribe('content-update', (params) => this.updateDetail(params));
  }
  updateDetail(logins){
    this.loginDetail = logins;
  }
}
