import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Task } from "./task";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
arr:Task[]=[
  new Task('1','faf','done'),
  new Task('2','fafcS','pending')
];
onDelete(item)
{
  this.arr.splice(this.arr.indexOf(item),1);
}
  constructor(public navCtrl: NavController) {

  }

}
