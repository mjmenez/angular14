import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  title = 'todo-list-app';
  list: any[] = [];
  newTask: any={};

  ngOnInit(): void {


  }



}
