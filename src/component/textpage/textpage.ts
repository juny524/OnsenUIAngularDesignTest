import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {
  ViewChild,
  Params,
  OnsNavigator,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

@Component({
  selector: 'ons-page[textpage]',
  template: require('./textpage.html'),
  styles: [
    './textpage.css'
  ]
})
export class TextPage {
  constructor(private _navigator: OnsNavigator, private _params: Params) {
      
  }
}
