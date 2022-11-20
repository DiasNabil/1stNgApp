import { Injectable } from "@angular/core";
import { Snap } from "../models/face-snap.model";

@Injectable({

  providedIn: 'root'
})

export class SnapsService{

  arraySnaps: Snap[] = [
    {
      id : 1,
      title : 'maki the goat',
      date: new Date(),
      imgUrl: 'https://ih1.redbubble.net/image.3304314408.5482/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      like: 44444,
    },

    {
      id : 2,
      title : 'toji fushiguro',
      date : new Date(),
      imgUrl : 'https://ih1.redbubble.net/image.4460561906.5650/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      like : 4444,
    },

    {
      id : 3,
      title : 'satoru gojo',
      date : new Date(),
      imgUrl : 'https://ih1.redbubble.net/image.4308192007.1487/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      like : 444,
      location : 'Void'
    }
  ]

  getAllSnaps(): Snap[] {
    return this.arraySnaps
  }

  getSnapById(snapId: number){
    const snap = this.arraySnaps.find(snap => snap.id === snapId)

    if(!snap){
      throw new Error('snap not found!')

    }else{
      return snap
    }

  }

  likeSnap(snapId: number, likeBtn: '❤️‍🔥' | '💔'): void {

    const snap = this.getSnapById(snapId)

    if(likeBtn === '❤️‍🔥'){
      snap.like++

    }else(snap.like--)

  }
}



