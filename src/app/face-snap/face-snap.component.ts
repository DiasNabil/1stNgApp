import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() snap!: FaceSnap;


  likeBtn!: string;

  ngOnInit(){

    this.likeBtn = '❤️‍🔥'

  }

  onLike(){

    if(this.likeBtn ==='❤️‍🔥' ){
      this.snap.like++
      this.likeBtn = '💔'

    }else if(this.likeBtn === '💔'){
      this.snap.like--
      this.likeBtn = '❤️‍🔥'
    }

  }

}


