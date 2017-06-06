import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NativeStorage } from 'ionic-native';




@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	email;



  constructor(public navCtrl: NavController) {
  	
  	


  
  }

  onStore(){

  NativeStorage.setItem('email', {email: this.email})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );


  
}

}