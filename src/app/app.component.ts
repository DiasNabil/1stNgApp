import { Component, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  arraySnaps!: FaceSnap[];

  ngOnInit(){

    this.arraySnaps = [
      {
        title : 'maki the goat',
        date: new Date(),
        imgUrl: 'https://ih1.redbubble.net/image.3304314408.5482/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
        like: 44444,
      },

      {
        title : 'toji fushiguro',
        date : new Date(),
        imgUrl : 'https://ih1.redbubble.net/image.4460561906.5650/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
        like : 4444,
      },

      {
        title : 'satoru gojo',
        date : new Date(),
        imgUrl : 'https://ih1.redbubble.net/image.4308192007.1487/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
        like : 444,
        location : 'Void'
      }
    ]

  }
}
