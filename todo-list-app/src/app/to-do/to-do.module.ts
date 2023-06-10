import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    ToDoComponent,
    ToDoAddComponent,
    ToDoListComponent,
    ToDoItemComponent,
  ],
  imports: [CommonModule, FormsModule, DirectivesModule],
  exports: [ToDoComponent],
})
export class ToDoModule
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  list: any[] = [];
  color = 'yellow';
  ngOnDestroy(): void {
    console.log('ToDoModule -- ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    console.log('ToDoModule -- ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ToDoModule -- gAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ToDoModule -- gAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ToDoModule -- ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('ToDoModule -- ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ToDoModule -- ngOnChanges');
  }
  ngOnInit(): void {
    console.log('ToDoModule -- ngOnInit');
  }
}
