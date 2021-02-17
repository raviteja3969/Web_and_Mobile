import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timer';
  constructor() { }
  ngOnInit() {}

  countDownDate = new Date("April 20, 2021 15:25:30").getTime();
  demo:any;
  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.countDownDate - now;
    var months= Math.floor(distance / (1000 * 60 * 60 * 24*30));
    var days= Math.floor(distance % (1000 * 60 * 60 * 24 *30)/(1000 * 60 * 60 *24));
    var hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds= Math.floor((distance % (1000 * 60)) / (1000));
    this.demo = months+"m "+days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if(distance<0){
      clearInterval(this.x);
      this.demo = "Expired";
    }
  })

}
