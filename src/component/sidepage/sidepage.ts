import {Component} from '@angular/core';
import {
  ViewChild,
  Params,
  OnsNavigator,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import * as ons from 'onsenui';



@Component({
  selector: 'ons-page[sidepage]',
  template: require('./sidepage.html'),
  styles: [
    './sidepage.css'
  ]
})
export class SidePage {
  constructor() {}
  homepage() {
      
  }
}
