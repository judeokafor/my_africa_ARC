import { Component, OnInit } from '@angular/core';
import { Comment } from "../../models/comment";
import { DataServiceService } from "../../services/data-service.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
    this._dataService.getComments().subscribe(comments=>{
      this.comments = comments;
    });
  }

}
