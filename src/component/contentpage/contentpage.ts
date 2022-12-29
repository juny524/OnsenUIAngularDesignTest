import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {MenuService} from '../../app/menu';

@Component({
  selector: 'contentpage',
  template: require('./contentpage.html'),
  styles: [
    './contentpage.css'
  ]
})
export class ContentPage {
  constructor(private menuService: MenuService) {}
  openMenu() {
    this.menuService.open();
  }
}
