import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/post";
import { DataServiceService } from "../../services/data-service.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private _dataService: DataServiceService) { }

  ngOnInit() {
    this._dataService.getPosts().subscribe(posts=>{
      this.posts =posts;
    });
  }

}
