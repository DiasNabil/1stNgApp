import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { SnapsService } from 'src/app/services/snap.service';
import { Snap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-snap',
  templateUrl: './single-snap.component.html',
  styleUrls: ['./single-snap.component.scss']
})
export class SingleSnapComponent implements OnInit{

    snap!: Snap;
    likeBtn!: string;

    constructor(private snapsService: SnapsService, private route: ActivatedRoute) {}

    ngOnInit(){

      this.likeBtn = '❤️‍🔥'

      const snapId = Number(this.route.snapshot.params['id']);
      this.snap = this.snapsService.getSnapById(snapId)

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

}
