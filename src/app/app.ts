import {Component} from '@angular/core';
import * as ons from 'onsenui';

import {First} from './first';
import {Second} from './second';
import {ContentPage} from '../component/contentpage/contentpage';
import {SidePage} from '../component/sidepage/sidepage';
import {MenuService} from './menu';
import {
  Component,
  Injectable,
  ViewChild,
  OnsenModule,
  NgModule,
  OnsNavigator,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [
    './app.css'
  ]
})
export class MyApp {
  first = First;
  second = Second;
  content = ContentPage;
  side = SidePage;
  @ViewChild('splitter') splitter;

  animation = ons.platform.isAndroid() ? 'slide' : 'none';
  modifier = ons.platform.isAndroid() ? 'material noshadow' : '';

  constructor(private menuService: MenuService) {
      this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.open());
  }
}
