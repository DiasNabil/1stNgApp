import { Component, OnInit } from '@angular/core';
import { Snap } from '../models/face-snap.model';
import { SnapsService } from '../services/snap.service';


@Component({
  selector: 'app-snap-list',
  templateUrl: './snap-list.component.html',
  styleUrls: ['./snap-list.component.scss']
})

export class SnapListComponent implements OnInit{

  arraySnaps!: Snap[];

  constructor(private snapsService: SnapsService) {}

  ngOnInit(){

    this.arraySnaps = this.snapsService.getAllSnaps()
  }



}
