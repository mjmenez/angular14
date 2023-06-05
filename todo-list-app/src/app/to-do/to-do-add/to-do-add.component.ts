import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss'],
})
export class ToDoAddComponent implements OnInit {

  @Input() list: any[] = [];
  newTask: any = {};

  ngOnInit(): void {}
  constructor() {}

  add(): void {
    if (!this.newTask.name) return;
    this.list.push(this.newTask);
    this.newTask = {};
  }
}
