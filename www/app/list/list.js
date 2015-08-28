import {bootstrap, Component, View, NgFor} from 'angular2/angular2';
import {Validators, Control, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController, NavParams} from 'ionic/ionic';

@IonicView({
  templateUrl: '/app/list/list.html'
})
export class ListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['ion-home', 'ion-wifi', 'ion-beer', 'ion-ios-football', 'ion-ios-basketball', 'ion-paper-airplane',
    'ion-ios-americanfootball', 'ion-fireball', 'ion-email', 'ion-heart'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ListPage, {
      item: item
    })
  }
}