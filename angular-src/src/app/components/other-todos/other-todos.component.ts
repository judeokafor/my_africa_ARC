import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/todo";
import { DataServiceService } from "../../services/data-service.service";
@Component({
  selector: 'app-other-todos',
  templateUrl: './other-todos.component.html',
  styleUrls: ['./other-todos.component.css']
})
export class OtherTodosComponent implements OnInit {
  todos: Todo[];

  constructor(
    private _dataService: DataServiceService,
  ) { }

  ngOnInit() {
    this._dataService.getFullTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
