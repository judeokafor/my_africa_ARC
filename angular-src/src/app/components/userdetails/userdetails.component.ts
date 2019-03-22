import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from "../../models/user";
import { Photo } from "../../models/photo";
import { DataServiceService } from "../../services/data-service.service";
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  users: User[];
  photos: Photo[];
  constructor(
    private _dataService: DataServiceService,
    private route : ActivatedRoute,
  ) { 
    this.route.params.subscribe( params => {
      this.users = params.id
    });
  }

  ngOnInit() {
    this._dataService.getUserId(this.users).subscribe(users => {
      this.users = users;
    });
  }

}
