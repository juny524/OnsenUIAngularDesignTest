import {Component} from '@angular/core';
import * as ons from 'onsenui';
import {MenuService} from '../../app/menu';


@Component({
  selector: 'sidepage',
  template: require('./sidepage.html'),
  styles: [
    './sidepage.css'
  ]
})
export class SidePage {
  constructor(private menuService: MenuService) {}
  closeMenu() {
    this.menuService.close();
  }
}
