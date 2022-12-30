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
import {MenuService} from '../../app/menu';
import {TextPage} from '../textpage/textpage'

@Component({
  selector: 'ons-page[contentpage]',
  template: require('./contentpage.html'),
  styles: [
    './contentpage.css'
  ]
})
export class ContentPage {
    textpage = TextPage;
  constructor(private menuService: MenuService) {}
  openMenu() {
    this.menuService.open();
  }
}
