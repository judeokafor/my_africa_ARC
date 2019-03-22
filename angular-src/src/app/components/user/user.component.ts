import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { DataServiceService } from "../../services/data-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(
    private _dataService: DataServiceService,
  ) { }

  ngOnInit() {
    this._dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
