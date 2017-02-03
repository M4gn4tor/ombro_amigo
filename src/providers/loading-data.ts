import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoadingData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoadingData {

  constructor(public http: Http) {
  }

  getData(){
    return this.http.get('data/data.json').map(res => res.json());
  }
}
