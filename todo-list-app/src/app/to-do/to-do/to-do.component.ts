import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  title = 'todo-list-app';
  list: any[] = [];
  newTask: any = {};

  ngOnInit(): void {
    console.log('ToDoComponent -- OnInit');
    this.list.push({ id: 1, name: 'Limpiar habitación 402', default: true });
    this.list.push({ id: 2, name: 'Cargar Frigo bar 402', default: true });
  }
}
