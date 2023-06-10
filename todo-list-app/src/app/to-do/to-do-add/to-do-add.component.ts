import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss'],
})
export class ToDoAddComponent implements OnInit {

  @Input()
  list: any[] = [];

  newTask: any = {};

  ngOnInit(): void { console.log('ToDoAddComponent -- OnInit');}
  constructor(private toastrService: ToastrService) {
    console.log('ToDoAddComponent -- constructor');
  }

  add(): void {
    if (!this.newTask.name) return;
    this.list.push(this.newTask);
    this.newTask = {};
    this.toastrService.success('ToDo App','Nueva tarea agregada')
  }
}
