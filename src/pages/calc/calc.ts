import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Calc page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html',
})
export class Calc {
no1:number=0;
no2:number=0;
ans:number=0;
onAdd()
{
  this.ans=this.no1+this.no2;
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calc');
    
  }
  hello()
  {
    console.log('Heloo');

  }

}
