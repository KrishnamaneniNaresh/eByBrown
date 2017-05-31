import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EBy provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EBy {

  constructor(public http: Http) {
    console.log('Hello EBy Provider');
  }

  getLogins(){
    return new Promise((resolve, reject) =>
    { 
      this.http.get("https://api.github.com/users/hadley/orgs")
      .map((response) => response.json())
      .subscribe((result) => {
        resolve(result);
      });
    });
  }

}
