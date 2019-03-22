import { Component, OnInit } from '@angular/core';
import { Photo } from "../../models/photo";
import { DataServiceService } from "../../services/data-service.service";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  photos: Photo[];
  constructor(
    private _dataService: DataServiceService,
  ) { }

  ngOnInit() {
    this._dataService.getPhotos().subscribe(photos => {
      this.photos = photos;
      console.log(photos)
    });
  }

}
