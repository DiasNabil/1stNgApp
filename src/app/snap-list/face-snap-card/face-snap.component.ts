import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { SnapsService } from 'src/app/services/snap.service';
import { Snap } from '../../models/face-snap.model';
import {Router} from '@angular/router'



@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit{

  @Input() snap!: Snap;
  likeBtn!: string;

  constructor(private snapsService: SnapsService, private router: Router) {}

  ngOnInit(){

    this.likeBtn = '❤️‍🔥'

  }

  onLike(){

    if(this.likeBtn ==='❤️‍🔥' ){

      this.snapsService.likeSnap(this.snap.id, this.likeBtn)
      this.likeBtn = '💔'

      /**
       * this.snap.like++
       *console.log(this.snap.like, this.snapsService.getSnapById(this.snap.id).like)
      */

    }else if(this.likeBtn === '💔'){

      this.snapsService.likeSnap(this.snap.id, this.likeBtn)
      this.likeBtn = '❤️‍🔥'

      /**
       * this.snap.like--
       * console.log(this.snap.like, this.snapsService.getSnapById(this.snap.id).like)
      */
    }

  }

  onClickSnap(){

    this.router.navigateByUrl(`snaps/${this.snap.id}`)

  }

}


