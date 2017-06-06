import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NativeStorage } from 'ionic-native';

import { Toast } from 'ionic-native';

import { SMS } from 'ionic-native';








@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	phone;
	email;



  constructor(public navCtrl: NavController) {

  


  		


  }

  onSend(){

  	NativeStorage.getItem('email')
  				.then(
    				data => {
					this.email = data.email
    			},
    				error => console.error(error)
  			);



  	if(this.email === undefined){

  		Toast.show("Please press the button again" , '5000','center');


  	}else if(this.phone === undefined || this.phone == '' || this.phone.length != 10){

  		Toast.show("Please Enter a 10 digit mobile number" , '5000','center').subscribe(
  			toast => {
    		console.log(toast);
  			});



  	}else {
  		SMS.send(this.phone,this.email);
  		Toast.show("Email id sent",'5000','center')


  	}

  	






  		



  



  }

}
