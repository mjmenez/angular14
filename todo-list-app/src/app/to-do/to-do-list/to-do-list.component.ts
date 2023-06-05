import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit{
  @Input() list: any[] = [];

  constructor(){}

  ngOnInit(): void {

    this.list.push({ id: 1, name: 'Limpiar habitación 402' });
    this.list.push({ id: 2, name: 'Cargar Frigo bar 402' });
  }
  delete(item: any): void {
    if(!item.name)
    return;
    debugger;
    let index = this.list.findIndex(x => x.name == item.name);
    //delete this.list[index];
    this.list.splice(index,1);
  }
}
