import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit, OnDestroy {
  @Input()
  item: any;
  @Input()
  list: any[] = [];

  constructor() {}
  ngOnDestroy(): void {
    console.log('OnDestroy -- ToDoItemComponent');
  }

  ngOnInit(): void {}
  delete(item: any): void {
    if (!item.name) return;
    debugger;
    let index = this.list.findIndex((x) => x.name == item.name);
    //delete this.list[index];
    this.list.splice(index, 1);
  }
}
