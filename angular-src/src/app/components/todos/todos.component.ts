import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/todo";
import { DataServiceService } from "../../services/data-service.service";
declare var $: any;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  error: any = {
    show: false,
    msg: '',
  };
  todos: Todo[];
  title: String;
  id: Number;
  constructor(
    private _dataService: DataServiceService,
  ) { }

  ngOnInit() {
    this.getTodo();
    this.jquery_code();
  }

  getTodo(){
    this._dataService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  deleteTodo(todo: Todo) {
    // delete from ui
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // delete from server
    this._dataService.deleteTodo(todo).subscribe();
  }
  onDelete(todo: Todo) {
    this.deleteTodo(todo);
    this.error.show = true;
    this.error.msg = 'Deleted Succesfully';
    setTimeout(() => {
      this.error.show = false;
      this.error.msg = '';
    }, 2000);
    console.log('deleted succesfully');
  }
  addTodo(todo: Todo) {
    // add to ui
    this.todos.unshift(todo);
    this.error.show = true;
    this.error.msg = 'Added Succesfully';
    setTimeout(() => {
      this.error.show = false;
      this.error.msg = '';
    }, 2000);
    console.log('added succesfully');
    // delete from server
    this._dataService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
  onSubmit() {
    const todo = {
      id: this.id,
      title: this.title,
      completed: false,
    }
    this.addTodo(todo);
  }


  jquery_code() {
    $(document).ready(function () {
      //init side nav
      (<any>$('.button-collapse')).sideNav();

      //init modal
      (<any>$('.modal')).modal();

      //init scrollspy
      (<any>$('.scrollspy')).scrollSpy();

      // init parallax effect
      (<any>$('.parallax')).parallax();

      // init collapsible
      (<any>$('.collapsible')).collapsible();

      // Carousel
      (<any>$('.carousel.carousel-slider')).carousel({ fullWidth: true },
        { duration: 9000 });
      // Next slide
      (<any>$('.carousel')).carousel('next');
      (<any>$('.carousel')).carousel('next', 3); // Move next n times.
    });
  }
}
