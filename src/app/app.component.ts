import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SQLite } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      let db = new SQLite();
      db.openDatabase({
        name: "data.db",
        location: "default"

      }).then( () => {

        db.executeSql("CREATE TABLE IF NOT EXISTS EMAIL (id INTEGER PRIMARY KEY AUTOINCREMENT ,EMAIL TEXT)",{})
          .then( (data) => {
            console.log("table created" ,data);
          },(error) => {
            console.error("unable to excute sql" ,error );

          })

      },(error)=> {
        console.error("unable to open database",error);
      });

    });
  }
}
